# CHANGE_REQUEST.md

## Change Request ID
- `CR-20260714-001`

## Baseline
- 마지막 정상 배포 commit: `598ffbb00b0f7e6f1f0f7e60ddadea01e4b1d959`
- 마지막 정상 배포 URL: `https://kwang-corp.github.io/`
- 대상 저장소: `kwang-corp/kwang-corp.github.io`

## 사용자 요청 원문
```text
- 화면이 작은 경우에 game의 컨트롤 탭이 화면과 멀리 떨어져 있어서 사용 불가
- 여러 언어 지원(기본 : 한글, 추가 : 영어)
- game에서 난이도(level) 속성 추가해줘.(SCORE 10점 올라갈때마다 속도 1단계씩 올라가도록)
- 라이트/다크 선택 가능하도록 기능 추가해줘
- 화면 좌측에 indexing을 위한 스크롤 추가해줘
- 버튼이 실제로 눌리는 즉시 방향이 바뀌지 않아
- 타겟이 여러개 생성되는 시나리오도 추가되었으면 좋겠어
```

## 추가 자료
- `[사람 확인 필요]` 현재 메시지에 입력된 추가 자료는 자리표시자뿐이며, 별도의 CV/PDF/이미지/문서 파일은 저장소에서 찾지 못했다.

## 기준선과 현재 상태
- 기준선은 마지막 정상 배포본이다.
- 현재 구현은 GitHub Pages에서 정상 동작하는 정적 사이트다.
- 이번 단계는 구현이 아니라 요청 분석과 루프 분해다.

## Change Item 목록

### CR-001
- Change Item ID: `CR-001`
- 사용자 요청 원문: `화면이 작은 경우에 game의 컨트롤 탭이 화면과 멀리 떨어져 있어서 사용 불가`
- 요청 요약: 작은 화면에서 게임 조작 UI를 손이 닿기 쉬운 위치로 재배치하거나 압축한다.
- 요청 분류: `RESPONSIVE`, `GAME_CONTROL`, `UI_UX`, `ACCESSIBILITY`
- 현재 동작: 조작 패널이 게임 보드와 떨어져 보일 수 있다.
- 기대 동작: 375px 전후의 작은 화면에서도 조작 버튼이 보드 근처에 있고 사용 가능해야 한다.
- 재현 방법: 모바일 viewport로 열고 Games 탭을 확인한다.
- 근거 자료: 사용자 수정 요청 원문
- 수정 대상 기능: 게임 패널 레이아웃과 모바일 조작 영역
- 예상 수정 파일: `index.html`, `styles.css`
- 변경 허용 범위: 게임 섹션 레이아웃, 모바일 배치, 버튼 간격, 스크롤 동선
- 변경 금지 범위: 게임 규칙, 점수 규칙, 기존 프로페셔널 콘텐츠 삭제
- 선행 작업: 현재 게임 UI 구조 확인
- 후속 작업: 모바일 반응형 회귀 테스트
- 다른 Change Item과의 의존성: `CR-002`와 같은 영역이지만 독립 수정 가능
- 완료 기준: 작은 화면에서 조작 UI가 보드와 충분히 가까워지고 터치로 바로 사용 가능하다.
- 검증 방법: 375px/768px/1440px viewport 확인, 모바일 실기기 또는 브라우저 터치 검수
- 회귀 테스트: 데스크톱 레이아웃, 기존 Games 탭, 키보드 조작
- 위험도: `MEDIUM`
- 배포 필요 여부: `YES`
- 사람 확인 필요 항목: 정확히 "가까운" 배치 방식은 `[사람 확인 필요]`

