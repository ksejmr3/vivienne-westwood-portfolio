# Vivienne Westwood 개인 포트폴리오 디자인 가이드

> 문서 기준일: 2026-10-12  
> 프로젝트 기준: React + Vite, Figma 파일 `3JuafVYlSdXJsmETYSH448`, 데스크톱 프레임 1920 × 1080  
> 표기 원칙: **확인값**은 현재 Figma/코드에서 직접 확인한 값, **제안**은 구현 시 참고할 규칙이며 원본에서 확인한 값이 아니다. 제공된 Figma MCP의 메타데이터·레이어·스타일과 현재 로컬 파일을 대조했다. 이 문서는 디자인 스펙 전체에 대한 새 시각 회귀 테스트를 대체하지 않는다.

## 1. Design Concept

Vivienne Westwood 패션 하우스의 반항적 태도와 영국식 헤리티지를 큰 편집 디자인, 아카이브/캠페인 이미지, 절제된 색으로 전달한다. 아래 키워드는 확인한 화면을 바탕으로 한 콘셉트 요약이다.

**핵심 키워드 5개:** 반항(Rebellion) · 영국 헤리티지(Heritage) · 패션 에디토리얼(Editorial) · 조형적 실루엣(Sculptural) · 아카이브(Archive)

화면에서 확인되는 표현은 매우 큰 Barlow Condensed 헤드라인, 넓은 여백, 이미지의 비대칭 스택/회전, 흑백과 아이보리 바탕에 버건디/레드 포인트다. 타 레퍼런스의 브랜딩이나 콘텐츠를 복사하지 않고 이 포트폴리오의 Figma 레이아웃을 기준으로 한다.

## 2. Color System

### Figma 변수와 코드 토큰

| CSS 토큰 (`src/styles/variables.css`) | Figma 변수/스타일 | HEX | 역할 |
|---|---|---:|---|
| `--color-primary-white` | Primary/White | `#F8F8F8` | 기본 밝은 배경, 반전 텍스트 |
| `--color-primary-black` | Primary/Black | `#111111` | 본문/헤드라인, Selected Projects 바탕 |
| `--color-accent-burgundy` | Accent/Burgundy | `#651F2A` | 버건디 포인트 |
| `--color-accent-vivienne-red` | Accent/Vivienne Red | `#C1121F` | 포커스 등 강한 레드 포인트 |
| `--color-material-tartan-red` | Material/Tartan Red | `#8D1F2D` | 타탄/소재 이미지 카드 |
| `--color-material-pearl-ivory` | Material/Pearl Ivory | `#F2EFE9` | 아이보리 섹션/카드 바탕 |
| `--color-material-antique-ivory` | Material/Antique Ivory | `#DED8CF` | 보조 아이보리 소재 |
| `--color-editorial-leather-black` | Editorial/Leather Black | `#1A1A1A` | 가죽/어두운 카드 표면 |

확인한 Figma에는 위 변수 이외에 순수 흰색 `#FFFFFF`, 검정 `#000000` 및 투명도가 적용된 페인트도 있다. 예: 카드 오버레이 검정 60%, Editorial eyebrow 버건디 70%, 얇은 구분선 흑색/흰색 20%, Latest Collection 상태 표시 검정 40%. 같은 색이라도 불투명도는 레이어마다 다르므로 부모 opacity를 임의 적용하지 말고 해당 레이어의 Fill/opacity를 확인한다. `#FFFFFF`와 알파색은 현재 변수 파일에 별도 토큰이 없다.

**사용 비율:** Figma 변수에는 색상별 화면 점유율/비율이 정의되어 있지 않으며, 전체 페이지의 픽셀 면적 분석값도 확보하지 않았다. 따라서 퍼센트는 미확인으로 둔다. 실제 사용처는 위 표와 각 노드 스타일을 따른다. 시각적 균형을 위한 비율을 추정해 토큰처럼 취급하지 않는다.

## 3. Typography

