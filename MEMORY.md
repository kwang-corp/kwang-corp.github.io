# MEMORY.md

## Goal
- GitHub Pages용 개인 프로페셔널 웹사이트를 완성한다.
- 데스크톱, 태블릿, 모바일에서 모두 안정적으로 동작하는 반응형 레이아웃을 유지한다.
- 상단 내비게이션과 Games 탭을 제공한다.
- 키보드와 모바일 터치로 조작 가능한 지렁이 게임을 포함한다.
- GitHub Pages 최초 배포와 이후의 안정적인 유지 관리를 지원한다.
- Step 1에 있는 추가 게임 기능 요구사항도 반영한다.

## Required Deliverables
- 프로젝트 루트의 `index.html`
- `styles.css`
- `script.js`
- 필요한 경우 `game.js`
- 정적 이미지와 자산 파일
- `AORR.md`
- `MEMORY.md`

## Current Scope
- 정적 HTML, CSS, JavaScript로만 동작하는 사이트
- 프로페셔널 개인 웹사이트 콘텐츠
- 반응형 레이아웃
- Games 탭
- 지렁이 게임
- GitHub Pages 배포

## Out of Scope
- 백엔드 서버
- 데이터베이스
- 로그인 및 회원가입
- 결제
- 사용자 개인정보 수집
- 별도 승인 없는 외부 API
- 별도 승인 없는 프레임워크 전환

## Current State
- 현재 상태: `DEPLOYED`
- 완료한 루프: 기본 사이트 구조 구현, 반응형 기본 화면 구현, Games 탭 구현, 지렁이 게임 구현, GitHub Pages 최초 배포 완료
- 다음 루프: 콘텐츠 세부 조정 또는 추가 기능 보강
- 현재 Retry 횟수: `1`
- 현재 오류 fingerprint: `git push auth failed -> Invalid username or token`
- Blocker: 없음
- 마지막 정상 상태: `DEPLOYED`

## Guardrails
- 기존 개인 콘텐츠를 임의로 삭제하지 않는다.
- 확인되지 않은 경력, 프로젝트, 연구 정보를 만들지 않는다.
- 테스트 삭제 또는 완화는 하지 않는다.
- 토큰 값을 출력하지 않는다.
- 토큰을 HTML, CSS, JavaScript에 저장하지 않는다.
- 토큰을 Git에 커밋하지 않는다.
- `github_token.txt`를 커밋하지 않는다.
- `env_settings.txt`를 커밋하지 않는다.
- 백엔드 기능을 추가하지 않는다.
- 대규모 리팩터링을 하지 않는다.
- 테스트를 통과시키기 위해 기능을 제거하지 않는다.

## Acceptance Criteria
- 루트 `index.html`이 존재한다.
- 로컬 정적 서버에서 정상 로드된다.
- CSS와 JavaScript가 정상 로드된다.
- 브라우저 콘솔에 치명적인 오류가 없다.
- 모바일, 태블릿, 데스크톱에서 레이아웃이 정상이다.
- Games 탭이 정상 이동한다.
- 지렁이 게임이 정상 실행된다.
- 키보드 조작과 모바일 터치 조작이 정상이다.
- 점수, 재시작, 게임 오버가 정상 동작한다.
- GitHub Pages에서 HTTP 200 응답을 확인한다.
- 배포된 사이트에서도 동일 기능이 정상이다.

## Retry Policy
- 하나의 오류당 최대 3회 Retry한다.
- 동일한 오류 fingerprint가 2회 반복되면 중지한다.
- 한 번의 Retry에서는 하나의 원인만 수정한다.
- Retry마다 동일한 Verifier를 다시 실행한다.

## HITL Conditions
- 개인 프로필 내용이 불명확할 때
- 기존 콘텐츠 삭제가 필요할 때
- 요구사항이 충돌할 때
- GitHub 저장소 권한이 부족할 때
- GitHub Pages 설정 변경이 필요할 때
- 외부 서비스 추가가 필요할 때
- Retry 한계에 도달했을 때

## Tool Policy
- Codex는 작업 제어, 파일 수정, 테스트 실행을 담당한다.
- 가능하면 Claude Code CLI를 독립 Verifier로 사용한다.
- 실제 사용한 Claude 모델명을 기록한다.
- 토큰 값은 어떤 실행 기록에도 남기지 않는다.
- 이번 세션에서는 Claude Code CLI에서 Sonnet 5 사용 가능 여부를 실제로 검증하지 못했다.

## Execution Log Template
- Loop ID
- 시작 시각
- 목표
- 시작 상태
- 가설
- Act
- 변경 파일
- Verifier
- 테스트 결과
- exit code
- 오류 fingerprint
- Retry 횟수
- 종료 상태
- 다음 작업
- 사람 확인 필요 항목

## Latest Deployment Status
- 현재 상태: `DEPLOYED`
- 대상 저장소: `kwang-corp/kwang-corp.github.io`
- 예상/배포 주소: `https://kwang-corp.github.io/`
- 배포 커밋: `598ffbb00b0f7e6f1f0f7e60ddadea01e4b1d959`
- 확인 결과: GitHub Pages API에서 빌드 완료 상태를 확인했고 공개 URL도 정상 로드되었다.