### CR-002
- Change Item ID: `CR-002`
- 사용자 요청 원문: `버튼이 실제로 눌리는 즉시 방향이 바뀌지 않아`
- 요청 요약: 모바일/버튼 입력의 반응 지연을 없애고 즉시 방향 전환되게 한다.
- 요청 분류: `BUG`, `GAME_CONTROL`, `UI_UX`
- 현재 동작: 버튼 입력이 클릭 종료 시점에만 반응하거나 체감상 늦을 수 있다.
- 기대 동작: 버튼을 누르는 순간 방향이 바뀐다.
- 재현 방법: 모바일 조작 버튼을 눌러 즉시 반응 여부를 확인한다.
- 근거 자료: 사용자 수정 요청 원문
- 수정 대상 기능: 게임 입력 이벤트 처리
- 예상 수정 파일: `game.js`, `styles.css`
- 변경 허용 범위: `pointerdown`/`touchstart` 등 입력 이벤트, 지연 제거, 터치 반응 최적화
- 변경 금지 범위: 방향 전환 규칙, 역방향 금지 규칙, 게임 난이도
- 선행 작업: `CR-001`과 무관하게 독립 검증 가능
- 후속 작업: 모바일 입력 회귀 테스트
- 다른 Change Item과의 의존성: 낮음
- 완료 기준: 버튼 누름과 방향 변경 사이의 체감 지연이 사라진다.
- 검증 방법: 모바일 또는 터치 가능 브라우저에서 즉시 반응 확인
- 회귀 테스트: 키보드 조작, 게임 루프, 점수 계산
- 위험도: `MEDIUM`
- 배포 필요 여부: `YES`
- 사람 확인 필요 항목: 입력 이벤트 우선순위는 `[사람 확인 필요]`

### CR-003
- Change Item ID: `CR-003`
- 사용자 요청 원문: `여러 언어 지원(기본 : 한글, 추가 : 영어)`
- 요청 요약: 기본 언어를 한글로 두고 영어 전환을 지원한다.
- 요청 분류: `CONTENT`, `UI_UX`, `INFORMATION_ARCHITECTURE`, `NEW_FEATURE`
- 현재 동작: 사이트 텍스트가 단일 언어 중심으로 구성되어 있다.
- 기대 동작: 기본은 한글, 필요 시 영어로 전환할 수 있어야 한다.
- 재현 방법: 현재 페이지의 언어 선택 기능 부재를 확인한다.
- 근거 자료: 사용자 수정 요청 원문
- 수정 대상 기능: 전역 텍스트, 내비게이션, 게임 안내, 상태 메시지
- 예상 수정 파일: `index.html`, `script.js`, `styles.css`, 필요 시 데이터 맵 파일
- 변경 허용 범위: 언어 전환 UI, 번역 문구, 저장된 언어 선호도
- 변경 금지 범위: 검증되지 않은 개인 정보 생성, 외부 번역 API 강제 도입
- 선행 작업: 번역할 원문 범위 확정
- 후속 작업: 모든 섹션의 언어 전환 회귀 테스트
- 다른 Change Item과의 의존성: 공통 UI에 영향을 주므로 `CR-004`, `CR-005`와 간접 연관
- 완료 기준: 기본 언어가 한글이며 영어 전환 후 주요 UI와 게임 안내가 일관되게 바뀐다.
- 검증 방법: 언어 토글 후 Home/About/Projects/Games 텍스트 비교
- 회귀 테스트: 반응형, 네비게이션, 게임 상태 메시지
- 위험도: `HIGH`
- 배포 필요 여부: `YES`
- 사람 확인 필요 항목: 어떤 텍스트를 반드시 번역할지 `[사람 확인 필요]`

### CR-004
- Change Item ID: `CR-004`
- 사용자 요청 원문: `라이트/다크 선택 가능하도록 기능 추가해줘`
- 요청 요약: 사용자가 라이트/다크 테마를 전환할 수 있게 한다.
- 요청 분류: `UI_UX`, `ACCESSIBILITY`, `NEW_FEATURE`
- 현재 동작: 현재 사이트는 고정된 라이트 계열 테마다.
- 기대 동작: 라이트/다크 테마를 선택할 수 있어야 한다.
- 재현 방법: 테마 전환 UI가 없는 상태를 확인한다.
- 근거 자료: 사용자 수정 요청 원문
- 수정 대상 기능: 전역 색상 토큰, 테마 토글, 저장된 선호도
- 예상 수정 파일: `styles.css`, `script.js`, `index.html`
- 변경 허용 범위: CSS 변수, 토글 버튼, 로컬 저장 선호도
- 변경 금지 범위: 콘텐츠 삭제, 게임 규칙 변경
- 선행 작업: 색상 체계와 테마 적용 지점 파악
- 후속 작업: 명도 대비 및 반응형 회귀 테스트
- 다른 Change Item과의 의존성: 전역 스타일을 바꾸므로 전체 회귀가 필요
- 완료 기준: 라이트/다크 전환이 가능하고 새로고침 후 선택이 유지된다.
- 검증 방법: 테마 전환 후 시각 상태와 저장 여부 확인
- 회귀 테스트: 전체 페이지, 게임 보드 가독성, 버튼 대비
- 위험도: `MEDIUM`
- 배포 필요 여부: `YES`
- 사람 확인 필요 항목: 기본 시작 테마 선호는 `[사람 확인 필요]`

