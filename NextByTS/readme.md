# 🔥 넥스트 프레임워크에 타입스크립트 적용하기

## 🔥 들어가기 앞서

- SPA의 SSR, SEO와 관련된 문제를 해결하기 위해 Next.js를 많은 기업에서 사용하는 추세입니다
- 앞서 배웠던 React by Ts를 통해 typescript의 정적 타이핑에 대해서 어느정도 숙지한 상태에서 보는 것을 추천합니다!

## 🔥 Next 를 쓰는 이유

### 사전 렌더링 및 서버 사이드 렌더링

### Hot Code Reloading을 지원

Next 개발 환경에서는 코드 변경 사항이 저장되면 응용 프로그램을 자동으로 다시 로드합니다.

### 자동 코드 분할

자동 코드 분할 기능 덕분에 코드의 모든 가져오기각 번들로 묶여 각 페이지와 함께 제공됩니다. 결과적으로, 불필요한 코드가 페이지에 로드되지 않게 됩니다.

### 설정이 필요없음

넥스트는 기본적으로 웹팩과 바벨을 사용하고 있습니다. 이미 서버 사이드 렌더링 및 개발에 필요한 설정이 되어 있으므로 빠르게 개발을 시작할 수 있습니다.

사용하고 싶은 플러그인이 있다면 손쉽게 추가하여 사용할 수 있도록 지원을 하고 있습니다.

### 타입스크립트가 내장됨

### 파일기반 내비게이션 기능

리액트에서는 라우트를 위해서 'react-router'라는 라이브러리를 사용하여 라우팅 설정을 해주어야 합니다.

그로 인해 ㅔㅍ이지의 경로에 대하여 직접 설정을 해주어야 하였습니다.

하지만 넥스트는 파일 시스템 기반 라우팅을 사용합니다.

폴더의 경로에 따라 페이지의 경로가 설정되어 구축이 빠르고 관리가 편리하다는 장점이 있습니다.

### styled-jsx 지원

## 🔥 초기화하기

- next 프레임워크를 사용하는 방법은 크게 두가지입니다

① CRA 처럼 사용가능한 CNA(create-next-app) 명령어를 통해 초기화

```
$ npx create-next-app 프로젝트명
```

② 직접 init 하기

```
mkdir 프로젝트명

cd 프로젝트명

npm init -y 를 통해 package.json 직접 초기화
```

## 🔥 eslint/ prettier 설정하기

```
$ eslint --init
```

해당 명령어를 통해 우리가 필요한 상황에 맞춰 eslint를 설정해줄 수 있습니다.

흔히 사용되는 초기화 과정은 다음과 같습니다.

```
leejunhee@JunHees-MacBook next-app % eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JavaScript
```

