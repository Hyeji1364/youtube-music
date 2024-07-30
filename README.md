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

각 사이트의 차트 Top100을 볼 수 있습니다.

---

![image](https://github.com/user-attachments/assets/49091cba-27e4-4b75-896c-64d14ff90222)

클릭시, 해당하는 차트의 현재 날짜인 Top100이 뜹니다.
날짜를 클릭하면 해당 날짜의 차트를 보도록 기능을 구현하였습니다.

---

<br>

![image](https://github.com/user-attachments/assets/bcef3812-8546-40c9-a551-319553641afe)


## 🍳 각 차트 클릭시
![image](https://github.com/user-attachments/assets/d40762ca-1625-4f6c-99cd-5e527736a190)

<br>
각 차트의 제목 클릭시 클릭한 차트의 유튜브 검색결과를 확인할 수 있습니다.

<br>

### 1. 첫번째 Play 아이콘 클릭
![image](https://github.com/user-attachments/assets/324ff79f-5e80-4007-9710-f29818b7aa49)

오른쪽 Now Playing에 해당 음악의 결과가 플레이 됩니다.

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

### 💛 REACT 초기 세팅

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
