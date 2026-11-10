# Vivienne Westwood | Website Redesign

## Overview

Vivienne Westwood의 브랜드 웹사이트를 재해석한 개인 리디자인 프로젝트입니다. 영국 헤리티지와 펑크 문화에서 출발한 브랜드의 개성을 에디토리얼 타이포그래피, 비대칭 이미지 구성, 스크롤 기반 전환으로 표현했습니다.

React 기반으로 디자인과 프론트엔드를 구현했으며, 브랜드의 공식 웹사이트가 아닌 개인 포트폴리오 작업입니다.

## Project Information

| Item | Details |
| --- | --- |
| Project Type | Personal Project |
| Role | Design & Front-end Development |
| Front-end | React, JavaScript, CSS |
| Build Tool | Vite |
| Code Quality | Oxlint |
| Deployment | [Vercel](https://vivienne-westwood-portfolio.vercel.app/) |

## Key Sections

- **Header** — 데스크톱 내비게이션과 모바일 메뉴
- **Hero** — 브랜드 메시지, 컬러 카드, AI 런웨이 영상으로 구성한 도입부
- **Latest Collection** — 세 개의 컬렉션 이미지와 설명이 전환되는 스택
- **House Objects** — 여섯 개의 주얼리 오브젝트 컬렉션
- **Selected Projects** — 아카이브, 캠페인, 에디토리얼을 다루는 여섯 개의 프로젝트 카드
- **House Intro & Expertise** — Heritage, Craftsmanship, Rebellion을 소개하는 콘텐츠
- **Latest News** — 컬렉션, 문화, 런웨이 소식
- **House Codes** — 브랜드를 구성하는 키워드를 다섯 개의 마키 행으로 표현한 섹션
- **Editorial Voices** — 에디토리얼 인용과 출처를 보여주는 섹션
- **Footer** — 브랜드 정보와 보조 탐색 영역

## Features

현재 코드에 구현된 기능은 다음과 같습니다.

- 섹션 앵커를 사용하는 데스크톱 내비게이션과 모바일 메뉴
- 모바일 메뉴의 열기·닫기, Escape 키 닫기, 포커스 이동 및 화면 크기 변경 대응
- 자동 재생·음소거·반복·인라인 재생을 적용한 Hero 영상
- 스크롤 진행률에 연동되는 Hero 영상 확대, 회전 복귀 및 타이틀 전환
- 스크롤 위치에 따라 이미지와 설명이 `01 → 02 → 03`으로 전환되는 Latest Collection
- 마우스 Hover, 터치 선택, 키보드 Focus를 지원하는 Selected Projects 카드
- 좌우 교차 방향으로 반복되는 House Codes 마키
- 주요 모션의 `prefers-reduced-motion` 대응
- 모바일·태블릿 구간에서 주요 섹션을 재배치한 반응형 레이아웃

House Objects의 화살표와 일부 후반 섹션의 제어 요소는 현재 시각적 구성으로만 제공되며, 실제 캐러셀이나 추가 페이지 이동 기능은 연결하지 않았습니다.

## Tech Stack

- React 19
- React DOM 19
- JavaScript (ES Modules)
- CSS
- HTML5 Video
- Vite 8
- Oxlint

별도의 애니메이션 라이브러리 없이 React 상태, 브라우저 스크롤·리사이즈 이벤트, CSS를 사용해 현재 인터랙션을 구현했습니다.

## Getting Started

```bash
npm install
npm run dev
```

프로덕션 빌드와 로컬 미리보기:

```bash
npm run build
npm run preview
```

코드 검사:

```bash
npm run lint
```

## Live Website

[https://vivienne-westwood-portfolio.vercel.app/](https://vivienne-westwood-portfolio.vercel.app/)

## Development Status

현재 공개된 버전에는 주요 데스크톱 인터랙션과 단계별 모바일·태블릿 레이아웃이 반영되어 있습니다. 전체 데스크톱 인터랙션의 레퍼런스 기반 검수와 보완, 남은 섹션의 반응형 최종 검수는 진행 예정이며, 검증 완료 후 프로덕션 배포를 갱신할 예정입니다.