폰트 파일과 사용 가능 굵기는 `public/fonts` 및 `src/styles/global.css`에서 확인했다. Figma 스타일을 CSS 토큰으로 옮긴 값은 다음과 같다. `line-height`는 CSS 단위 없는 배수이고, 자간은 em 값이다.

| 용도 / 변수 | 폰트 및 굵기 | 크기 / 행간 | 자간 |
|---|---|---:|---:|
| 워드마크 `--type-display-brand` | Barlow Condensed 500 | 360px / 0.85 | -0.07em |
| Hero `--type-display-hero` | Barlow Condensed 600 | 235px / 0.88 | -0.03em |
| Display XL `--type-display-xl` | Barlow Condensed 500 | 120px / 0.94 | -0.003em |
| Display L `--type-display-l` | Barlow Condensed 500 | 84px / 0.98 | 0 |
| Display M `--type-display-m` | Barlow Condensed 500 | 64px / 1.05 | 0 |
| House Codes `--type-display-codes` | Barlow Condensed 500 | 210px / 0.9 | -0.005em |
| Expertise `--type-display-expertise` | Barlow Condensed 500 | 200px / 0.8 | -0.03em |
| Navigation `--type-text-navigation` | Work Sans 500 | 16px / 1 | 0.01em |
| Small `--type-text-small` | Work Sans 400 | 12px / 1.45 | 0.005em |
| Label `--type-text-label` | Work Sans 500 | 16px / 1.35 | 0.01em |
| Caption `--type-text-caption` | Work Sans 400 | 14px / 1.45 | 0.005em |
| Subheading `--type-text-subheading` | Work Sans 500 | 24px / 1.3 | 0 |
| Lead `--type-text-lead` | Work Sans 250 | 28px / 1.35 | 0 |
| Editorial label `--type-editorial-label` | Work Sans 500 | 14px / 1.3 | 0.02em |
| Editorial tabs `--type-editorial-tab(-active)` | Work Sans 400/500 | 18px / 1.3 | 0.01em |
| Editorial quote `--type-editorial-quote` | Work Sans 200 | 46px / 1.25 | -0.005em |
| Primary button `--type-button-primary` | Lora Italic 500 | 16px / 1.2 | 0 |

현재 변수는 `variables.css`에 유지한다. 새 토큰 파일을 만들지 않는다. Figma에서 특정 텍스트 레이어 값이 위 공통 스타일과 다르면 그 레이어의 실제 스타일을 우선하고, 반복 확인 후 공통 토큰과의 차이를 기록한다.

## 4. Layout System

- **확인된 기준 프레임:** 각 섹션 프레임은 1920 × 1080px. `WIREFRAME` 부모 프레임은 1921 × 13051px이며 `clipsContent=false`; 섹션은 자체 클리핑을 갖는다.
- **섹션 배치:** 연속된 1080px 데스크톱 구간. Header는 91px 높이이고 Hero는 y=91부터 시작한다. 이후 섹션은 각 1080px 구간으로 이어진다.
- **현재 코드 축소 방식:** `global.css`의 `.portfolio { width:1921px; zoom:min(1, calc(100cqw / 1921px)); }`. 이는 현재 구현의 데스크톱 비례 축소 방식이며, 전역 좌표계 변경은 별도 요청 없이 하지 않는다.
- Figma 섹션 프레임은 `clipsContent=true`로 확인했다. 절대 배치나 회전 요소는 해당 섹션 경계에서 클립되는지 확인한다.
- 화면은 절대좌표, 중첩 스택, 비대칭 정렬을 사용한다. 문서의 수치가 없는 화면에 일반적인 그리드/간격값을 만들어 넣지 않는다.
- Tablet/Mobile용 Figma 프레임 또는 별도 사양은 확인되지 않았다. 반응형 전용 레이아웃/브레이크포인트는 **미정**이다. 기존 데스크톱 캔버스 축소를 모바일 디자인 스펙으로 간주하지 않는다.