### CR-005
- Change Item ID: `CR-005`
- 사용자 요청 원문: `화면 좌측에 indexing을 위한 스크롤 추가해줘`
- 요청 요약: 왼쪽에 현재 위치를 보여주는 인덱싱/스크롤 보조 UI를 추가한다.
- 요청 분류: `INFORMATION_ARCHITECTURE`, `NAVIGATION`, `UI_UX`, `RESPONSIVE`
- 현재 동작: 상단 내비게이션만 있고 좌측 인덱스/스크롤 UI는 없다.
- 기대 동작: 왼쪽에서 현재 섹션 위치를 식별하거나 빠르게 이동할 수 있어야 한다.
- 재현 방법: 현재 화면에 좌측 인덱싱 UI가 없는 상태를 확인한다.
- 근거 자료: 사용자 수정 요청 원문
- 수정 대상 기능: 정보 구조, 내비게이션, 스크롤 보조 UI
- 예상 수정 파일: `index.html`, `styles.css`, `script.js`
- 변경 허용 범위: 고정 사이드 인덱스, 스크롤 스파이, 앵커 링크
- 변경 금지 범위: 기존 앵커 URL 깨뜨리기, 콘텐츠 대규모 재배치
- 선행 작업: "indexing"의 정확한 의미 확정
- 후속 작업: 모바일 노출 여부와 데스크톱 고정 여부 테스트
- 다른 Change Item과의 의존성: `CR-003`과 문구가 겹칠 수 있고 전체 내비게이션과 연관됨
- 완료 기준: 좌측 인덱싱 UI가 실제로 사용 가능하며 현재 섹션을 식별한다.
- 검증 방법: 스크롤 시 현재 위치 표시, 앵커 이동 동작 확인
- 회귀 테스트: 기존 헤더 네비게이션, 모바일 메뉴, 깨진 링크
- 위험도: `MEDIUM`
- 배포 필요 여부: `YES`
- 사람 확인 필요 항목: "indexing"이 정확히 무엇을 뜻하는지 `[사람 확인 필요]`

### CR-006
- Change Item ID: `CR-006`
- 사용자 요청 원문: `game에서 난이도(level) 속성 추가해줘.(SCORE 10점 올라갈때마다 속도 1단계씩 올라가도록)`
- 요청 요약: 점수 10점마다 게임 속도가 한 단계씩 증가하는 레벨 시스템을 추가한다.
- 요청 분류: `GAME_LOGIC`, `SPEC_CHANGE`, `NEW_FEATURE`
- 현재 동작: 기존 속도 변화는 현재 점수 기반의 단순 감소 방식이다.
- 기대 동작: 레벨 속성이 존재하고 SCORE 10점 단위로 1단계씩 상승한다.
- 재현 방법: 게임에서 점수를 올려도 명시적 level 속성이 없는 현재 상태를 확인한다.
- 근거 자료: 사용자 수정 요청 원문
- 수정 대상 기능: 게임 속도 계산, 상태 HUD, 레벨 표시
- 예상 수정 파일: `game.js`, `index.html`, `styles.css`
- 변경 허용 범위: 레벨 계산, 속도 표기, HUD 출력
- 변경 금지 범위: 충돌 규칙, 점수 계산, 입력 방식
- 선행 작업: 현재 스코어링과 속도 곡선 확인
- 후속 작업: 점수 10/20/30 구간 회귀 테스트
- 다른 Change Item과의 의존성: `CR-002`, `CR-007`과 게임 루프를 공유할 수 있음
- 완료 기준: level 값이 점수 10점마다 증가하고 체감 속도가 단계적으로 변한다.
- 검증 방법: 점수 상승에 따른 level/속도 변화 확인
- 회귀 테스트: 게임 오버, 재시작, 하이스코어
- 위험도: `MEDIUM`
- 배포 필요 여부: `YES`
- 사람 확인 필요 항목: 속도 단계 증가 폭의 정확한 체감 기준은 `[사람 확인 필요]`

