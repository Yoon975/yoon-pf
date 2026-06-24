export const profile = {
  name: '윤영빈',
  role: '풀스택 개발자',
  email: 'tast3@naver.com',
  intro: null,
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
      { label: 'RF Top-3 Accuracy', value: '49.6%' },
      { label: 'Stage3 국가 Hit@3', value: '32.5%' },
      { label: 'RF-only 대비 개선', value: '약 2.9배 (11.3% → 32.5%)' },
    ],
    gallery: [
      { slot: 'screenshot-1', caption: '메인 홈 · For You 추천' },
      { slot: 'screenshot-2', caption: '게시글 상세 · 댓글' },
      { slot: 'screenshot-3', caption: '관리자 · 모델 학습' },
      { slot: 'screenshot-4', caption: '추천 파이프라인 개요' },
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
    title: 'SweetPotato',
    subtitle: '담당: 거래 · 상품 등록 · 리뷰 · DB 설계',
    period: '2025.08 ~ 2025.09',
    type: 'team',
    badge: '팀 8인',
    summary:
      '물품 등록·검색·거래·판매자 리뷰가 가능한 중고거래 웹사이트입니다.',
    stack: ['Java', 'Servlet MVC', 'JSP', 'JSTL', 'MySQL', 'Tomcat'],
    github: 'https://github.com/Yoon975/sweetPotato',
    role: [
      'DB 스키마 설계 (회원·상품·거래·리뷰 등)',
      '상품 등록 — CRUD, 이미지 업로드, 찜 목록',
      '거래 — 거래 신청·내역·상태 처리',
      '리뷰 — 작성·수정, 판매자별 리뷰 조회',
    ],
    features: [
      '회원가입/로그인, 마이페이지',
      '상품 목록·상세·등록·수정',
      '거래 신청 및 내역 관리',
      '판매자 리뷰 작성·조회',
      '문의·공지',
    ],
    metrics: null,
    gallery: [
      { slot: 'screenshot-1', caption: '상품 목록' },
      { slot: 'screenshot-2', caption: '상품 등록' },
      { slot: 'screenshot-3', caption: '거래 내역' },
      { slot: 'screenshot-4', caption: '리뷰 작성' },
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