### 전체 섹션 순서와 역할

| 순서 | 섹션 / 역할 | Figma 노드 | 프레임 위치와 크기 | 현재 코드 상태 |
|---:|---|---|---|---|
| 1 | Header — 브랜드/주요 메뉴 | `234:554` | y=0, 1920×91 | 구현됨, 링크 동작은 정적 |
| 2 | Hero — 브랜드 선언과 캠페인 이미지 | `234:543` | y=91, 1920×1080 | 정적 구현됨, 영상 재생 없음 |
| 3 | Latest Collection — 시즌 컬렉션 소개 | `234:520` | y=1171, 1920×1080 | 정적 구현됨, 이미지 전환 없음 |
| 4 | House Objects — 제품 목록 | `234:530` | y=2251, 1920×1080 | 정적 구현됨, 캐러셀 동작 없음 |
| 5 | Selected Projects — 프로젝트 포트폴리오 | `234:509` | y=3331, 1920×1080 | 기본 상태 정적 구현, 카드 상세 전환 없음 |
| 6 | House Intro — 하우스 정의 제목 | `234:507` | y=4411, 1920×1080 | 제목 정적 구현 |
| 7 | Expertise / Heritage — 헤리티지 | `234:500` | y=5491, 1920×1080 | 미구현 |
| 8 | Expertise / Craftsmanship — 장인정신 | `234:493` | y=6571, 1920×1080 | 미구현 |
| 9 | Expertise / Rebellion — 반항성 | `234:486` | y=7651, 1920×1080 | 미구현 |
| 10 | Latest News — 최신 소식 | `234:447` | y=8731, 1920×1080 | 미구현 |
| 11 | House Codes — 브랜드 코드 | `234:464` | y=9811, 1920×1080 | 미구현 |
| 12 | Editorial Voices — 에디토리얼/인용 | `234:437` | y=10891, 1920×1080 | 미구현 |
| 13 | Footer — 마무리/보조 탐색 | `234:420` | y=11971, 1920×1080 | 미구현 |

섹션 위치는 Figma 부모 프레임에서 확인한 좌표이며 브라우저의 실제 전체 높이나 이미지 픽셀 점유율을 측정한 값은 아니다.

## 5. Components

- **Header:** 왼쪽 로고, 중앙 주요 탐색(Collection / Projects / House Codes / Editorial), 우측 계정·위시리스트·가방 아이콘. 실제 코드에서는 메뉴 항목이 `span`이며 아직 페이지 이동 기능이 연결되지 않았다.
- **Button:** Figma Primary Button 스타일은 Lora Italic 500, 16px/1.2. 실제 사용 노드의 테두리, 화살표, Fill을 별도로 확인한다. 단순 표시 텍스트는 접근 가능한 실제 `button`/`a`로 바꾸는 것은 인터랙션 단계에서 처리한다.
- **Card:** 섹션에 따라 이미지 프레임, 크롭, 회전, 오버레이가 다르다. House Objects 및 Selected Projects는 개별 데이터/요소로 나눈다. 공통 카드 CSS를 무리하게 공유해 크롭/회전 차이를 없애지 않는다.
- **Navigation:** 기본 헤더 항목은 Work/Collection 등 각 Figma 화면의 라벨을 사용한다. 활성 상태, 이동 목적지, sticky/fixed 동작은 실제 prototype/노드 확인 전까지 미확인이다.
- **Footer:** Figma에는 프레임 `234:420`이 있으나 현재 React 앱에 연결되지 않았다. 콘텐츠/링크 구현 시 노드를 다시 읽는다.

### 현재 컴포넌트 트리

```text
App
├── Header
├── Hero
├── LatestCollection
├── HouseObjects
├── SelectedProjects
└── HouseIntro
```

각 구현 섹션은 `src/components/sections/<Section>.jsx`와 대응 `.css`, Header는 `src/components/layout/`에 있다. 공통 글로벌 CSS와 토큰은 `src/styles/`에 둔다.

