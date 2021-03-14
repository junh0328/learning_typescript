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
  courseCompleted: boolean;
} {
  return null;
}
```

<hr/>

## 인터페이스로 객체 구조 정의하기

복잡해보이는 위의 구조를 인터페이스를 사용하여 분리해봅니다.

```ts
...
interface Student {
  studentID: number;
  studentName: string;
  age: number;
  gender: string;
  subject: string;
  courseCompleted: boolean;
}
// 인터페이스를 통해 복잡해질 수 있는 코드의 반환타입을 위에서 선언하고, Student 키워드만 가져와 사용한다

function getStudentDetails(studentID: number):Student
{
  return {
    studentID: 12345,
    studentName: 'Jenny Kim',
    age: 21,
    gender: 'female',
    subject: 'JavaScript',
    courseCompleted: true
  };
  // 위 코드에 리턴될 때는 인터페이스의 구조에 들어있는 프로퍼티들을 모두 가져야 한다.
}

```

<p>추가적으로, 인터페이스 타입으로 가지는 값은 인터페이스의 구조를 그 값으로 가지도록 강제됩니다. 리턴되는 프로퍼티가 인터페이스에 존재하는 프로퍼티의 수와 다를 시에는 오류가 발생합니다.</p>

> 반환값에 포함되어야만 한다는 오류

<p>만일 인터페이스의 특정 프로퍼티를 리턴문에서 사용하지 않기 위해서는 프로퍼티 키에 ? 를 붙여줘야 한다.</p>

```ts
...
interface Student {
  studentID: number;
  studentName: string;
  age?: number;     // age에 (?)를 붙임으로 return 시에 age를 생략해도 코드에 문제가 발생하지 않는다.
  gender: string;
  subject: string;
  courseCompleted: boolean;
}

function getStudentDetails(studentID: number):Student
{
  return {
    studentID: 12345,
    studentName: 'Jenny Kim',
    gender: 'female',
    subject: 'JavaScript',
    courseCompleted: true
  };
}
```

### ts 코드의 재사용

### Read Only 속성

<p>Readonly가 붙은 인터페이스의 프로퍼티는 읽기전용 프로퍼티로 객체가 생성될 때 할당된 프로퍼티 값은 그 후에 바꿀 수 없다. </p>

```ts
interface Student {
  readonly studentID: number;   // readonly 추가
  studentName: string;
  age?: number;
  gender: string;
  subject: string;
  courseCompleted: boolean;
  // addComment? (comment: string): string;
  addComment?: (comment: string) => string;
}

...

function saveStudentDetails(student: Student): void{
  student.studentID = 12131414; // readonly로 작성했기 때문에 studentID 의 값을 바꿀 수 없다는 오류 출력
}
>>>
Cannot assign to 'studentID' because it is a read-only property.

```

<p>인터페이스는 실제로 JS 코드로 변환될 때, .js 파일로 넘어가지 않는다. 타입스크립트 컴파일러가 인터페이스를 코드에서 지우기 때문이다. 즉, <b>인터페이스는 작성 중인 코드에 대한 더 많은 정보를 타입스크립트에게 제공하기 위해 존재한다는 것을 알아두어야 한다. </b></p>
<p>타입스크립트에게 더 많은 정보를 제공할 수 록 컴파일 시에 우리가 만드는 오류를 더 많이 잡아줄 수 있기 때문이다.</p>

<hr/>

## 열거형(Enum)과 리터럴 타입

프로퍼티의 값을 단순히 타입으로 지정하는 것이 아닌, 실제 값만 받고 싶을 때 우리는 열거형(enum)과 리터럴 타입을 이용하여 프로퍼티에 지정될 키 값을 미리 정해줄 수 있습니다.<br/>
이렇게 정해진 프로퍼티 키 값으로만 할당을 해줘야 오류가 나지 않고 실행될 수 있습니다.

```ts
interface Student {
  studentID: number;
  studentName: string;
  age?: number;
  gender: string;
  subject: string;
  courseCompleted: boolean;
  // addComment? (comment: string): string;
  addComment?: (comment: string) => string;
}
```

<p>우리가 만든 Student 인터페이스입니다. 만일 gender 프로퍼티의 값을 string 타입 중에서도 male 과 female로만 값을 설정할 수 있도록 하려면 어떻게 해야할까요?</p>
<p>첫 번째로는 열거형 Enum을 사용하는 방법입니다. </p>

### Enum

Enum은 연관된 아이템들을 함께 묶어서 표현할 수 있는 수단이라는 의미를 가집니다.<br/>
Enum을 적용하는 방법은 다음과 같습니다.

```ts
enum GenderType {
  Male,
  Female,
}
// enum 이라는 타입으로 GenderType 키워드를 생성해줍니다.

