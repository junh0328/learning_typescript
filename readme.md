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

<hr/>

## 타입 추론(Type Inference)

```js
let a = 5;
```

a = 5라고 지정한 해당 변수의 타입을 string으로 바꿔보려고 한다.<br/>

```js
let a = 5;
a = '타입스크립트';
```

<br/>

다음과 같은 오류가 발생한다. <br/>

<img src = "./image/tc1.png" alt="tc1"> <br/>

ts는 변수 값이 기존 숫자타입(5)에서 다른 타입인 문자열('타입스크립트')로 바꿀 수 없기 때문에 변수를 재할당할 수 없다는 의미이다. <br/>
ts의 특징인 <b>타입 추론</b>에 의해 변수 a의 타입은 자동으로 number 타입으로 지정된 것이다.<br/>
또한 타입스크립트는 기존의 코드를 바탕으로 넘겨받는 파라미터의 타입을 자동으로 추론해주는 기능을 가지고 있다.<br/>

<img src = "./image/tc2.png" alt="tc2"> <br/>

```ts
// 해당 코드를 ts로 바꾼 형태

let student = {
  name: 'Jake',
  cours: 'Getting Started with TypeScript',
  codingIQ: 80,
  code: function () {
    console.log('brain is working hard');
  },
};

function carculateCodinIQ(lostPoints: any) {
  return 100 - lostPoints;
}

/*
lostPoints는 return 되는 100 - lostPoints에 의해 자동적으로 number 타입이라는 것이 추론 가능하다.
*/
```

<hr/>

## 타입 명시

<p>타입 명시란 변수를 선언할 때, 변수 값의 타입을 명시함으로써 변수 값의 데이터 타입을 지정하는 것을 의미합니다. 또한 ts에서는 function 함수를 통해 return 되는 반환 값에도 타입을 지정해 줄 수 있습니다.</p>

```ts
let studentID: number = 12345;
let studentName: string = 'Jenny Kim';
let age: number = 21;
let gender: string = 'female';
let subject: string = 'JavaScript';
let courseCompleted: boolean = false;

function getStudentDetails(studentID: number): any {
  return;
}
```

<p>우리가 만든 getStudentDetails()함수가 반환 값으로 오브젝트타입을 받기 위해서는 해당 프로퍼티를 일일히 나열하여 적어줄 수 있습니다.</p>

```ts
function getStudentDetails(
  studentID: number
): {
  studentID: number;
  studentName: string;
  age: number;
  gender: string;
  subject: string;
  courseCompleted: Date;
} {
  return null;
}
```
