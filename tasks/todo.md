# 오늘 할 일 — 2026-11-02

## 작업 환경 구축

- [x] 1. `tasks/` 폴더 + `todo.md`, `progress.md` 생성
- [x] 2. `SECURITY.md` 비상 매뉴얼 작성
- [x] 3. 폴더 구조를 `README.md`로 정리
- [x] 4. `CLAUDE.md.md` → `CLAUDE.md` 이름 변경 (백업: `CLAUDE.md.md.bak`)
- [x] 5. CLAUDE.md 안의 폴더 경로를 실제 폴더(바탕화면 `claude - workspace`)에 맞게 수정
- [x] 6. `.gitignore` 만들기 (`.env`, `*.key` 등 git 업로드 차단, 테스트 완료)
- [x] 7. `.env` 빈 틀 만들기

## 다음에 할 것 (보류)
- [ ] `.env`에 실제 값 채우기 (사용자가 직접)
- [ ] 오라클 SSH 키 / `oracle-server` 별칭 설정 (서버 IP·사용자명·키 파일 필요)

## 다운로드 폴더 정리 (승인 완료)
- 기준: 이미지(png, jpg, jpeg, psd, ai, eps) → images / 문서(pdf, pptx, hwp, hwpx, xlsx, docx, doc, csv, txt, rtf, html) → docs / 나머지 → misc
- 제외: 하위 폴더 51개, desktop.ini, ~WRL0003.tmp
- 규칙: 덮어쓰기·삭제 금지, 이름이 겹치면 건너뜀, 이동 기록 파일 남김
- [x] 1. 계획을 todo.md에 기록
- [x] 2. images / docs / misc 폴더 만들기
- [x] 3. 몇 개만 시험 이동
- [x] 4. 나머지 전체 이동 + 기록 파일 저장 (`tasks/downloads_move_log.csv`)
- [x] 5. 폴더별 개수 확인 → 953 / 1,591 / 331 (docs는 Office 임시파일 `~$` 27개 제외분)
- [x] 6. progress.md에 기록

## GitHub에 workspace 폴더 올리기 (완료)
- 계정: imhazero (gh 로그인 완료)
- 자동 제외: `.env`, `*.bak` (.gitignore)
- 확인 필요: 공개/비공개, `tasks/downloads_move_log.csv` 포함 여부, 저장소 이름
- [x] 1. `git init` (이 폴더를 git 관리 폴더로 만들기)
- [x] 2. `git add` 후 **올라갈 파일 목록 확인** — `.env`가 없는지 검사
- [x] 3. 첫 커밋(저장 기록) 만들기
- [x] 4. `gh repo create`로 GitHub 저장소 만들고 올리기
- [x] 5. GitHub에서 파일 목록 확인 (`.env` 없는지 재확인)
- [x] 6. progress.md에 기록

## GitHub 업로드 조건 맞추기 (승인 완료 — force push 포함)
- 조건: private ✅ / .gitignore로 민감 파일 제외 ✅ / README 정리 / 첫 커밋 메시지 "Initial setup"
- [ ] 1. README.md 백업(`README.md.bak`) 후 정리 — csv 추가, ☁️/💻 표시, 저장소 주소
- [ ] 2. 변경 파일 모두 첫 커밋에 합치고 메시지를 "Initial setup"으로 변경 (amend)
- [ ] 3. `.env`·`.bak` 미포함 재확인 후 force push
- [ ] 4. GitHub에서 커밋 1개·메시지·파일 목록 확인
- [ ] 5. progress.md에 기록
