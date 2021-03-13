## 사용한 extension

- prettier
- eslint
- path intellisense
- bracket pair colorizer

## 특징

타입스크립트는 js를 기반으로 한 언어이기 때문에 자바스크립트에서 유효한 코드는 타입스크립트에서도 유효하다

> .ts로 작성하더라도 js 코드가 틀리지 않다면 실행에 문제가 없다.

## 사용법

1. .ts 로 작성한 파일을 터미널에

```
tsc app.ts
```

와 같은 형태로 입력

2. 변환된 app.js 파일 생성

3. 기존 app.ts 에서 오류 해결하기

```
tsc --init
```

명령어를 통해 tsconfig.json 파일을 생성

### ts 파일 업데이트

1. app.ts 파일을 변경할 경우, app.js에서도 업데이트 된 형태로 바꾸고 싶을 때

```js
tsc -w; // -w 는 watch의 의미

또는

tsc -w app.ts // 해당 파일
```

2. 해당 명령어를 사용하면 터미널을 종료하지 않는 동안에는 변경된 .ts 파일을 자동으로 .js로 컴파일해준다.