### CR-007
- Change Item ID: `CR-007`
- 사용자 요청 원문: `타겟이 여러개 생성되는 시나리오도 추가되었으면 좋겠어`
- 요청 요약: 한 번에 여러 타겟이 등장하는 게임 상황을 지원한다.
- 요청 분류: `GAME_ENTITY`, `GAME_LOGIC`, `NEW_FEATURE`
- 현재 동작: 단일 음식/타겟 중심으로 동작한다.
- 기대 동작: 여러 타겟이 생성되는 시나리오를 지원해야 한다.
- 재현 방법: 현재는 여러 타겟 시나리오가 없다.
- 근거 자료: 사용자 수정 요청 원문
- 수정 대상 기능: 타겟 생성 규칙, 렌더링, 점수/성장 연동
- 예상 수정 파일: `game.js`, `index.html`, `styles.css`
- 변경 허용 범위: 다중 타겟 규칙, 타겟 상태 표시
- 변경 금지 범위: 게임 종료 조건 훼손, 기존 단일 타겟 시나리오 파괴
- 선행 작업: "여러개"의 정확한 수량과 규칙 확정
- 후속 작업: 다중 타겟 충돌, 점수, 성장 회귀 테스트
- 다른 Change Item과의 의존성: `CR-006`과 게임 루프 공유 가능
- 완료 기준: 다중 타겟이 예측 가능한 규칙으로 생성되고 정상 상호작용한다.
- 검증 방법: 여러 타겟 생성, 섭취, 제거 흐름 확인
- 회귀 테스트: 단일 타겟 기본 시나리오, 게임 오버, 점수
- 위험도: `HIGH`
- 배포 필요 여부: `YES`
- 사람 확인 필요 항목: 타겟 수, 생성 조건, 우선순위는 `[사람 확인 필요]`

## 변경 루프 순서
1. 기준선 재확인 및 현재 구현 검수
2. `CR-001` 작은 화면 조작 패널 접근성 개선
3. `CR-002` 버튼 즉시 반응 문제 수정
4. `CR-006` level/속도 규칙 추가
5. `CR-007` 다중 타겟 시나리오 추가
6. `CR-003` 한글/영어 다국어 지원
7. `CR-004` 라이트/다크 테마 전환
8. `CR-005` 좌측 indexing/스크롤 보조 UI
9. 전체 회귀 테스트 및 GitHub Pages 호환성 재검증

## 루프별 상태 초안

### Loop-001
- 연결된 Change Item: 기준선 재확인
- Target: 현재 정상 배포본과 현재 코드 상태 확인
- 입력 자료: 저장소 파일, AORR.md, MEMORY.md, Git remote, 마지막 배포 URL
- Act: 변경 전 상태를 검증하고 로그를 남긴다.
- Observe: 배포 커밋, URL, 상태, 기존 검증 기록
- Reason: `TEST`
- Verifier: `git status --short`, `git remote -v`, `git rev-parse HEAD`
- 완료 기준: 기준선이 명확하고 변경 전 상태가 기록된다.
- Retry 정책: 동일 fingerprint 2회 반복 시 중지
- Stop 조건: 기준선 확인 완료
- HITL 조건: 추가 자료가 불명확하면 즉시 표시
- 예상 수정 파일: 없음
- 선행 Loop: 없음
- 다음 Loop: `Loop-002`
- 상태: `READY`

### Loop-002
- 연결된 Change Item: `CR-001`
- Target: 작은 화면에서 게임 조작 패널이 손닿는 위치에 있도록 조정
- 입력 자료: 현재 게임 섹션, 모바일 viewport
- Act: 게임 패널 레이아웃을 모바일 친화적으로 재배치한다.
- Observe: 375px/768px viewport에서 조작 접근성
- Reason: `CSS_RESPONSIVE`, `GAME_CONTROL`
- Verifier: 브라우저 viewport 검사, 모바일 레이아웃 확인
- 완료 기준: 모바일에서 조작 UI가 보드와 충분히 가깝다.
- Retry 정책: 하나의 레이아웃 원인만 수정
- Stop 조건: UI가 사용 가능해지면 종료
- HITL 조건: 정확한 배치 방식이 필요하면 요청
- 예상 수정 파일: `index.html`, `styles.css`
- 선행 Loop: `Loop-001`
- 다음 Loop: `Loop-003`
- 상태: `CHANGE_PLANNED`

