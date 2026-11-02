# 📂 claude - workspace

IMHAZERO의 Claude Code 작업 공간입니다.

- 💻 내 컴퓨터: `C:\Users\82103\Desktop\claude - workspace`
- ☁️ GitHub (🔒 비공개): https://github.com/imhazero/my-workspace

---

## 폴더 구조

> ☁️ = GitHub에 올라감 · 💻 = 내 컴퓨터에만 있음 (`.gitignore`로 업로드 차단)

```
claude - workspace/
│
├── 📄 안내 · 규칙
│   ├── README.md                  ☁️ 지금 보는 파일 (폴더 안내도)
│   ├── CLAUDE.md                  ☁️ Claude Code 지침서 (시작할 때 자동으로 읽힘)
│   └── SECURITY.md                ☁️ 🚨 키 노출 시 비상 매뉴얼
│
├── 🔒 보안
│   ├── .env                       💻 API 키·비밀번호 보관 (절대 공유 금지)
│   └── .gitignore                 ☁️ git에 올리면 안 되는 파일 목록
│
├── 🗂️ 백업 (*.bak)
│   ├── CLAUDE.md.md.bak           💻 CLAUDE.md 이름 바꾸기 전 원본
│   └── README.md.bak              💻 README.md 정리 전 원본
│
└── 📁 tasks/  ← 작업 기록
    ├── todo.md                    ☁️ 오늘 할 일 (체크리스트)
    ├── progress.md                ☁️ 한 일 기록 (아래로 계속 추가만)
    └── downloads_move_log.csv     ☁️ 다운로드 폴더 정리 이동 기록 (원위치 복구용)
```

> 실제로는 폴더가 `tasks/` 하나뿐이에요. 위의 📄·🔒·🗂️은 보기 쉽게 묶어 놓은 분류예요.

---

## 각 파일은 언제 보나요?

| 파일 | 언제 | 무엇을 |
|---|---|---|
| `CLAUDE.md` | Claude Code가 시작할 때 **자동으로** | 보안 규칙, 소통 방식, 작업 원칙 |
| `tasks/todo.md` | **작업 시작 전** | 오늘 할 일 확인 및 계획 |
| `tasks/progress.md` | **작업 끝난 후** | 한 일을 날짜별로 기록 |
| `SECURITY.md` | **키가 노출된 것 같을 때** | 폐기 → 재발급 → 교체 → 이력 확인 |
| `.env` | **새 키를 받았거나 바꿀 때** | API 키·비밀번호 보관 (🔒 공유 금지, 채팅에 붙여넣기 금지) |
| `.gitignore` | **git에 올리면 안 되는 파일이 새로 생겼을 때** | git 업로드 차단 목록 (`.env`, `*.key` 등) |
| `tasks/downloads_move_log.csv` | **다운로드 폴더 파일을 원래 자리로 되돌리고 싶을 때** | 언제·어떤 파일을·어디서 어디로 옮겼는지 |

---

## 하루 작업 흐름

1. `tasks/todo.md`를 열어 오늘 할 일을 확인해요
2. Claude Code와 **한 단계씩** 작업해요
3. 끝나면 `tasks/progress.md`에 한 일을 추가해요
4. 바뀐 파일을 GitHub에 올려요 (Claude Code에게 "GitHub에 올려줘"라고 하면 돼요)

---

## 🔒 절대 공유 금지

- `.env` — API 키, 비밀번호 보관 (틀만 있음, 값은 직접 채우기)
- `~/.ssh/oracle-server.key` — 오라클 서버 접속 키 (아직 없음)

키가 노출된 것 같으면 → **[SECURITY.md](SECURITY.md)** 를 바로 열어 보세요.

> ⚠️ 저장소를 **공개(public)로 바꾸기 전에** `tasks/downloads_move_log.csv`를 먼저 빼세요. 개인 파일 이름 목록이 들어 있어요.
