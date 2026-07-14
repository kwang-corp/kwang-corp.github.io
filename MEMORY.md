# MEMORY

## Goal

- GitHub Pages용 프로페셔널 웹사이트를 완성한다.
- 반응형 데스크톱 및 모바일 지원을 유지한다.
- 상단 `Games` 탭을 구현한다.
- 키보드와 모바일 터치로 조작 가능한 지렁이 게임을 구현한다.
- GitHub Pages에 최초 배포한다.
- `Step 1`의 `[게임 추가 기능:]`을 가능한 범위에서 반영한다.

## Required Deliverables

- 프로젝트 루트의 `index.html`
- `styles.css`
- `script.js`
- 필요한 경우 별도 `game.js`
- 필요한 이미지 및 정적 assets
- `AORR.md`
- `MEMORY.md`

## Current Scope

- 정적 HTML
- CSS
- JavaScript
- 프로페셔널 웹사이트 콘텐츠
- 반응형 레이아웃
- `Games` 탭
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

- 현재 상태: `DEPLOY_APPROVAL_REQUIRED`
- 완료한 루프: `AORR.md` 설계, `Self-Correcting TDD Loop` 설계, 기본 구조 루프, 프로페셔널 사이트 및 지렁이 게임 구현 루프
- 다음 루프: 배포 승인 후 GitHub Pages 최초 배포
- 현재 Retry 횟수: `0`
- 현재 오류 fingerprint: `없음`
- Blocker: `없음`
- 마지막 정상 상태: `PASSED`

## Guardrails

- 기존 개인 콘텐츠 임의 삭제 금지
- 확인되지 않은 경력이나 프로젝트 정보 생성 금지
- 테스트 삭제 또는 완화 금지
- 토큰 출력 금지
- 토큰을 HTML, CSS, JavaScript에 저장 금지
- 토큰을 Git에 커밋 금지
- `github_token.txt` 커밋 금지
- `env_settings.txt` 커밋 금지
- 백엔드 기능 추가 금지
- 대규모 리팩토링 금지
- 테스트를 통과시키기 위한 기능 제거 금지

## Acceptance Criteria

- 루트 `index.html` 존재
- 로컬 정적 서버에서 정상 로드
- CSS와 JavaScript 정상 로드
- 콘솔 오류 없음
- 모바일 및 데스크톱에서 레이아웃 정상
- `Games` 탭 정상 이동
- 지렁이 게임 정상 실행
- 키보드 조작 정상
- 모바일 터치 조작 정상
- 점수 및 재시작 정상
- GitHub Pages에서 HTTP 200 응답
- 배포된 사이트에서도 동일 기능 정상

## Retry Policy

- 하나의 오류당 최대 3회
- 동일 오류 fingerprint 2회 반복 시 중지
- 한 번의 Retry에서 하나의 원인만 수정
- Retry마다 동일 Verifier 재실행

## HITL Conditions

- 개인 프로필 내용 불명확
- 기존 콘텐츠 삭제 필요
- 요구사항 충돌
- GitHub 저장소 권한 부족
- GitHub Pages 설정 변경 필요
- 외부 서비스 추가 필요
- Retry 한계 도달

## Tool Policy

- Codex는 작업 제어, 파일 수정, 테스트 실행을 담당한다.
- 가능하면 Claude Code CLI를 독립 Verifier로 사용한다.
- 실제 사용한 Claude 모델명을 기록한다.
- 토큰 값은 어떠한 실행 기록에도 남기지 않는다.

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

## Working Notes

- `AORR.md`는 상태 머신과 루프 설계의 기준 문서다.
- `MEMORY.md`는 현재 진행 상태, 가드레일, 실행 기록을 유지하는 운영 메모다.
- `claude` CLI는 설치되어 있으며 로컬에서 확인된 Claude 설정값은 `sonnet`이다.
- 이 세션에서는 Sonnet 5를 실제로 확인하지 못했으므로 해당 항목은 `[사람 확인 필요]` 상태다.
- 기본 구조 루프는 통과했으며, 이후 루프는 기존 HTML/CSS/JS 뼈대를 보존하는 방향으로 진행했다.
- 프로페셔널 웹사이트와 지렁이 게임은 로컬 구현과 검증을 완료했다.

## Recent Loop Log

