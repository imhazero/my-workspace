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
- 동오식품 마이크로사이트 대문을 실사로 교체 (사용자 요청: 브로슈어 외 사진, 인터넷에서 임의 선정)
  - Unsplash 무료 라이선스 사진 2장: PC용 Erick Morales Oyola(vHDLjO-iW8k), 휴대폰용 Lennart Rudolph(FhJv7md0NNw) — 상업 이용 가능, 푸터에 출처 표기
  - 그림(SVG) 해조류·빛줄기 제거 → 사진 배경 + 천천히 확대 효과 + 어두운 바다색 막, 기포는 유지 (원본 백업: `script.js.bak`)
  - 검증: PC·휴대폰 대문 스크린샷 확인, JS 오류 0 / 깨진 이미지 0
- 동오식품 마이크로사이트 버셀 배포 준비 (배포는 사용자가 직접)
  - 새 파일: `vercel.json`(보안 헤더 4종, 이미지 7일·CSS/JS 1시간 캐시, cleanUrls), `.vercelignore`(.bak/.md/키 파일 제외), `404.html`, `DEPLOY.md`(버셀 클릭 순서 안내)
  - 이미지 3개 생성: favicon.png(64), apple-touch-icon.png(180) — 로고 꽃잎 심볼만 추출 / og-image.jpg(1200×630) — 대문 사진에서 잘라냄
  - `index.html` head에 파비콘·theme-color·공유 미리보기(OG) 태그 추가 (원본 백업: `index.html.bak`)
    - og:url·og:image는 임시로 상대경로 → 배포 주소 확정 후 전체 주소로 교체 필요
  - 검증: 버셀 흉내 로컬 서버(임시 폴더)로 참조 파일 64개 모두 200, 헤더·캐시 적용, 없는 주소 → 404 페이지, .bak 차단 / Chrome으로 PC(1440)·휴대폰(390) 홈·404 화면 확인
  - 문제 3건: ① 시험 서버가 경로 표기(/ vs \) 비교 오류로 전부 404 → 서버 수정(사이트 문제 아님) ② 휴대폰 스크린샷 글자 잘림 → 원인은 윈도우 헤드리스 크롬의 최소 창 폭, 390px iframe으로 재촬영해 정상 확인 (404.html 폭 맞춤은 예방 차원으로 유지) ③ iframe이 빈 화면 → X-Frame-Options 보안 헤더가 정상 작동한 것, 같은 주소에서 띄워 해결
- 동오식품 마이크로사이트 로고 교체 (사용자 제공: `images/동오식품_CI_로고원본_영문_*.png` 4종, 원본은 그대로 둠)
  - 가로형 기본/W의 투명 여백(2917² 중 실제 2687×566)을 잘라 760×160 웹용 생성 → `logo-dongoh-color.png`(30KB), `logo-dongoh-white.png`(20KB) — 한글 파일명은 웹 주소 깨짐 우려로 영문 이름 사용
  - 상단 왼쪽: 기존 "DFC 동그라미 + Dongoh Food 글자" → 로고 이미지. 대문 사진 위 흰색, 스크롤해 메뉴가 밝아지면 컬러로 자연스럽게 전환, 휴대폰 메뉴 펼침(어두운 배경)은 흰색
  - 푸터 왼쪽: 기존 브로슈어 로고(logo-dfc.png) → 컬러 로고 (휴대폰에서는 기존 레이아웃대로 가운데 정렬)
  - 백업: `index.html.before-logo.bak`, `style.css.before-logo.bak`
  - 검증: 로컬 서버로 로고 2개 200, Chrome으로 PC 첫 화면/스크롤+푸터, 휴대폰 스크롤/푸터/메뉴 열림 확인
  - 촬영 중 문제: 사이트의 부드러운 스크롤·전환 효과 때문에 중간 상태가 찍힘 → 촬영 시에만 효과 끄고 재촬영 (사이트 문제 아님)
- 동오식품 사이트 로고 깨짐 수정 (사용자 캡처: `TEST/문제점 캡처.JPG` — 상단 흰색·컬러 로고가 둘 다 크게 나란히 표시)
  - 근본 원인: 배포 준비 때 `vercel.json`에서 CSS/JS를 브라우저에 1시간 저장하도록 설정 → 이전에 방문한 브라우저가 새 HTML + 예전 style.css 조합으로 표시 (서버의 CSS는 최신이었음). 새 브라우저로만 검증해서 놓친 것
  - 수정: ① `index.html`의 `style.css`, `script.js` 주소에 `?v=20261103` 버전 표시 → 기존 방문자도 즉시 새 파일 받음 ② `vercel.json` CSS/JS 캐시 `max-age=0, must-revalidate`, 이미지 7일 → 1일 ③ `DEPLOY.md`에 "CSS/JS 수정 시 버전 번호 올리기" 안내 추가
  - 백업: `index.html.before-cache.bak`, `vercel.json.before-cache.bak`
  - 검증: 로컬 서버 헤더 확인, JS 오류 0 / 깨진 이미지 0
