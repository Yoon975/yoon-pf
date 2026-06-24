export const profile = {
  name: '윤영빈',
  role: '풀스택 개발자',
  email: 'tast3@naver.com',
  education: '대구대학교 경영학과 (졸업 예정)',
  intro:
    '문제를 분석하고 해결하는 과정에서 개발에 흥미를 느꼈고, 풀스택 개발자로 성장하고 있습니다. Java·Spring·JSP/Servlet과 Python, DB 설계, API 연동 경험을 바탕으로 팀 프로젝트에서 Controller·리뷰·예약·데이터 연동 등 담당 영역을 끝까지 책임지며 구현해 왔습니다. 맡은 일에 최선을 다하고, 협업 속에서 실질적인 결과를 만드는 개발자가 되고자 합니다.',
  trainings: [
    {
      name: '클라우드활용 자바 풀스택개발자',
      org: '경영기술개발원교육센터',
      period: '2025.04 ~ 2025.11',
      status: '수료',
    },
    {
      name: 'Open AI를 엔지니어링 활용한 적응형 · 백엔드 프론티어 양성과정',
      org: '대구대학교 산학협력단',
      period: '2024.09 ~ 2025.02',
      status: '수료',
    },
  ],
  skills: [
    {
      label: 'Backend',
      items: ['Java', 'Spring', 'Spring MVC', 'MyBatis', 'Servlet/JSP', 'JDBC'],
    },
    {
      label: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'Thymeleaf'],
    },
    {
      label: 'Database',
      items: ['MySQL'],
    },
    {
      label: 'Python',
      items: ['Python', 'Pandas', 'NumPy', 'Beautiful Soup', 'requests', 'matplotlib', 'TensorFlow'],
    },
    {
      label: 'Library / API',
      items: ['Chart.js', 'Swiper', 'Kakao Maps API'],
    },
    {
      label: 'Tools',
      items: ['Eclipse/STS', 'VS Code', 'PyCharm', 'MySQL Workbench'],
    },
  ],
  learningSkills: {
    context: 'Our Trip',
    items: ['Python', 'Flask', 'MySQL', 'scikit-learn', 'Jinja2', 'Vanilla JS'],
  },
};