## 6. Hero Design

- Figma 노드 `234:543`, 프레임 1920 × 1080, Hero 구간은 페이지 좌표 y=91. Figma에서 Clip Content가 켜져 있다.
- 주요 카피는 위쪽 `BREAK THE RULES`, 아래쪽 `REMAKE FASHION`. 현재 구현 좌표는 섹션 내 각각 (270,30), (310,813), 스타일은 `--type-display-hero`(235px, 600, 행간 .88, 자간 -.03em)이다.
- 왼쪽 아래 런던/설립 정보와 오른쪽 아래 짧은 브랜드 문안은 섹션 내 y=931에서 시작하며 캡션 스타일은 Work Sans 400, 14px/1.45, .005em이다.
- 중앙은 회전한 포스터와 뒤쪽 3개의 컬러 카드로 구성된다. 코드상 바깥 포스터 프레임은 597.3 × 793.514px, 이미지는 516.889 × 739.762px, 이미지 콘텐츠에 -6.5° 회전, 재생 아이콘은 콘텐츠 좌표 (250.94,362.38), 50 × 50px이다. 영상 파일/재생 동작은 없고 로컬 포스터만 사용한다.
- 위 수치는 현재 코드와 이전 Figma 확인 기록을 대조한 값이다. 재검수 때 Transform 기준점과 원본 자산을 다시 비교한다. Hero의 전체 정확도를 이 문서만으로 보증하지 않는다.

## 7. Motion & Interaction

### 현재 확인 상태

Header, Hero, Latest Collection, House Objects, Selected Projects, House Intro는 정적 레이아웃이다. 메뉴, 아이콘, 상태 점, 화살표는 일부 정적 표현만 있고 동작이 연결되지 않았다. Hero 영상은 제공된 포스터만 표시한다. Selected Projects Figma 클릭 상태(`259:1911`)는 참고 노드이며 현재 기본 화면에 인터랙션은 구현하지 않았다.

### 구현 순서 제안 — Figma prototype 추가 검증 필요

1. 정적 레이아웃/자산/텍스트와 각 기본 상태를 먼저 맞춘다.
2. Figma prototype 또는 사용자 승인된 동작 정의를 확인해 상태 전이, 닫기/복귀 동작, 포커스/키보드 동작을 명세한다.
3. 클릭/캐러셀/탭처럼 화면 상태가 바뀌는 동작을 연결한다.
4. 의도와 duration/easing이 확인된 경우에만 transition/scroll motion을 적용한다.
5. GSAP는 실제 timeline 기반 동작이 필요하다고 확정된 뒤 도입 여부를 검토한다. 현재 설치 여부/사용 여부는 확인하지 않았으며 패키지 추가를 전제하지 않는다.

Paper Tiger 페이지에서 Work/Expertise/Agency/News/Contact 내비게이션, 큰 헤드라인, Latest Work 목록, Expertise, Latest News, 후기 및 하단 링크 구조를 확인했다. Max & Tiber 페이지에서는 상단 링크, 브랜드 설명, “Nos lunettes” 소개, 소식 카드 3개를 확인했다. 브라우저 열람 결과만으로 어느 사이트의 hover/스크롤 애니메이션 구현 세부, easing, duration, 동작 접근성은 확인할 수 없으므로 **미확인**이다. 두 사이트는 정보 구조/편집 감도의 참고일 뿐 인터랙션 사양이 아니다.

## 8. Responsive Design

- **Desktop — 확인:** Figma 섹션은 1920 × 1080px 기준. 현재 `global.css`가 1921px 캔버스를 컨테이너 너비에 따라 비례 축소한다.
- **Tablet — 미정:** 별도 Figma 프레임, breakpoint, 재배치 규칙을 확인하지 못했다.
- **Mobile — 미정:** 별도 Figma 프레임, 모바일 네비게이션, 카드 재배치 규칙을 확인하지 못했다. 임의의 시안을 만들지 않는다.
- 새 반응형 동작은 디자인 소스/요청을 확인한 후 정의하고, 그 전까지 전역 zoom 및 데스크톱 캔버스는 변경하지 않는다.

