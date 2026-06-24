# yoon-pf

윤영빈 풀스택 개발자 포트폴리오 (React + Vite)

## 로컬 실행

```bash
npm install
npm run dev
```

## GitHub Pages 배포

1. GitHub에 `yoon-pf` 저장소를 생성하고 push
2. **Settings → Pages → Build and deployment**
   - Source: **GitHub Actions** (권장) 또는 **Deploy from branch**
3. Actions 사용 시: `main` push 후 workflow가 `dist`를 배포
4. 접속 URL: `https://Yoon975.github.io/yoon-pf/`

### 수동 빌드

```bash
npm run build
# dist/ 폴더 내용을 gh-pages 브랜치에 push
```

## 이미지 교체

`src/components/ImageSlot.jsx`의 `imageSrc` prop을 사용하거나,  
`public/assets/images/{프로젝트id}/`에 파일을 넣고 `src/data/projects.js`의 `gallery`에 경로를 추가하세요.

슬롯은 `data-slot` 속성으로 구분됩니다 (예: `screenshot-1`).

## 콘텐츠 수정

- 프로필·프로젝트 데이터: `src/data/projects.js`
- 스타일: `src/index.css`