export const projects = [
  {
    id: 'ourtrip',
    title: 'Our Trip',
    subtitle: '단독 개발 · 전체 설계 및 구현',
    period: '2026.06 ~ 진행 중',
    type: 'solo',
    badge: '진행 중',
    summary:
      'ML 기반 For You 추천이 있는 여행 기록 커뮤니티 웹 애플리케이션입니다.',
    stack: ['Python', 'Flask', 'MySQL', 'scikit-learn', 'Jinja2', 'Vanilla JS'],
    github: 'https://github.com/Yoon975/ourtrip',
    role: [
      '서비스 기획부터 배포 가능 수준의 전체 단독 개발',
      'Flask Blueprint 기반 API·페이지 라우팅, 서비스·리포지토리 계층 분리',
      '게시글·댓글·DM·스크랩·알림 등 커뮤니티 기능 전반',
      'Random Forest 여행지 예측 + TF-IDF·협업·LTR 기반 Stage3 랭킹 파이프라인',
      'CSRF·scrypt·HttpOnly 세션 등 보안 처리, 관리자 대시보드·모델 학습 UI',
    ],
    features: [
      '게시글 CRUD·다중 이미지, 댓글/대댓글, 스크랩',
      'DM, 알림, 프로필·Travel Log',
      'For You 개인화 추천, 제목·국가·도시 검색',
      '비밀번호·이메일 변경, 회원 탈퇴',
      '관리자 회원/콘텐츠 관리, 추천 모델 학습',
    ],
    metrics: [
      { label: 'RF Top-3 Accuracy', value: '46.2%' },
      { label: 'Stage3 국가 Hit@3', value: '32.5%' },
      { label: 'RF-only 대비 개선', value: '약 2.2배 (15.0% → 32.5%)' },
    ],
    thumbSrc: '/yoon-pf/assets/images/ourtrip/01-for-you.png',
    heroSrc: '/yoon-pf/assets/images/ourtrip/01-for-you.png',
    gallery: [
      {
        slot: 'screenshot-1',
        caption: 'For You · 3단계 추천 및 추천 이유',
        src: '/yoon-pf/assets/images/ourtrip/01-for-you.png',
      },
      {
        slot: 'screenshot-2',
        caption: '게시글 상세 · 댓글/대댓글',
        src: '/yoon-pf/assets/images/ourtrip/02-comments.png',
      },
      {
        slot: 'screenshot-3',
        caption: '관리자 · Random Forest 모델 학습',
        src: '/yoon-pf/assets/images/ourtrip/03-admin-model.png',
      },
      {
        slot: 'screenshot-4',
        caption: '추천 모델 오프라인 평가 지표',
        src: '/yoon-pf/assets/images/ourtrip/04-evaluate-metrics.png',
      },
    ],
  },
  {
    id: 'photomania',
    title: 'PhotoMania',
    subtitle: '담당: 컨트롤러 · 게시판 · 댓글/대댓글',
    period: '2025.01 ~ 2025.02',
    type: 'team',
    badge: '팀 3인',
    summary:
      '사용자가 사진을 업로드·공유하고, AI로 이미지를 생성할 수 있는 Spring Boot 커뮤니티입니다.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'Thymeleaf', 'MySQL'],
    github: 'https://github.com/Kimminu7/OpenAI-Project',
    role: [
      '페이지 전반의 Controller 계층 구현',
      '게시판 — 목록·상세·작성·수정·삭제, 이미지 업로드, 좋아요',
      '댓글·대댓글 — 작성·수정·삭제, 계층형 댓글 구조',
    ],
    features: [
      '사진 업로드·공유, 탐색·다운로드',
      '이메일·비밀번호 기반 회원 인증',
      'AI 이미지 무작위 생성',
      '게시물 좋아요, 댓글·답글',
    ],
    metrics: null,
    thumbSrc:
      'https://github.com/user-attachments/assets/cd422907-13f0-44e4-aa40-786b49b23129',
    heroSrc:
      'https://github.com/user-attachments/assets/428b5ffe-ac44-4020-abd3-52142f7b90a2',
    gallery: [
      {
        slot: 'screenshot-1',
        caption: '게시판 목록',
        src: 'https://github.com/user-attachments/assets/cd422907-13f0-44e4-aa40-786b49b23129',
      },
      {
        slot: 'screenshot-2',
        caption: '게시글 상세 · 댓글/대댓글',
        src: 'https://github.com/user-attachments/assets/428b5ffe-ac44-4020-abd3-52142f7b90a2',
      },
      {
        slot: 'screenshot-3',
        caption: '게시물 작성',
        src: 'https://github.com/user-attachments/assets/21705158-b0d3-4ccd-b914-f8deb0e5233d',
      },
      {
        slot: 'screenshot-4',
        caption: '게시물 수정',
        src: 'https://github.com/user-attachments/assets/2d3434ef-3a40-4484-b0ad-1e497cee7396',
      },
    ],
  },
  {
    id: 'sweetpotato',
    title: 'SweetPotato (호박고구마켓)',
    subtitle: '담당: DB 설계 · 리뷰 · 거래 · Controller · CSS',
    period: '2025.08 ~ 2025.09',
    type: 'team',
    badge: '팀 8인',
    summary:
      '지역·판매 종류·가격으로 검색하고, 만나서 거래·택배 등 방식을 선택해 중고 물품을 거래하는 웹사이트입니다.',
    stack: ['Java', 'Servlet MVC', 'JSP', 'JSTL', 'MySQL', 'Tomcat', 'Swiper'],
    github: 'https://github.com/Yoon975/sweetPotato',
    role: [
      'DB 기본 구조 설계 (회원·상품·거래·리뷰 등)',
      '리뷰 전반 — 작성·수정·삭제, 판매자별 리뷰 전체 출력, 상품 상세 페이지 리뷰 연동',
      '거래(판매) 시 팝업 및 거래 플로우, 서비스 로직 구현',
      'Controller 세션 비교 기반 권한 처리',
      '마이페이지 출력 데이터 처리',
      'Swiper 등 외부 라이브러리 연동, CSS 작업',
    ],
    features: [
      '지역·판매 종류(나눔·예약 등)·가격 기반 상품 검색',
      '만나서 거래 / 택배 등 거래 방식 선택',
      '상품 등록·수정·찜, 상품 상세',
      '판매자 리뷰 작성·조회',
      '회원가입/로그인, 마이페이지',
      '문의·공지',
    ],
    metrics: null,
    gallery: [
      { slot: 'screenshot-1', caption: '상품 목록 · 검색' },
      { slot: 'screenshot-2', caption: '상품 상세 · 리뷰' },
      { slot: 'screenshot-3', caption: '리뷰 작성 · 판매자 리뷰' },
      { slot: 'screenshot-4', caption: '거래 팝업 · 마이페이지' },
    ],
  },
  {
    id: 'touring',
    title: 'Touring',
    subtitle: '담당: 예약 · 데이터 수집 · Kakao 지도',
    period: '2025.10 ~ 2025.11',
    type: 'team',
    badge: '팀 프로젝트',
    summary:
      '공공데이터 API와 크롤링 관광지 데이터를 활용한 숙소 검색·예약·관광지 정보 플랫폼입니다.',
    stack: ['Java', 'Spring MVC', 'JSP', 'JDBC', 'MySQL', 'Kakao Maps API'],
    github: 'https://github.com/Yoon975/touring',
    role: [
      '예약 — 예약 생성·내역 조회, 종료일 기준 지난/예정 예약 분류, 리뷰 작성 여부 표시',
      '데이터 수집 — 호텔 데이터 전처리 및 MySQL 적재, 공공데이터 API 연동',
      '지도 — Kakao Maps API로 숙소 위치 마커 표시',
    ],
    features: [
      '공공데이터 기반 숙소 목록·상세·필터링',
      'BeautifulSoup 기반 관광지 크롤링·상세',
      '숙소 예약 및 예약 내역 조회',
      'Kakao 지도 숙소 위치 시각화',
      '회원가입/로그인, 마이페이지',
    ],
    metrics: null,
    gallery: [
      { slot: 'screenshot-1', caption: '숙소 목록' },
      { slot: 'screenshot-2', caption: '숙소 상세 · 지도' },
      { slot: 'screenshot-3', caption: '예약 내역' },
      { slot: 'screenshot-4', caption: '관광지 상세' },
    ],
  },
];

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