- Loop ID: `professional-site-snake-001`
- 시작 시각: `2026-07-14`
- 목표: GitHub Pages 배포 전까지 프로페셔널 웹사이트와 지렁이 게임을 완성하고 로컬 검증까지 끝낸다
- 시작 상태: `ACTING`
- 가설: 기존 섹션을 보존한 채 `index.html`, `styles.css`, `script.js`, `game.js`만 정리하면 반응형 포트폴리오와 플레이 가능한 지렁이 게임을 동시에 만족시킬 수 있다
- Act: `index.html`, `styles.css`, `script.js`, `game.js`를 수정해 Home/About/Projects/Experience/Research/Contact/Games 구조, 반응형 내비게이션, 지렁이 게임 코어, 점수/최고 점수, 시작/일시정지/재시작, 방향키/WASD, 모바일 버튼, 스와이프 훅을 구현했다
- 변경 파일: `index.html`, `styles.css`, `script.js`, `game.js`
- Verifier: 브라우저 DOM snapshot, 브라우저 console log check, 375px/768px/1440px viewport checks, `curl.exe -I` 로컬 HTTP 검증, 브라우저 상호작용 검증
- 테스트 결과: 로컬 서버 200 응답 확인, 문서 구조 정상, 내부 링크 정상, 콘솔 오류 없음, 모바일/태블릿/데스크톱 반응형 정상, 게임 시작/일시정지/재시작/점수 증가/최고 점수/키보드 조작/모바일 버튼 조작 확인
- exit code: `0`
- 오류 fingerprint: `none`
- Retry 횟수: `0`
- 종료 상태: `DEPLOY_APPROVAL_REQUIRED`
- 다음 작업: 사용자에게 GitHub Pages 최초 배포 승인 요청
- 사람 확인 필요 항목: `[사람 확인 필요]` 최종 프로필 콘텐츠, `[사람 확인 필요]` Sonnet 5 실제 사용 여부, `[사람 확인 필요]` 스와이프 자동 검증, `[사람 확인 필요]` 배포 승인

- Loop ID: `profile-content-001`
- 시작 시각: `2026-07-14`
- 목표: 프로필 섹션 구조 보강을 위해 `Research` 섹션 추가
- 시작 상태: `PASSED`
- 가설: `Research` 섹션을 기본 구조에 추가하면 첨부 요청의 섹션 요구와 더 잘 맞는다
- Act: `index.html`에 `Research` 내비게이션 링크와 섹션을 추가했다
- 변경 파일: `index.html`
- Verifier: `Select-String -Path .\index.html -Pattern 'href="#research"|id="research"|<h2>Research</h2>'`, `Test-Path index.html`, `Test-Path styles.css`, `Test-Path script.js`
- 테스트 결과: `Research` 링크와 섹션이 파일에 존재함을 확인했다
- verifier 성공여부: `yes`
- exit code: `0`
- 오류 fingerprint: `none`
- Retry 횟수: `0`
- 종료 상태: `PASSED`
- 다음 작업: 콘텐츠 채우기 또는 반응형 세부 검증
- 사람 확인 필요 항목: `[사람 확인 필요]` 실제 Research 내용

- Loop ID: `basic-structure-001`
- 시작 시각: `2026-07-14`
- 목표: GitHub Pages용 정적 사이트의 가장 안전한 기본 구조 생성
- 시작 상태: `READY`
- 가설: 최소 HTML/CSS/JS 뼈대와 Games 영역만 먼저 만들면 다음 루프의 검증 범위를 좁힐 수 있다
- Act: `index.html`, `styles.css`, `script.js`를 생성하고 기본 반응형 내비게이션과 Games 영역을 추가했다
- 변경 파일: `index.html`, `styles.css`, `script.js`
- Verifier: `git status --short`, `Get-Content .\index.html`, `HttpListener` 기반 임시 로컬 서버 검증 시도
- 테스트 결과: 파일 구조 생성 완료, 로컬 정적 서버 HTTP 200 확인 성공
- verifier 성공여부: `yes`
- exit code: `0` for file creation, `124` for the timed verification command after success was observed
- 오류 fingerprint: `none`
- Retry 횟수: `0`
- 종료 상태: `PASSED`
- 다음 작업: `반응형 세부 검증` 또는 `Games 영역 확장`
- 사람 확인 필요 항목: `[사람 확인 필요]` 실제 개인 프로필 콘텐츠