### Loop-003
- 연결된 Change Item: `CR-002`
- Target: 버튼 입력 즉시 방향 전환
- 입력 자료: 현재 게임 입력 처리
- Act: 입력 이벤트를 즉시 반응형으로 조정한다.
- Observe: 버튼 누름 직후 방향 전환 체감
- Reason: `GAME_CONTROL`
- Verifier: 모바일/터치 조작 검수
- 완료 기준: 클릭/터치 즉시 방향이 바뀐다.
- Retry 정책: 입력 이벤트 한 종류씩만 조정
- Stop 조건: 즉시 반응 확인
- HITL 조건: 이벤트 우선순위 선택이 불분명하면 요청
- 예상 수정 파일: `game.js`, `styles.css`
- 선행 Loop: `Loop-002`
- 다음 Loop: `Loop-004`
- 상태: `CHANGE_PLANNED`

### Loop-004
- 연결된 Change Item: `CR-006`
- Target: SCORE 10점마다 level이 올라가고 속도가 증가
- 입력 자료: 현재 스코어/속도 규칙
- Act: level 상태와 속도 단계 규칙을 추가한다.
- Observe: 점수 10, 20, 30 구간의 변화
- Reason: `GAME_LOGIC`
- Verifier: 게임 점수와 속도 변화 확인
- 완료 기준: level 상승이 예측 가능하게 동작한다.
- Retry 정책: 속도 규칙만 수정
- Stop 조건: 점수 구간 검증 완료
- HITL 조건: 속도 상승 폭이 모호하면 요청
- 예상 수정 파일: `game.js`, `index.html`
- 선행 Loop: `Loop-003`
- 다음 Loop: `Loop-005`
- 상태: `CHANGE_PLANNED`

### Loop-005
- 연결된 Change Item: `CR-007`
- Target: 다중 타겟 생성 시나리오 추가
- 입력 자료: 타겟 생성 로직
- Act: 다중 타겟 규칙을 설계하고 렌더링한다.
- Observe: 여러 타겟 생성/회수/점수 반응
- Reason: `GAME_ENTITY`, `GAME_LOGIC`
- Verifier: 게임 플레이 검수
- 완료 기준: 다중 타겟이 정상적으로 등장하고 상호작용한다.
- Retry 정책: 타겟 규칙만 한 번에 하나씩 수정
- Stop 조건: 다중 타겟 시나리오 통과
- HITL 조건: 타겟 수/생성 조건 불명확
- 예상 수정 파일: `game.js`, `index.html`, `styles.css`
- 선행 Loop: `Loop-004`
- 다음 Loop: `Loop-006`
- 상태: `CHANGE_PLANNED`

### Loop-006
- 연결된 Change Item: `CR-003`
- Target: 한글 기본, 영어 추가 언어 지원
- 입력 자료: 현재 모든 텍스트와 번역 범위
- Act: 언어 전환 구조를 설계하고 번역 데이터를 연결한다.
- Observe: 언어 토글 후 전체 UI 일관성
- Reason: `CONTENT`, `INFORMATION_ARCHITECTURE`
- Verifier: 화면 문구 비교, 메뉴/게임 텍스트 확인
- 완료 기준: 기본 한글 + 영어 전환이 가능하다.
- Retry 정책: 번역 범위 하나씩 검증
- Stop 조건: 언어 전환이 일관되면 종료
- HITL 조건: 번역할 범위가 불명확하면 확인 필요
- 예상 수정 파일: `index.html`, `script.js`, `styles.css`
- 선행 Loop: `Loop-005`
- 다음 Loop: `Loop-007`
- 상태: `CHANGE_PLANNED`

### Loop-007
- 연결된 Change Item: `CR-004`
- Target: 라이트/다크 테마 전환
- 입력 자료: 현재 색상 토큰과 버튼 스타일
- Act: 테마 토글과 저장 선호도를 추가한다.
- Observe: 테마 전환과 새로고침 유지
- Reason: `UI_UX`, `ACCESSIBILITY`
- Verifier: 시각 확인과 대비 확인
- 완료 기준: 라이트/다크 선택이 가능하다.
- Retry 정책: 색상 토큰 한 번에 하나씩 조정
- Stop 조건: 두 테마 모두 읽기 쉬우면 종료
- HITL 조건: 기본 테마 선택이 필요하면 확인
- 예상 수정 파일: `styles.css`, `script.js`, `index.html`
- 선행 Loop: `Loop-006`
- 다음 Loop: `Loop-008`
- 상태: `CHANGE_PLANNED`