## 9. Accessibility

아래는 현재 Figma에서 확인된 속성이 아니라 구현 품질을 위한 권장 사항이다.

- 텍스트/배경 색은 실제 사용 조합으로 대비를 검사한다. Figma의 낮은 opacity 오버레이나 회색 조합을 포함해 계산한다.
- 이동 가능한 메뉴/화살표/상태 선택 요소는 의미 있는 `a` 또는 `button`, 접근 가능한 이름, 키보드 조작을 제공한다. 장식 이미지는 빈 alt 또는 `aria-hidden`으로 처리한다.
- `:focus-visible`은 현재 글로벌 CSS에서 2px Vivienne Red outline으로 정의되어 있다.
- 애니메이션을 구현할 경우 `prefers-reduced-motion`을 존중하고 움직임 감소 시 상태 변화의 의미를 유지한다.
- 현재 메뉴/아이콘/화살표 중 정적 `span`이 있으므로 인터랙션 단계에서 semantic element와 키보드 접근성을 함께 검토한다.

## 10. Personal Branding

Vivienne Westwood의 런던 기반 패션 하우스, 타탄/펄/가죽의 소재 언어, 전통 재단과 반항적 실루엣을 포트폴리오의 작업 기록과 연결한다. 큰 디스플레이 타이포는 선언적 태도를, 아카이브/캠페인 사진은 작업의 맥락을, 낮은 채도의 아이보리와 검정은 이미지가 중심이 되는 편집 무드를 만든다. 개인 포트폴리오 관점에서는 작품과 그 배경을 보여주는 구조로 사용하되, Figma에 없는 약력/성과/카피를 임의로 추가하지 않는다.

## 이미지, SVG, 폰트 관리

- 현재 로컬 이미지: `collection-01..03.png`, `expertise-craftsmanship.png`, `expertise-heritage.png`, `expertise-rebellion.png`, `hero-poster.jpeg`, `necklace-01..06.png`, `news-collection.png`, `news-culture.png`, `news-runway.png`, `project-01..06.png` (`public/images`).
- 현재 SVG: `bag.svg`, `carousel-arrow.svg`, `collection-state-active.svg`, `collection-state-default.svg`, `heart.svg`, `logo.svg`, `news-arrow.svg`, `person.svg`, `play.svg`, `projects-arrow.svg` (`public/icons`). 파일명만으로 Figma와의 정확한 이미지 매핑을 단정하지 말고 시각적으로 비교한다.
- 폰트: Barlow Condensed Medium/SemiBold, Work Sans variable, Lora Italic variable (`public/fonts`). 각 폰트에 대응하는 `OFL-*.txt` 라이선스 파일이 있으므로 함께 보존하고 배포 범위/수정 시 해당 라이선스 조건을 확인한다. 폰트를 다른 파일로 대체하거나 외부 CDN으로 옮기지 않는다.
- 원본으로 확인되고 프로젝트 내에서 내려받을 수 있는 에셋만 사용한다. Figma에서 원본 자산을 읽지 못했으면 임의 생성/대체하지 말고 미확인으로 보고한다.

## 작업 순서 및 검수

### 정적 레이아웃 → 인터랙션 → 최종 검수

