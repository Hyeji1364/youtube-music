# Youtube API를 이용한 Music Chart사이트 🎵

- 유튜브 API를 이용해 다양한 음원 사이트의 순위를 한번에 확인할 수 있습니다.
- 원하는 노래를 바로 감상이 가능합니다.
- 계속 감상하고 싶은 노래는 바로 재생목록에 저장이 가능합니다.
- 내가 원하는 파일 목록을 만들고, 수정, 삭제까지 할 수 있는 사이트입니다.


# 메인 페이지 미리보기
![image](https://github.com/Hyeji1364/youtube-music/assets/161557112/493d6c0b-385c-4f45-a667-f70b46ba0f1d)


## ✨ 메인 메뉴
- 추천영상에는 관리자가 설정해놓은 검색어에 해당하는 영상을 볼 수 있습니다.<br>
- 검색어 : 'Kpop 플레이리스트'라고 설정해두었으므로, 해당하는 검색어에 따른 영상을 바로 감상 가능합니다.
![image](https://github.com/user-attachments/assets/aaf9901b-7795-4360-97c1-9de17f5fd052)


## 📈 Chart 메뉴
![image](https://github.com/user-attachments/assets/15a0e5de-c1ad-42e6-9bf9-e1fd82c03223)

<br>
- 각 사이트의 차트 Top100을 볼 수 있습니다.

![image](https://github.com/user-attachments/assets/49091cba-27e4-4b75-896c-64d14ff90222)

- 클릭시, 해당하는 차트의 현재 날짜인 Top100이 뜹니다.


<br>
![image](https://github.com/user-attachments/assets/bcef3812-8546-40c9-a551-319553641afe)

- 날짜를 클릭하면 해당 날짜에 해당하는 차트를 보도록 기능을 구현하였습니다.

## 🍳 각 차트 클릭시
![image](https://github.com/user-attachments/assets/d40762ca-1625-4f6c-99cd-5e527736a190)

<br>
각 차트를 클릭하면 클릭한 차트의 유튜브 검색결과를 확인할 수 있으며, <br>
첫번째 Play 아이콘 클릭시, 오른쪽 Now Playing에 해당 음악의 결과가 플레이 됩니다.
<br>

### ➡ 추가버튼 : Play list에 추가됩니다.
![image](https://github.com/Hyeji1364/youtube-music/assets/161557112/34aa9ca4-7ac2-4922-af45-0855363ebba4)

<br>

### ⚙ modal 버튼 : 클릭하면 모달창이 뜨고 왼쪽 플레이리스트에 추가한 목록들이 뜹니다.
여기서 '추가' 버튼을 클릭하면 각 리스트에 내가 추가한 음악을 볼 수 있도록 구현하였습니다.
![image](https://github.com/Hyeji1364/youtube-music/assets/161557112/79138b97-92a4-435d-8cdb-2071ab555509)
<br>

![image](https://github.com/Hyeji1364/youtube-music/assets/161557112/e3388390-5155-4c1d-a7b0-bd179e574c8a)
클릭하면 내가 추가한 음악이 뜹니다.

### 3. 💜 플레이 리스트 추가 / 삭제
  플레이 리스트를 클릭하면 delete버튼이 뜨고, create를 통해 Playlist를 추가할 수 있습니다.
  <br>
  ![image](https://github.com/Hyeji1364/youtube-music/assets/161557112/caf4173e-0cc2-470a-ac38-26141bf711f9)
 
<br>

1. node.js 설치 / 버전확인 : node -v
2. react 설치
3. npx create-react-app .
4. 라이브러리 설치
5. 폴더 셋팅 : 필요없는 파일 제거
6. Header 설정
7. Suspense 설정
8. 각 페이지 메타 태그 설정(Helmet)

<br>

## 자동완성 단축키

`rafce`

<br>

## 필요한 라이브러리 설치

```
npx create-react app .
npm i react-router-dom
npm i sass
npm i react-icons
npm i react-player
npm i react-spinners
npm install react-datepicker --save : 날짜별 확인
npm i react-datepicker
npm i axios
npm i react-toastify
npm i react-modal
```

```bash
npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper
```

<br>

## 용어 정리

- `axious` : Axios는 웹 브라우저나 Node.js에서 사용할 수 있는 도구로, 인터넷을 통해 서버에 정보를 요청하거나 보낼 수 있게 해주는 JavaScript 라이브러리입니다.
  즉, 웹 페이지에서 필요한 데이터를 서버로부터 불러오거나, 사용자의 입력을 서버에 전달할 때 사용할 수 있습니다. <br>
  Axios의 주요 장점은 간단하게 웹 서버와의 통신을 구현할 수 있다는 것입니다.

<br>

## 사용 스택

- node.js 설치

<br>

## 실행하기

`npm start` : 리액트 시작하기

<br>

## 트러블 슈팅에 따른 해결방법

#### 🎈 1. 컴포넌트 렌더링 문제

🔰 증상: 컴포넌트가 제대로 렌더링되지 않음 <br>

- 해결 방법
- 콘솔 에러 확인: 브라우저 콘솔에서 에러 메시지를 확인하여 문제의 원인을 파악합니다.
- JSX 구문 오류 확인: JSX 구문에 오류가 없는지 확인합니다.
- 프롭 전달 확인: 필요한 프롭이 올바르게 전달되고 있는지 확인합니다.

#### 🎈 2. 상태 관리 문제

🔰 증상: 상태(state)가 예상대로 업데이트되지 않음 <br>

- 해결 방법
- setState 비동기 처리: setState가 비동기적으로 처리된다는 점을 고려합니다.
- 함수형 업데이트 사용: 이전 상태값을 참조하여 상태를 업데이트해야 하는 경우, 함수형 업데이트를 사용합니다.

#### 🎈 3. 이벤트 핸들링 문제

🔰 증상: 이벤트 핸들러가 호출되지 않음 <br>

- 해결 방법
- 이벤트 바인딩 확인: 클래스 컴포넌트에서 이벤트 핸들러를 바인딩했는지 확인합니다.

  ```javascript
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);}
  ```

- 함수 컴포넌트 사용 시: 함수 컴포넌트에서 이벤트 핸들러를 정의하고 사용합니다.

```javascript
const handleClick = () => {
  console.log("Button clicked");
};
```

## build 실행

`npm run build`

## React

버츄얼 돔 방식 - 재활용 가능

## 깃헙 소스

`git clone`
`npm install`

- 버전 확인

## 사이트 배포

- npm run build

# Getiing Started with Create My Music App

# 설치

# 상태관리

# 순서

1.  기본 셋팅 및 설치
