# 👊🏼 redux-thunk 타입스크립트에 적용하기 👊🏼 

## 👊🏼 0. index.tsx 에 thunk 미들웨어 설치 및 연동하기 (페이지네이션 하기)

<p>src/index.js</p>

## 👊🏼 1. API 불러오기

<p>src/api/github.ts</p>

## 👊🏼 2. 리덕스 모듈 만들기

### 🎯 2.1 액션 정의하기

<p>src/modules/github/actions.ts</p>

### 🎯 2.2 thunk 함수 작성하기

<p>modules/github/thunks.ts</p>

### 🎯 2.3 리듀서 작성하기

<p>src/modules/github/types.ts</p>
<p>src/modules/github/reducer.ts</p>

### 🎯 2.4 root reducer에 등록하기

<p>src/modules/github/index.ts</p>
<p>src/modules/index.ts</p>

## 👊🏼 3. 프레젠테이셔널 컴포넌트 (UI) 준비하기

<p>src/components/GithubUsernameForm.tsx</p>
<p>src/components/GithubProfileInfo.tsx</p>

## 👊🏼 4. 컨테이너 컴포넌트 만들기

<p>src/containers/GithubProfileLoader.tsx</p>

## 👊🏼 5. App.tsx에 연동하여 확인하기

<p>src/App.tsx</p>