1. 작업 전에 이 문서, `AGENTS.md`, 관련 JSX/CSS, 토큰, 기존 자산, Git 변경 상태를 읽는다.
2. 구현할 Figma 노드를 다시 열어 실제 프레임, 레이어, 스타일, 이미지, Clip Content, prototype 상태를 확인한다. 불명확한 수치는 추측하지 않고 미확인으로 둔다.
3. 한 번에 한 섹션만 정적 구현한다. 기존 섹션/전역 zoom/공통 토큰을 임의로 재설정하지 않는다.
4. 1920px 브라우저를 기준으로 원본과 나란히 비교한 후 섹션 지정 범위에서 수정한다.
5. 정적 화면을 확정한 뒤 승인/확인된 동작 사양으로 인터랙션을 구현한다.
6. 요청된 브라우저 너비에서 크롭, 텍스트, 잘림, overflow, 키보드/포커스를 확인하고 빌드를 수행한다.
7. 변경 파일, 실제 검증 결과, 미확인 항목을 보고한다. 요청되지 않은 Git 커밋/푸시는 하지 않는다.

### Figma ↔ 브라우저 비교 체크리스트

- 같은 1920px viewport와 같은 배율/스크롤 위치인가?
- 섹션의 크기/좌표/배경/Clip Content가 같은가?
- 폰트 파일 로드, 굵기, 크기, line-height, letter-spacing, 실제 줄바꿈이 같은가?
- 색상은 변수 HEX뿐 아니라 레이어 opacity까지 일치하는가?
- 이미지 매핑, 원본 비율, crop/object-position, rotation origin, stacking/z-order가 같은가?
- 카드/텍스트/아이콘의 크기와 간격이 Figma 값과 맞는가?
- 잘림, 겹침, 가로 overflow가 없는가?
- 정적 상태와 prototype의 상태를 혼동하지 않았는가?
- 동작 요소가 있다면 키보드/포커스/reduced motion을 확인했는가?

## 실제 코드와 Figma의 현재 차이 / 미확인 사항

- **페이지 구현 범위:** Figma에는 13개 섹션이 있으나 현재 `App.jsx`는 Header부터 House Intro까지 6개만 렌더링한다. 나머지 Expertise 3개, Latest News, House Codes, Editorial Voices, Footer는 미구현이다.
- **상호작용:** 현재 섹션의 기본 화면은 정적 구현이다. 메뉴 이동, Hero 재생, Collection 전환, House Objects 캐러셀, Selected Projects 상세 클릭 상태는 미구현이다.
- **토큰:** Figma의 8개 주요 색 변수는 현재 `variables.css` 토큰과 값이 대응한다. Figma 일부 레이어의 순수 `#FFFFFF`, `#000000` 및 opacity가 있는 paint는 동일한 별도 토큰으로 정의되지 않고 일부 섹션 CSS에서 직접 색/알파를 쓴다.
- **페이지 상태/모바일:** tablet/mobile용 Figma 프레임과 정확한 breakpoint/재배치 규칙은 확인되지 않았다.
- **레퍼런스 동작:** Paper Tiger와 Max & Tiber의 구조/텍스트/목록은 확인했지만 구체적인 hover, scroll-trigger, easing, duration, 캐러셀 제스처 등은 확인되지 않았다.
- **비율/전역 색 면적:** Figma가 색 사용 비율을 명시하지 않았고 픽셀 기반 면적 분석도 하지 않았다.
- **현재 화면 전수 일치 여부:** 이 문서는 모든 현재 컴포넌트에 대해 새 브라우저 캡처 기반 픽셀 검수를 수행한 결과가 아니다. 수치/코드 비교 외에 시각 검증이 필요한 차이는 해당 섹션 작업의 검수 기록에서 확인한다.

## Reference observations

- [Paper Tiger](https://www.papertiger.com/) — 2026-10-12에 페이지 구조를 열람했다. Work/Expertise/Agency/News/Contact 탐색, “Clarity First, Impact Forever” 헤드라인, Latest work 이미지 목록, Expertise 설명 블록, Latest News, 후기와 하단 링크가 노출된다. 동작 세부는 미확인.
- [Max & Tiber — CH/FR](https://www.maxandtiber.com/ch_fr/) — 2026-10-12 열람했다. Lunettes/About/Points of sale/Contact 탐색, 브랜드 소개, 안경 소개, 뉴스 카드 3개가 노출된다. 카드 전환/스크롤 애니메이션 동작은 미확인.

