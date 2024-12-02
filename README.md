# **아트가이드런 사용자 퍼블리싱**

## **프로젝트 환경**

| 퍼블 페이지  | https://metamonster-dev.github.io/agr-publishing/ |
| ------------ | ------------------------------------------------- |
| 문서 및 버전 | HTML5, SCSS                                       |
| 인코딩       | UTF-8                                             |
| 웹유형       | 반응형 웹                                         |
| 디자인       | width 360 모바일 형태                             |
| 퍼블리싱     | max-width 480 모바일 화면 고정 형태               |

## **폴더/파일**

| 폴더     | 서브 폴더 | 파일명          | 설명                    |
| -------- | --------- | --------------- | ----------------------- |
| /        |           | link.html       | 퍼블 페이지 목록        |
| /        |           | index.html      | 메인 페이지             |
| /assets  | /images   |                 | 이미지 파일 경로        |
| /assets/ | /css      |                 | css 파일 경로           |
| /assets/ | /scss     |                 | scss 파일 경로          |
| /js      |           |                 | js 파일 경로            |
| /include |           | header.html     | 공통 Header 영역        |
| /include |           | footer.html     | 공통 Footer 영역        |
| /include |           | bottom_nav.html | 공통 바텀 버튼 영역     |
| /include |           | floating.html   | 공통 Floating 버튼 영역 |
| /include |           | popup.html      | 공통 Popup 영역         |

※ 돋보기 기능 때문에 font-size 들 rem 으로 잡혀있어요.

<br/>
<hr/>
<br/>

## **퍼블리싱 고려사항**

- 웹접근성
- 스크린리더 최적화
- 돋보기 기능 (플로팅 버튼)
- 색상 대비모드 (디자인)

### **[ 웹접근성 확인 프로그램 및 사이트 ]**

- [Chrome_OpenWAX](https://chromewebstore.google.com/detail/openwax/bfahpbmaknaeohgdklfbobogpdngngoe?hl=ko)
- [Chrome_Screen Reader](https://chromewebstore.google.com/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=ko)
- [W3C MarkUp 검사기](https://validator.w3.org/)
- [W3C CSS 검사기](https://jigsaw.w3.org/css-validator/)

### **[ Tab 이동 ]**

- 콘텐츠 읽히는 순서대로 정상 이동
- 본문 바로가기 버튼 정상 이동
- header => 상단 탭 => 플로팅 버튼 => 바텀 고정 메뉴 => 콘텐츠 영역 순서로 정상 이동
- 모달/팝업/툴팁창 열릴 때 focus 가 창 내부에서 정상 이동
- 모달/팝업/툴팁창 닫힐 때 focus 가 창 열 때 접근했던 버튼으로 정상 이동
