# 작업 기록 (progress)

> 한 일을 날짜별로 **아래에 계속 추가**합니다. 기존 내용은 지우거나 고치지 않아요.

---

## 2026-11-02

- CLAUDE.md 규칙 확인 (현재 파일 이름이 `CLAUDE.md.md`라 자동으로 읽히지 않는 점 발견)
- 현재 상태 점검: `.ssh` 폴더·오라클 키·SSH 설정 없음, git 설치됨
- `tasks/` 폴더 생성, `todo.md`, `progress.md` 작성
- `SECURITY.md` 비상 매뉴얼 작성 (OpenRouter / Oracle / WordPress)
- `README.md`로 폴더 구조 정리
- `CLAUDE.md.md` → `CLAUDE.md` 이름 변경 (원본 백업: `CLAUDE.md.md.bak`, 내용 동일 확인)
- `.gitignore` 작성 (.env, *.key, *.pem, id_rsa, credentials, *.bak 등 차단 — 임시 폴더에서 git check-ignore 테스트 통과)
- `.env` 빈 틀 작성 (OpenRouter / Oracle / WordPress 키 이름만, 값은 비움)
- `CLAUDE.md` 폴더 경로 수정: `~/claude-workspace` → `C:\Users\82103\Desktop\claude - workspace` (5곳, 수정 전 원본은 `CLAUDE.md.md.bak`)
- [정정] 위 `CLAUDE.md` 폴더 경로 수정은 "5곳"이 아니라 **6곳**(4, 89~92, 102번 줄)임
- 작업 결과 전체 검증 (파일 8개 존재, .gitignore 테스트 11건 통과, 한글 깨짐 없음) / `todo.md` 완료 항목 정리
- `README.md` 파일 안내 표에 `.env`, `.gitignore` 설명 추가
- 다운로드 폴더 정리 (사용자 승인 후 실행): 최상위 파일 2,875개를 확장자 기준으로 이동 → images 953 / docs 1,591 / misc 331
  - 하위 폴더 51개, desktop.ini, ~WRL0003.tmp, Office 임시파일(`~$`)은 이동 안 함
  - 덮어쓰기·삭제 0건, 이름 충돌 0건. 이동 기록: `tasks/downloads_move_log.csv` (원위치 복구용)
  - 중간에 2회 중단: 한글·PowerPoint·Excel에서 열려 있던 파일 잠금 → 사용자가 닫은 뒤 재개. `~$` 임시파일 제외 규칙 추가
  - 검증: 폴더별 실제 파일 수 = 기록 수, 기록된 2,875건 모두 새 위치에 존재·원위치에 없음 확인

## 2026-11-02
- GitHub CLI(gh) 2.103.3 설치 (winget, GitHub.cli) — 설치 확인 완료
- GitHub 로그인: `gh auth login --web` → 계정 imhazero, HTTPS, 토큰은 Windows 자격 증명 관리자(keyring)에 저장
- workspace 폴더 GitHub 업로드: https://github.com/imhazero/my-workspace (**비공개**)
  - `git init -b main`, 작성자: imhazero / GitHub noreply 메일 (이 폴더에만 설정)
  - 올린 파일 7개: .gitignore, CLAUDE.md, README.md, SECURITY.md, tasks/(todo, progress, downloads_move_log.csv — 사용자 선택으로 포함)
  - `.env`, `CLAUDE.md.md.bak`는 .gitignore로 제외 → 업로드 전후 모두 확인
- GitHub 업로드 조건 맞추기 (사용자 조건: private / .gitignore / README 정리 / 첫 커밋 "Initial setup")
  - README.md 정리 (원본 백업: `README.md.bak`): 저장소 주소, ☁️GitHub/💻로컬 표시, csv 항목, 공개 전 주의 문구 추가
  - 첫 커밋을 amend로 "Initial setup"(1fda6d6)으로 변경 → 사용자 승인 후 force push (기존 80858dc 대체)
  - 문제: push 중 Git Credential Manager 로그인 창이 떠서 멈춤 → 원인: git과 gh 로그인이 따로 관리됨
  - 해결: 멈춘 push 중단 → `gh auth setup-git` (전역 ~/.gitconfig에 gh 로그인 사용 설정) → push 성공
  - 검증: GitHub 커밋 1개 "Initial setup", PRIVATE, 파일 7개, .env/.bak 없음
- GitHub 자동 업로드 설정 (사용자 선택: Claude 답변이 끝날 때마다)
  - `.claude/hooks/auto-push.sh` 작성: 변경 없으면 종료 / 위험 파일 이름(.env, 키, .bak, id_rsa, credential, secret) 또는 키 형태 문자열(sk-, ghp_, AKIA, PRIVATE KEY, api_key= 등) 발견 시 업로드 중단 + 경고
  - `.claude/settings.json`에 Stop 훅 등록 (timeout 90초)
  - 임시 연습 저장소에서 시험 6건 통과: 변경 없음 / 정상 업로드(.env 제외) / id_rsa 파일 차단 / api_key 차단 / sk- 키 차단 / 마스킹 예시(sk-or-v1-***)는 통과
- 동오식품 마이크로사이트 제작 (`dongoh-microsite/`, 영문, 반응형) — 기준: `TEST/동오식품 회사 브로슈어_영문.pdf`
  - PDF 글자가 외곽선 처리돼 텍스트 추출 불가 → 지면 이미지(10장)를 직접 풀어서 내용 확인 후 정리
  - 브로슈어 지면에서 사진 14장 + 제품 이미지 43개 잘라 웹용 JPEG로 변환 (총 약 3MB)
  - 구성: 대문(바다 빛줄기·흔들리는 해조류·기포 애니메이션) → 핵심 수치 → 회사 소개 → 핵심가치 → 연혁·CEO 인사말 → 기술·생산공정·인증·수상 → 제품 6개 카테고리 탭 → 연락처
  - 검증: Chrome으로 PC(1440px)·휴대폰(390px) 전체 화면 촬영, JS 오류 0 / 깨진 이미지 0 / 가로 넘침 없음, 제품 탭 6개 개수 일치(8·8·6·4·9·8), 휴대폰 메뉴 열림 확인
  - 브로슈어 오탈자 정리: "Wellcome"→"Welcome", "Dongo"→"Dongoh"
  - `.gitignore`에 `TEST/` 추가 (원본 87MB PDF는 GitHub 제외, 백업: `.gitignore.bak`) — 사이트만 업로드 (사용자 선택)