## Deployment Success
- 상태: `DEPLOYED`
- 공개 주소: `https://kwang-corp.github.io/`
- 확인 방법: GitHub Pages API의 빌드 완료 상태와 공개 URL 로드 확인
- 배포 커밋: `598ffbb00b0f7e6f1f0f7e60ddadea01e4b1d959`
- 비고: 공개 URL에서 홈 화면과 `Games` 섹션이 정상 표시된다.
## Change Request Memory
- 마지막 정상 배포 commit: `598ffbb00b0f7e6f1f0f7e60ddadea01e4b1d959`
- 마지막 정상 배포 URL: `https://kwang-corp.github.io/`
- 새로운 전체 Change Request ID: `CR-20260714-001`
- 현재 상태: `CHANGE_PLANNED`
- 다음 Step 9에서 실행할 첫 번째 Loop ID: `Loop-001`
- Rollback 기준: 동일 fingerprint가 2회 반복되거나, HITL가 필요한 요청이 확정되거나, 배포/권한 문제가 드러날 때
- 사용자 요청 요약: 작은 화면 조작 패널 개선, 즉시 입력 반응, 다국어, 라이트/다크 테마, 좌측 indexing, 레벨 속도, 다중 타겟
- 사람 확인 필요 항목: `CR-003`, `CR-004`, `CR-005`, `CR-007`의 세부 규칙
- 참고 자료: 저장소 파일, 현재 배포본, AORR.md, MEMORY.md

## Change Execution Baseline
- 기록 시각: `2026-07-14`
- 변경 전 commit hash: `598ffbb00b0f7e6f1f0f7e60ddadea01e4b1d959`
- 마지막 정상 배포 commit: `598ffbb00b0f7e6f1f0f7e60ddadea01e4b1d959`
- 마지막 정상 배포 URL: `https://kwang-corp.github.io/`
- 현재 Git 상태: `git status --short` 기준 수정 파일 존재
- 기존 테스트 결과: GitHub Pages 배포 및 공개 URL 정상 로드 확인 기록 존재
- 수정 전 웹사이트 상태: 정적 프로페셔널 포트폴리오와 Snake 게임이 배포되어 있음
- 수정 전 게임 상태: 기본 게임은 동작하지만 작은 화면 조작 접근성, 즉시 입력 반응, 다국어, 테마, 좌측 인덱스, 레벨, 다중 타겟은 추가 작업 필요
- Rollback 기준: 변경 후 동일 fingerprint 2회 반복, HITL 필요, 권한/배포 문제 발생 시

## Loop Progress
- `Loop-002` / `CR-001`: `PASSED`
  - 가설: 모바일에서 조작 패널을 보드보다 먼저 배치하면 사용성이 개선된다.
  - 변경 파일: `index.html`, `styles.css`
  - Verifier: Chrome headless at 375px, console check
  - 결과: 조작 패널과 보드 사이 간격이 좁아졌고 콘솔 오류 없음
  - exit code: `0`
  - 오류 fingerprint: `없음`
  - Retry 횟수: `0`
  - 다음 Loop: `Loop-003`
  - 현재 정상 commit 후보: `598ffbb00b0f7e6f1f0f7e60ddadea01e4b1d959`
  - Rollback 기준: 동일 fingerprint 2회 반복 또는 레이아웃 회귀 발생 시
- `Loop-003` / `CR-002`: `PASSED`
  - 가설: `pointerdown`을 추가하면 버튼 방향 입력이 즉시 반응한다.
  - 변경 파일: `game.js`
  - Verifier: Chrome headless에서 pointerdown dispatch
  - 결과: direction state가 즉시 변함
  - exit code: `0`
  - 오류 fingerprint: `없음`
  - Retry 횟수: `0`
  - 다음 Loop: `Loop-004`
- `Loop-004` / `CR-006`: `PASSED`
  - 가설: score/10 기반 level 계산과 stepDelay 조정으로 단계 속도를 구현할 수 있다.
  - 변경 파일: `index.html`, `styles.css`, `game.js`
  - Verifier: Chrome headless에서 level/stepDelay 직접 확인
  - 결과: score 9 -> level 1, score 10 -> level 2
  - exit code: `0`
  - 오류 fingerprint: `없음`
  - Retry 횟수: `0`
  - 다음 Loop: `Loop-005`
## Loop Progress Update
- `Loop-010` / `CR-003`, `CR-004`: `PASSED`
  - Hypothesis: the broken `script.js` could be replaced with a single clean language/theme controller without changing the rest of the site
  - Act: rewrote `script.js`, added a favicon to stop the browser 404 noise, and re-verified with Playwright + system Chrome
  - Changed files: `script.js`, `index.html`, `CHANGE_REQUEST.md`, `AORR.md`
  - Verifier: Playwright with `C:/Program Files/Google/Chrome/Application/chrome.exe`
  - Result: Korean default load, English toggle, theme toggle, mobile control spacing, and immediate direction input all worked
  - exit code: `0`
  - error fingerprint: `none`
  - Retry count: `0`
  - Next Loop: `CR-005` or `CR-007` only if the user clarifies the ambiguous rules
- `CR-005`: `HITL_REQUIRED`
- `CR-007`: `BLOCKED`
