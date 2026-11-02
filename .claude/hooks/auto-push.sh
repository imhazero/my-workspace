#!/usr/bin/env bash
# =====================================================================
# auto-push.sh — Claude 답변이 끝날 때마다 바뀐 파일을 GitHub에 자동 업로드
#
# 실행 시점: Claude Code "Stop" 훅 (.claude/settings.json 에 등록)
# 안전장치:
#   1) 바뀐 파일이 없으면 아무것도 하지 않음
#   2) .env / 키 / .bak / credential / secret 같은 파일이 섞여 있으면 중단
#   3) 파일 내용에 API 키처럼 보이는 문자열이 있으면 중단
#   → 중단되면 아무것도 올리지 않고 화면에 경고만 표시
# 끄는 방법: .claude/settings.json 에서 "Stop" 항목 삭제, 또는 /hooks 메뉴
# =====================================================================

say() {  # 사용자 화면에 한 줄 메시지 표시 (JSON 형식)
  node -e 'console.log(JSON.stringify({systemMessage: process.argv[1]}))' "$1"
}

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/../..}" || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

# 1) 바뀐 파일이 없으면 종료
[ -z "$(git status --porcelain)" ] && exit 0

git add -A

# 2) 위험한 파일 이름 검사
BAD_FILES=$(git diff --cached --name-only | grep -iE '(^|/)\.env|\.(key|pem|p12|pfx|bak)$|(^|/)id_(rsa|ed25519)|credential|secret')
if [ -n "$BAD_FILES" ]; then
  git reset -q
  say "🚨 자동 업로드 중단: 민감할 수 있는 파일이 포함돼 있어요 → $(echo $BAD_FILES)  (.gitignore 확인 필요, 아무것도 올리지 않았어요)"
  exit 0
fi

# 3) 키처럼 보이는 문자열 검사 (새로 추가된 줄만)
SECRET_HIT=$(git diff --cached -U0 | grep -E '^\+' | grep -v '^+++' | grep -nE \
  'sk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]*PRIVATE KEY-----|(api[_-]?key|secret|token|passw(or)?d)["'"'"']?[[:space:]]*[:=][[:space:]]*["'"'"']?[A-Za-z0-9/+_-]{12,}' \
  | head -1)
if [ -n "$SECRET_HIT" ]; then
  git reset -q
  say "🚨 키 노출 의심: 바뀐 내용에 API 키처럼 보이는 문자열이 있어 자동 업로드를 중단했어요. 아무것도 올리지 않았어요."
  exit 0
fi

# 4) 저장 기록(커밋) 만들고 올리기
COUNT=$(git diff --cached --name-only | wc -l | tr -d ' ')
git commit -q -m "자동 저장: $(date '+%Y-%m-%d %H:%M') (파일 ${COUNT}개)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>" || { say "⚠️ 자동 업로드 실패: 저장 기록(커밋)을 만들지 못했어요."; exit 0; }

if GIT_TERMINAL_PROMPT=0 GCM_INTERACTIVE=never timeout 60 git push -q origin HEAD >/dev/null 2>&1; then
  say "☁️ GitHub 자동 업로드 완료 (파일 ${COUNT}개)"
else
  say "⚠️ GitHub 자동 업로드 실패: 저장 기록은 내 컴퓨터에 남아 있어요. 인터넷/로그인(gh auth status)을 확인해 주세요. 다음 업로드 때 함께 올라가요."
fi
exit 0