개발에 필요한 eslint rules를 .eslintrc.js 모듈에 추가할 수 있습니다.

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "single"], // 싱글 쿼터 사용
    "no-unused-vars": "off", // 사용안한 변수 경고 중복
    "jsx-a11y/control-has-associated-label": "off", // 상호작용하는 엘리먼트에 label을 넣는다
    "react/no-array-index-key": "off", // key값으로 index를 사용할수 있다.
    "comma-dangle": "off", // 마지막에 , 을 넣어주지 않는다.
    "arrow-body-style": "off", // 화살표 함수 안에 return을 사용 할 수 있다.
    "react/no-unescaped-entities": "off", // 문자열 내에서 " ' > } 허용
    "react/prop-types": "off", // proptypes를 사용하지 않는다.
    "object-curly-newline": "off", // { 다음 줄 바꿈을 강제로 사용하지 않는다.
    "react/jsx-one-expression-per-line": "off", // 한라인에 여러개의 JSX를 사용 할 수 있다.
    "implicit-arrow-linebreak": "off", // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다.
    "no-shadow": "off", // 파일 내에서 중복 이름을 사용 할 수 있다.
    "operator-linebreak": "off", // 연산자 다음 줄 바꿈을 사용 할 수 있다.
    "react/react-in-jsx-scope": "off", // jsx를 사용하여도 React를 꼭 import 하지 않아도 된다.
    "react/jsx-props-no-spreading": "off", // props를 스프래드 할 수 있다.
    "jsx-a11y/anchor-is-valid": "off", // next js에서는 a에 href없이 사용
    "global-require": "off", // 함수 내에서 require 사용가능
    "jsx-a11y/label-has-associated-control": "off", // label은 항상 control이 없어도 된다.
    "react/jsx-curly-newline": "off", // 새 라인에 {} 사용 가능하다.
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx"] }, // jsx사용가능한 확장자 설정
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      }, // import 시 확장자명은 사용하지 않는다.
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
};
```

## 🔥 라우팅 적용하기

Next 프레임워크를 사용시에는 파일기반의 네비게이션 구조를 갖추기 때문에 따로 react-router 설정을 해 줄 필요가 없습니다.

pages 폴더 내에 Next.js에서 제공하는 Link 컴포넌트를 통해 해당 구조에 맞춰 작성하면 라우팅이 가능합니다

```js
import Link from "next/link";
```

```js
<Link href="/tomato">
  <a>Move to '/tomato'</a>
</Link>
```

### 동적(다이나믹) 라우팅 적용하기

pages 폴더 내부에 동적으로 라우팅할 폴더를 생성하고 우리가 받고자하는 쿼리 명으로 이름을 지어보겠습니다.

```
📁 vegetable
  - [name].jsx
```

우리는 next/router 가 제공하는 useRouter를 통해 다이나믹 라우팅을 구현할 수 있습니다.

router 객체의 속성 중 query 속성 안에 들어있는 프로퍼티를 통해 동적 라우팅이 가능해집니다.

router.query.xxx는 우리가 동적 라우팅을 위해 생성한 폴더 내부의 파일 `[ ]` 안에 들어있는 이름과 같아야 합니다

```js
📁 index.jsx
...

<Link href="/vegetable/potato">
  <a>Move to '/vegetable/potato'</a>
</Link>
```

```js
📁 vegetables/[name].jsx

const name = () => {
  const router = useRouter();
  const { name } = router.query;

  // router.query 안에 들어있는 객체는 우리가 다이나믹 라우팅 시에 지정해준 [name].jsx 의 name으로 나오게 된다
  return (
    <div>
      <h2>Hello! {name}</h2>
      <Link href="/">Move to '/'</Link>
    </div>
  );
};

export default name;

```

만약 `[id]`.jsx 로 설정해두었다면 router.query 내부에는 name이 아닌 id가 들어있을 것입니다

```
const name = router.query.name

const id = router.query.id
```

### 라우터 객체를 이용하여 동적(다이나믹) 라우팅 적용하기

링크 태그를 사용하지 않더라도 우리는 기본적으로 Next 프레임워크에서 제공되는 라우팅 기능을 통해 동적으로 라우팅을 할 수 있습니다.

앞서 다뤘던 다이나믹 라우팅과 같이 useRouter 모듈에서 제공하는 기능을 사용합니다

```js
import React, { useState } from "react";
import { useRouter } from "next/router";

const index = () => {
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <div>
      <h2>라우터 객체를 이용하여 라우팅 하기</h2>
      <div>
        <button type="button" onClick={() => router.push("/tomato")}>
          tomato로 가기
        </button>
        <p>이름</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "12px" }}
        />
        <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
          {name}으로 가기
        </button>
      </div>
    </div>
  );
};

export default index;
```

<img src="./images/1.gif" alt="객체로 라우팅">

해당 정보를 받아줄 수 있는 동적인 페이지가 존재한다면 위처럼 내가 입력하는 e.target.value를 바탕으로 한 동적인 페이지를 생성할 수 있습니다