...

interface Student {
  studentID: number;
  studentName: string;
  age?: number;
  gender: GenderType;   // string에서 GenderType으로 변환
  subject: string;
  courseCompleted: boolean;
  // addComment? (comment: string): string;
  addComment?: (comment: string) => string;
}

// 기존 인터페이스에 gender 프로퍼티의 값을 enum으로 설정한 GenderType으로 타입을 설정해 줍니다.
```

그리고 파일을 변환하면 다음과 같은 오류가 나타납니다.<br/>
<img src = "./image/enum.png" alt="enum"> <br/>
기존에 우리가 작성한 함수에서 gender 타입으로 지정해줬던 값과 enum을 통해 GenderType 내부에 선언한 값이 다르기 때문입니다.<br/>
그렇기 때문에 함수 내에 사용한 gender 프로퍼티의 값을 재설정해줘야 합니다.

```ts
function getStudentDetails(studentID: number):Student 
{
  return {
    studentID: 12345,
    studentName: 'Jenny Kim',
    gender: GenderType.Female,      // 'female'의 string 타입에서 enum을 적용시킨 GenderType의 Female 로 값을 할당해줌
    subject: 'JavaScript',
    courseCompleted: true
  };
}
```
<br/>
성공적으로 enum을 적용해 주었습니다. 이제 컴파일된 js 파일을 확인해 볼까요?<br/>

<img width="80%" src = "./image/enumToJS.png" alt="enumToJS"> <br/>

기존 인터페이스와는 다르게 enum으로 만들어준 GenderType은 js 코드에 작성되는 것을 볼 수 있습니다. <br/>
하지만 우리는 컴파일된 js 코드에서도 0, 1, 2 등으로 인덱스처럼 number 타입으로 해당 프로퍼티 값이 정의되는 것이 아닌 string 타입으로 정의되는 것을 원합니다. <br/>
ts에서는 이러한 성질을 string enum이라는 것을 통해 적용하도록 해줍니다.

### string enum

```ts
enum GenderType {
  Male = 'male',
  Female = 'female'
}
```
<br/>
간단하게 enum의 GenderType 의 프로퍼티 값에 각각 string 타입의 value를 선언해줍니다.<br/>
이를 통해 js 파일에서도 기존의 number 형식의 인덱스값이 아닌, 문자열 값을 갖게 됩니다.<br/>
이것을 string enum이라고 합니다.

```js
case 1: 이전 코드
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));

...

case 2: 바뀐 코드
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
```

### 리터럴 타입

enum을 사용하는 것과 같은 결과물을 출력하지만 훨씬 더 간편한 선언 방법을 알아보겠습니다.

```ts
interface Student {
  studentID: number;
  studentName: string;
  age?: number;
  gender: 'male' | 'female' | 'genderNeutral';
  subject: string;
  courseCompleted: boolean;
  // addComment? (comment: string): string;
  addComment?: (comment:string) => string;
}
```
<br/>
gender 프로퍼티에 enum에서 사용한 것과 같이 genderType.xxx 로 접근하는 것이 아닌, `|` 를 사용하여 값을 직접 적어주는 방식입니다.<br/>

```ts
function getStudentDetails(studentID: number):Student 
{
  return {
    studentID: 12345,
    studentName: 'Jenny Kim',
    gender: 'female',
    subject: 'JavaScript',
    courseCompleted: true
  };
}

```
<br/>
코드에서도 gender에서 리터럴한 string 값을 선택해서 적어주면 됩니다.<br/>


<img width="80%" src = "./image/literal.png" alt="literal"> <br/>

하지만, 리터럴로 적용한다면, js로 컴파일 될 때 enum 처럼 타입이 표시되지는 않는다는 점을 알아둬야 합니다.
