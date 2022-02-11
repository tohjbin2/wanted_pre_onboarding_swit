# Wanted_Pre_onboarding Assignment from [Swit]

## 3️⃣조 삼전십만가조

- [김상훈](https://github.com/Ho0on)
- [오동녘어진이](https://github.com/eojine94)
- [이나은](https://github.com/cotton-cotton)
- [홍정빈](https://github.com/tohjbin2)

## 🚀 배포 주소

[🔗 데모 링크](https://pre-onboarding-ateamventures.herokuapp.com/)


## 🥑 과제 개요

- 답장, 삭제 기능을 포함한 일반적인 메신저 구현.
- Redux, React-Redux를 활용하여 필요 상태값을 전역으로 관리.

## ✅ 과제 구현 목록

**_1) Redux로 user와 관련된 데이터 관리_**

- 로그인 페이지에서 입력한 userId, userName, profileImage 데이터를 Redux를 통해 전역 레벨에서 관리.
- 필요한 컴포넌트, 페이지에서 useSelector, useDispatch 함수 통해서 접근.

**_2) Redux로 대화 목록 데이터 관리_**

- 상수 데이터를 초기값으로 갖는 대화 목록 데이터를 Redux를 통해 전역 레벨에서 관리.
- (redux-persist 라이브러리를 통해 댓글 목록과 user data를 local storage에 넣어 새로고침해도 증발하지 않도록 하기 위해 대화 목록을 전역 레벨에서 관리했습니다.)
- (팀원 전부가 Redux 활용이 처음이라 Redux를 다양하게 활용하는 것을 도전해보고자 전역 레벨에서 관리했습니다.)

**_3) 대화 답장 기능_**

- 기존 대화에 답장하기 클릭 시, 메시지 입력창에 답장할 대화의 사용자 이름, 메시지 내용 출력.
- 출력된 데이터 뒤에 답장 내용 입력 가능하도록 구현.

**_4) 대화 삭제 기능_**

- 삭제 버튼 클릭 시, 삭제 확인하는 모달창 출력.
- 모달창 안에서 삭제하고자 하는 대화의 메시지 내용 최대 10글자 내외로 노출되도록 설정.
- 모달창 안에서 삭제 버튼 클릭 시 대화 목록 상에서 삭제하고자 했던 대화 삭제.

  <br>

## 💻 설치 및 시작하는 법

1. 파일 클론 받기

```
git clone https://github.com/cotton-cotton/wanted_pre_onboarding_swit
```

2. 패키지 설치

```
npm install
```

3. 실행

```
npm start
```
