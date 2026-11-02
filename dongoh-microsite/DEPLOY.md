# 동오식품 마이크로사이트 — 버셀(Vercel) 배포 안내

> 이 폴더(`dongoh-microsite/`)는 **빌드(변환 작업)가 필요 없는 정적 사이트**입니다.
> HTML·CSS·JS·이미지 파일을 그대로 올리면 됩니다.

---

## 📦 배포 준비물 (이미 세팅 완료)

| 파일 | 하는 일 |
|------|---------|
| `vercel.json` | 버셀 설정 — 이미지 1일 캐시, CSS/JS는 매번 새 버전 확인, 기본 보안 헤더, `/index` 같은 깔끔한 주소 |
| `.vercelignore` | 배포에서 뺄 파일 목록 (`.bak` 백업, `.md` 문서, 키 파일 등) |
| `404.html` | 없는 주소로 들어왔을 때 보여줄 안내 페이지 |
| `images/favicon.png` | 브라우저 탭 아이콘 |
| `images/apple-touch-icon.png` | 아이폰 홈 화면에 추가했을 때 아이콘 |
| `images/og-image.jpg` | 카톡·SNS로 링크 보낼 때 뜨는 미리보기 사진 (1200×630) |

---

## 🚀 방법 A — GitHub 연결 (추천)

코드가 이미 GitHub 비공개 저장소 `imhazero/my-workspace` 에 있습니다.

1. https://vercel.com 접속 → **GitHub 계정으로 로그인**
2. 오른쪽 위 **Add New… → Project**
3. **Import Git Repository** 목록에서 `my-workspace` 옆 **Import**
   - 목록에 안 보이면 → **Adjust GitHub App Permissions** 눌러 이 저장소 접근 허용
4. 설정 화면에서 아래처럼 입력 ⚠️ **가장 중요**

   | 항목 | 값 |
   |------|-----|
   | Project Name | `dongoh-food` (원하는 이름 → 주소가 `dongoh-food.vercel.app` 이 됨) |
   | Framework Preset | **Other** |
   | **Root Directory** | **Edit** 눌러 **`dongoh-microsite`** 선택 ← 꼭! |
   | Build Command | 비워둠 |
   | Output Directory | 비워둠 |
   | Install Command | 비워둠 |
   | Environment Variables | 없음 (이 사이트는 키가 필요 없음) |

5. **Deploy** 클릭 → 30초~1분 뒤 완료 화면에 주소가 나옴

> Root Directory를 안 바꾸면 workspace 폴더 전체(CLAUDE.md, tasks 등)가 사이트로 올라가고 메인 화면이 안 나옵니다.

### ⚠️ 연결 후 알아둘 점 — 자동 반영
- 이 workspace는 Claude 답변이 끝날 때마다 GitHub에 **자동 업로드**되도록 설정돼 있습니다.
- 버셀을 연결하면 GitHub에 올라갈 때마다 **실제 사이트도 자동으로 다시 배포**됩니다.
- 사이트와 상관없는 파일(tasks 등)이 바뀌어도 재배포가 일어날 수 있습니다 → 원치 않으면
  버셀 **Settings → Git → Ignored Build Step** 에 아래 명령 입력 (사이트 폴더가 바뀔 때만 배포):
  ```
  git diff HEAD^ HEAD --quiet -- .
  ```

---

## 🖥️ 방법 B — 버셀 CLI로 직접 올리기 (GitHub 없이)

```powershell
npm i -g vercel                     # 버셀 명령어 설치 (처음 한 번)
cd "C:\Users\82103\Desktop\claude - workspace\dongoh-microsite"
vercel login                        # 브라우저로 로그인
vercel                              # 미리보기 배포 (질문에는 기본값 Enter)
vercel --prod                       # 실제(정식) 주소로 배포
```
- 반드시 `dongoh-microsite` 폴더 **안에서** 실행하세요.
- `.vercelignore` 덕분에 `.bak` 파일 등은 올라가지 않습니다.

---

## ✅ 배포 후 할 일

1. **주소 확인** — 버셀이 준 주소(예: `https://dongoh-food.vercel.app`)를 PC·휴대폰에서 열어보기
2. **404 확인** — 주소 뒤에 `/abc` 붙여서 안내 페이지 뜨는지
3. ~~카톡 미리보기 주소 교체~~ ✅ 완료 (https://dongoh-food.vercel.app, 2026-11-03) — `index.html` 위쪽 두 줄을 전체 주소로 바꾸기
   ```html
   <meta property="og:url" content="https://실제주소/">
   <meta property="og:image" content="https://실제주소/images/og-image.jpg">
   ```
   (Claude에게 "배포 주소는 OOO야, og 태그 바꿔줘" 라고 하면 됩니다)
4. **카톡 미리보기 새로고침** — 카카오 공유 디버거 https://developers.kakao.com/tool/debugger/sharing 에서 주소 넣고 "캐시 초기화"
5. (선택) **회사 도메인 연결** — 버셀 프로젝트 → Settings → Domains → 도메인 입력 → 안내되는 DNS 값을 도메인 업체에 등록

---

## 🔒 보안 체크
- 이 사이트에는 API 키·비밀번호가 **없습니다** → 버셀 환경변수 설정 불필요
- 공개 웹사이트가 되므로, 올리기 전 회사 측 공개 승인(연락처·CEO 사진·인증서 이미지 등) 확인 권장
- 대문 사진 2장은 Unsplash 무료 라이선스(상업 이용 가능), 푸터에 출처 표기됨

---

## 🔄 CSS·JS를 고친 뒤 꼭 할 일 — 버전 번호 올리기
`index.html` 안의 `style.css?v=20261103`, `script.js?v=20261103` 의 숫자를 **수정한 날짜로 바꿔주세요.**
- 이유: 방문자 브라우저가 예전 디자인 파일을 저장해 두고 쓰면, 새 화면과 섞여 레이아웃이 깨질 수 있습니다 (2026-11-02 로고 교체 때 실제로 발생).
- 같은 날 여러 번 고치면 `20261103b`, `20261103c` 처럼 뒤에 글자를 붙이면 됩니다.
