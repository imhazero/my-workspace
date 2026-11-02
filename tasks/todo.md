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
- [x] 1. README.md 백업(`README.md.bak`) 후 정리 — csv 추가, ☁️/💻 표시, 저장소 주소
- [x] 2. 변경 파일 모두 첫 커밋에 합치고 메시지를 "Initial setup"으로 변경 (amend)
- [x] 3. `.env`·`.bak` 미포함 재확인 후 force push
- [x] 4. GitHub에서 커밋 1개·메시지·파일 목록 확인
- [x] 5. progress.md에 기록

## GitHub 자동 업로드 설정 (사용자 선택: Claude 답변이 끝날 때)
- 방식: Claude Code Stop 훅 → `.claude/hooks/auto-push.sh` 실행
- 안전장치: 바뀐 파일 없으면 아무것도 안 함 / .env·키·.bak·credential·secret 파일 또는 키처럼 보이는 문자열이 있으면 **올리지 않고 경고**
- [x] 1. 자동 업로드 스크립트 `.claude/hooks/auto-push.sh` 만들기
- [x] 2. 스크립트 단독 시험 (변경 없음 / 위험 파일 차단 / 정상 업로드)
- [x] 3. `.claude/settings.json`에 Stop 훅 등록 + 문법 검사
- [x] 4. progress.md 기록

## 동오식품 마이크로사이트 (완료)
- 기준 자료: `TEST/동오식품 회사 브로슈어_영문.pdf` (글자는 외곽선 처리 → 지면 이미지를 보고 내용 정리)
- 위치: `dongoh-microsite/` (index.html + style.css + script.js + images/) — 설치 없이 더블클릭으로 열림
- 디자인: 브로슈어 딥그린(#1F4D2E 계열) + 바다 블루 / 넉넉한 여백, 큰 타이포, 스크롤 등장 애니메이션 / 모바일·태블릿·PC 반응형
- [x] 1. 브로슈어 지면에서 주요 사진 잘라내기 (해초 샐러드, 미역·다시마, 채취 선박, 냉풍 건조, 공장 항공 등)
- [x] 2. 대문(Hero): 바다 물결 + 해조류 움직임 애니메이션, "Bring Sea To Customers"
- [x] 3. 섹션: 회사 소개 → 핵심가치 → 연혁 → CEO 인사말 → 기술·생산공정 → 인증·수상 → 제품(5개 카테고리) → 연락처
- [x] 4. 상단 메뉴(모바일은 햄버거 메뉴), 섹션 이동
- [x] 5. 브라우저로 열어 PC·모바일 크기 확인 (스크린샷)
- [x] 6. progress.md 기록

## 동오식품 마이크로사이트 — 버셀 배포 준비 (완료)
- 배포는 사용자가 직접 (GitHub 저장소 `imhazero/my-workspace` 가져오기 → Root Directory = `dongoh-microsite`)
- 점검 결과: 순수 HTML/CSS/JS (빌드 불필요), 파일 경로 모두 소문자·상대경로 ✅, 용량 3.8MB, GitHub에 이미 올라가 있음
- [x] 1. `dongoh-microsite/vercel.json` 새로 만들기 — 이미지·CSS 캐시 설정, 기본 보안 헤더
- [x] 2. `dongoh-microsite/.vercelignore` — `.bak` 파일 등 배포 제외 (CLI로 올릴 때 대비)
- [x] 3. `dongoh-microsite/404.html` — 없는 주소로 들어왔을 때 보여줄 안내 페이지
- [x] 4. `index.html`에 파비콘 + 카톡/SNS 공유 미리보기(OG) 태그 추가 (백업: `index.html.bak`)
- [x] 5. 로컬 서버로 실제 배포 환경처럼 띄워 확인 (깨진 링크·이미지, 404 페이지, 헤더)
- [x] 6. `dongoh-microsite/DEPLOY.md` — 버셀 화면에서 클릭할 순서 안내서
- [x] 7. progress.md 기록 (GitHub 업로드는 자동 훅이 처리)

## 다음에 할 것 (사용자)
- [ ] 버셀에서 직접 배포 — 순서: `dongoh-microsite/DEPLOY.md` (Root Directory = `dongoh-microsite` 꼭!)
- [ ] 배포 주소 알려주기 → og:url, og:image를 전체 주소로 교체

## 동오식품 마이크로사이트 — 로고 교체 (완료)
- [x] 1. 원본 로고(영문 가로형 기본/W) 여백 잘라 웹용 생성: `logo-dongoh-color.png`, `logo-dongoh-white.png` (760×160)
- [x] 2. 상단 메뉴: 대문 위 흰색 → 스크롤 시 컬러로 전환, 휴대폰 메뉴 열면 흰색 (백업: `*.before-logo.bak`)
- [x] 3. 푸터: 컬러 로고
- [x] 4. PC·휴대폰 4가지 상태 스크린샷 확인
- [x] 5. 커밋 + GitHub 업로드