### Loop-008
- 연결된 Change Item: `CR-005`
- Target: 화면 좌측 indexing/스크롤 보조 UI
- 입력 자료: 현재 정보 구조와 앵커 구조
- Act: 좌측 고정 인덱스 혹은 스크롤 스파이를 설계한다.
- Observe: 섹션 위치 표시와 빠른 이동
- Reason: `INFORMATION_ARCHITECTURE`, `NAVIGATION`
- Verifier: 스크롤 이동과 표시 상태 확인
- 완료 기준: 좌측에서 현재 위치를 식별할 수 있다.
- Retry 정책: 구조 변경은 최소 범위만 허용
- Stop 조건: 위치 표시가 동작하면 종료
- HITL 조건: "indexing"의 의미가 확정되어야 함
- 예상 수정 파일: `index.html`, `styles.css`, `script.js`
- 선행 Loop: `Loop-007`
- 다음 Loop: `Loop-009`
- 상태: `HITL_REQUIRED`

### Loop-009
- 연결된 Change Item: 전체 회귀
- Target: 기존 프로페셔널 사이트, Games 탭, 반응형, GitHub Pages 호환성 재검증
- 입력 자료: 변경된 파일 전체, 현재 배포 기준선
- Act: 통합 회귀 검증을 수행한다.
- Observe: 콘솔 오류, 깨진 링크, 모바일/데스크톱 상태
- Reason: `TEST`, `DEPLOYMENT`
- Verifier: 브라우저 검수, 로컬 정적 서버 또는 대체 수단
- 완료 기준: 전체 기능이 유지된다.
- Retry 정책: 한 번에 하나의 실패 원인만 수정
- Stop 조건: 모든 검증 통과 또는 HITL 필요
- HITL 조건: 배포 권한/환경 문제 발생 시
- 예상 수정 파일: 필요 최소 파일만
- 선행 Loop: `Loop-008`
- 다음 Loop: 없음
- 상태: `READY`

## 현재 상태
- 현재 상태: `CHANGE_PLANNED`
- 사람 확인 필요 항목: `CR-005`의 indexing 정의, `CR-007`의 다중 타겟 규칙, `CR-003`의 번역 범위, `CR-004`의 기본 테마
- 배포 필요 여부: `YES` for implementation completion, but not in this analysis step
- 구현 시작 여부: 시작하지 않음

## Loop Execution Update
- `CR-001`: `PASSED`
  - 실제 수정 파일: `index.html`, `styles.css`
  - 테스트 결과: 375px viewport에서 게임 조작 패널이 보드보다 앞에 배치되고, 브라우저 콘솔 오류 없음
  - Retry 횟수: `0`
  - 완료 또는 중지 이유: 모바일 조작 패널 접근성 개선 완료
- `CR-002`: `PASSED`
  - 실제 수정 파일: `game.js`
  - 테스트 결과: pointerdown 직후 방향 상태가 즉시 변경됨, 브라우저 콘솔 오류 없음
  - Retry 횟수: `0`
  - 완료 또는 중지 이유: 버튼 즉시 반응 문제 해결
- `CR-006`: `PASSED`
  - 실제 수정 파일: `index.html`, `styles.css`, `game.js`
  - 테스트 결과: score 9에서 level 1, score 10에서 level 2, stepDelay 140 -> 130 확인, 브라우저 콘솔 오류 없음
  - Retry 횟수: `0`
  - 완료 또는 중지 이유: level 및 속도 단계 규칙 반영 완료
- `CR-007`: `BLOCKED`
  - 완료 또는 중지 이유: 다중 타겟의 수량과 생성 규칙이 아직 `[사람 확인 필요]`
- `CR-003`: `READY`
- `CR-004`: `READY`
- `CR-005`: `HITL_REQUIRED`
## Latest Re-Verification
- `CR-003`: `PASSED`
  - Browser verification: default language is Korean, nav/hero/game copy switches to English, no console errors
  - Actual files: `script.js`, `index.html`
- `CR-004`: `PASSED`
  - Browser verification: theme toggle updates `data-theme` and styling correctly, no console errors
  - Actual files: `script.js`, `styles.css`, `index.html`
- `CR-005`: `HITL_REQUIRED`
  - `indexing` remains ambiguous
- `CR-007`: `BLOCKED`
  - Multi-target spawn rules remain undefined
