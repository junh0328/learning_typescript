## 👉🏼 참고자료

이 글을 '땅콩코딩'님의 타입스크립트 강의를 바탕으로 작성된 글입니다.<br/>
<a href="https://www.youtube.com/channel/UCQrIKpEc3FFO1KJ5zkoIcYA" taget="_blank">타입스크립트 강의 바로가기</a>

## 👉🏼 사용한 extension

- prettier
- eslint
- path intellisense
- bracket pair colorizer

## 👉🏼 특징

타입스크립트는 js를 기반으로 한 언어이기 때문에 자바스크립트에서 유효한 코드는 타입스크립트에서도 유효하다

> .ts로 작성하더라도 js 코드가 틀리지 않다면 실행에 문제가 없다.

## 👉🏼 사용법

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

## 👉🏼 타입 추론(Type Inference)

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

## 👉🏼 타입 명시

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

## 👉🏼 인터페이스로 객체 구조 정의하기

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

## 👉🏼 열거형(Enum)과 리터럴 타입

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

<hr/>

## 👉🏼 Any, Union Type, Type Aliases & Type Guards

### any 
any 타입은 어떤 타입을 적어도 값을 할당할 수 있는 타입입니다.<br/>

```ts
let someValue: any = 5;
someValue = 'hello';
someValue = true;
```
<br/>
이와 같이 someValue 변수에 타입을 any로 준다면, 기존 number > string > boolean 으로 타입변환이 자유롭게 가능해집니다.<br/>
하지만, ts에서 효과적인 유지와 보수를 위해서는 타입에 관한 더많은 정보를 명시할 수록 더 좋겠죠?<br/>

### union

만약 작업중인 코드에 타입 명시가 어려운 경우, 그 중에서 제한된 타입만 설정해주기 위해서는 어떻게 해야할까요?<br/>
바로 <b>union 타입</b>이라는 테크닉을 통해 적어줄 수 있습니다. 특별한 기능이 아닌 `|`를 통해 리터럴 형태로 나타내 주는 것입니다. <br/>

```ts
let someValue: number | string = 5;
someValue = 'hello';

someValue = true;  // 타입은 number 와 string으로 제한했으므로 boolean 타입을 쓴다면 에러가 납니다.

>>>
Type 'boolean' is not assignable to type 'string | number'.
```

### Type Aliases

union 타입으로 타입을 지정해주는 것도 좋지만, 코드가 길어질 경우 코드의 재사용성 높이기 위해 <b>Type Aliases</b> 테크닉을 사용합니다.
<br/>

```ts
type StrOrNum = number | string;

let price: StrOrNum = 5;
price = 'free';
```
<br/>
string 타입과 number 타입을 유니언타입으로 사용하고 싶을 때, StrOrNum 이라는 Type Aliases를 생성하여 타입자리에 대신 사용할 수 있습니다.

### 타입 가드

```ts
type StrOrNum = number | string;
let itemPrice : number;

const setItemPrice = (price: StrOrNum):void =>{
  itemPrice = price;
}

setItemPrice(50);

/*
type.ts:18:3 - error TS2322: Type 'StrOrNum' is not assignable to type 'number'.
  Type 'string' is not assignable to type 'number'.
*/
```
<p>우리는 type aliases를 통해 StrOrNum 이라는 number, string 타입을 사용할 수 있는 타입을 선언해줬습니다. 하지만 함수내부에서 한가지 타입만 받는 경우의 변수가 같이 존재한다면 어떻게 해야 할까요? 위와 같은 상황에서 우리는 타입을 보호할 수 있는 타입 가드를 사용합니다.</p>

```ts
type StrOrNum = number | string;
...

const setItemPrice = (price: StrOrNum):void =>{
  if(typeof price === 'string'){
    itemPrice = 0;
  }else{
  itemPrice = price;
}
}

setItemPrice(50);
```

<p>typeof 연산자를 사용하여 price 값이 number 일 때만 해당 코드가 작동하도록 합니다. 이를 타입 가드라고 합니다.</p>

<hr/>

## 👉🏼 함수 타이핑, 선택적 매개 변수와 기본 매개 변수

이번에는 함수에 타입을 정의해주는 것을 배워보도록 하겠습니다. <br/>

```js
function sendGreeting(message, userName){
  console.log(`${message}, ${userName}`)
}

sendGreeting('Hello', 'Mark');
```

<br/>
기본적으로 함수 선언식을 통해 매개변수를 받아 해당 매개변수를 출력하는 구조의 함수를 만들었고, 밑에서 파라미터(매개변수를) 넣어 함수를 호출하는 구조입니다.

### 함수의 타입 명시

타입스크립트에서 함수를 작성하기 위해서는 두 가지 작업이 필요합니다
1. 함수의 반환 (return) 타입
2. 함수의 매개변수(parameter) 타입

ts 에서는 이 두 타입을 반드시 명시해주어야 합니다.

### 함수의 반환 타입 명시

```ts
function 함수이름(매개변수1, 매개변수2): 함수의 반환 타입{
  ...
}
```
<br/>
위의 코드와 같이 ts에서는 매개변수를 표시하는 소괄호 '()' 뒤에 ': 함수의 반환 타입'을 명시해주어야 합니다.

```ts
function sendGreeting(message, userName): void{
  console.log(`${message}, ${userName}`)
}

sendGreeting('Hello', 'Mark');
```

<br/>
위의 함수와 같이 반환되는(return) 값이 아무 것도 반환하지 않을 경우 :void, 를 통해 아무 것도 반환하지 않는다는 것을 적어줍니다.

> <b>void</b> 타입은 함수의 반환 타입으로만 작성할 수 있습니다.

```ts
case 1: string 타입 반환

function sendGreeting(message, userName): string{
  return 'Hello, Mark';
}

/*
다음과 같이 함수에 호출되어 반환되는(return) 값이 string 타입이라면 :string으로 타입을 적어줘야 합니다.
*/
```

```ts
case 2: 배열 타입 반환

function sendGreeting(message, userName): string[]{
  return ['Hello', 'Mark'];

/*
다음과 같이 함수에 호출되어 반환되는(return) 값이 string의 배열 타입이라면 :string[]으로 타입을 적어줘야 합니다.
*/
```

### 함수의 매개변수 타입 명시

```ts
function sendGreeting(message : string, userName: string): void{
  console.log(`${message}, ${userName}`)
}

sendGreeting('Hello', 'Mark');
```

<p>추가적으로 함수의 반환 타입과 더불어 매개변수(파라미터)의 타입 또한 적어주었습니다.</p>

만약 반환 시에 매개변수 하나만 (Hello) 보내준다면 어떻게 될까요?

```ts
function sendGreeting(message : string, userName: string): void{
  console.log(`${message}, ${userName}`)
}

sendGreeting('Hello');  // 함수에서 매개변수를 2개를 받는다고 했지만, 호출 시에 넣어준 매개변수가 한 개인 경우

>>>
/*
  function.ts:1:41
    1 function sendGreeting(message : string, userName: string): void{
    An argument for 'userName' was not provided.
*/
```

<p>이러한 오류 메세지가 나오는 이유는 타입스크립트에서는 함수에 정의된 모든 매개 변수가 함수에 필요하다고 가정하기 때문입니다. </p>

```ts
function sendGreeting(param1, param2):void{

}

sendGreeting(arg1, arg2);
```

<p>ts에서는 함수에 정의된 파라미터들과 함수를 호출할 때 보내주는 arguments들을 모두 비교 검사하기 때문에 두 수가 일치해야 합니다. 만일 매개 변수를 선택적으로 받고 싶다면, 이전 인터페이스 시간에 배웠던 <b>선택적 매개변수</b>를 사용해야 합니다. </p>

```ts
function sendGreeting(message : string, userName?: string): void{
  console.log(`${message}, ${userName}`)
}

sendGreeting('Hello');
```

<p>파라미터 속성 뒤에 `?`를 붙이면 선택적 매개변수로 만들어줄 수 있습니다. 여기서 중요한 점은 여러 개의 파라미터를 받을 때 선택적 매개변수를 사용한다면, 해당 매개변수를 가장 뒤에 위치시켜야 한다는 것입니다. 만일 선택적 매개변수로 채택한 매개변수가 중간에 위치한다면 그 뒤에 있는 매개변수들까지 모두 선택적 매개변수로 인식되게 됩니다.</p>

```ts
case 2 : 잘못된 사용

function 함수이름(param1:string, param2?:number, param3: string, ...): void{

}



/*
param2 뒤에 있는 매개변수는 모두 선택적 매개변수로 인식되기 때문에 선택적 매개변수는 반드시 맨 뒤에 붙여줘야 합니다.
*/
case 2 : 올바른 사용

function 함수이름(param1:string, param2:number, param3?: string): void{

}
```

### default 매개변수

지금 까지 만든 ts 파일을 컴파일하여 js 파일을 실행하면 `Hello, undefined` 가 출력됩니다.<br/>
arguments로 필요한 파라미터를 모두 보내주지 않았기 때문입니다. 만약 undefined 대신 우리가 정한 값이 출력되도록 만들기 위해서는 어떻게 해야 할까요? <br/>
<b>default 매개변수</b>를 사용하여 undefined 시에 출력될 값을 정해줄 수 있습니다.

```ts
case 1 : 일부 매개변수에 default 매개변수 선언
function sendGreeting(message : string, userName = 'there'): void{
  console.log(`${message}, ${userName}`)
}

sendGreeting('Hello');

/*
기존에 userName 매개변수에 지정한 타입을 지워주고 default 매개변수로 'there'를 주었습니다.
이를 js 환경에서 실행하면 다음과 같습니다.
*/

>>>
Hello, there
```

```ts
case 2 : 모든 매개변수에 default 매개변수 선언
function sendGreeting(message ='Hello', userName = 'there'): void{
  console.log(`${message}, ${userName}`)
}

sendGreeting();
sendGreeting('Good moring');
sendGreeting('Good afternoon', 'Jenny');

>>>
Hello, there
Good moring, there
Good afternoon, Jenny
```

### arrow function으로 변환

```ts
case 1: 기존 코드
function sendGreeting(message ='Hello', userName = 'there'): void{
  console.log(`${message}, ${userName}`)
}

...

case 2: 변환된 코드
const sendGreeting = (message ='Hello', userName = 'there'): void => console.log(`${message}, ${userName}`);

/*
화살표 함수를 통해 더 간결한 표현이 가능합니다.
*/
```

<hr/>

## 👉🏼 객체 지향 프로그래밍, 클래스와 오브젝트 관계 파헤치기

객체 지향 프로그래밍에서 클래스와 오브젝트(객체)는 뗄래야 뗄 수 없는 관계에 있습니다.<br/>
객체는 클래스(class)를 통해서 만들어 질 수 있고, 클래스는 객체가 어떤 모습을 가질 지를 정의하고, 묘사하기 때문입니다.


|Dog class|
|:-:|
|속성(프로퍼티)|
|Breed|
|Size|
|Age|
|Color|
| - |
|행동(함수)|
| Eat( ) |
| Sleep( ) |
| Sit( ) |
| Run( ) |

### 기본 구조

```ts
let fullName: string;
let perAge: number;
let jobTitle: string;
let hourlyRate: number;
let workingHoursPerWeek: number;

let printEmployeeDetails = (fullName:string, jobTitle:string, hourlyRate:number, workingHoursPerWeek:number):void =>{
  console.log(`${fullName}의 직업은 ${jobTitle}이고 일주일의 수입은 ${hourlyRate*workingHoursPerWeek} 달러 입니다.`)
}
```
<p>위의 코드는 기본적인 ts 타입 선언과 타입 명시를 통한 함수 생성입니다. 이를 class 객체로 만들어 보겠습니다.</p>

```ts
class Employee{
  fullName: string;
  perAge: number;
  jobTitle: string;
  hourlyRate: number;
  workingHoursPerWeek: number;

  printEmployeeDetails = ():void =>{
    console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 입니다.`)
  }
}

```

<p>클래스 속에서 정의된 함수들은 클래스 내 정의된 변수들에게 바로 접근이 가능하기 때문에 결과적으로 그렇지 않은 함수들보다 상대적으로 적은 매개변수를 가집니다.</p>

<p>위와 같이 클래스 내에 정의된 변수를 '프로퍼티' 라고 하며, 클래스 내에 정의된 함수를 '메소드' 라고 부릅니다.</p>

<p>OOP에서 클래스는 객체를 만들어 내기 위한 설계도, 생산틀로 보시면 됩니다. 이제 생성자를 통해 객체를 만들어 위의 메소드와 프로퍼티를 사용해보겠습니다.</p>

```ts
class Employee {
  fullName: string; 
  perAge: number;
  jobTitle: string; 
  hourlyRate: number; 
  workingHoursPerWeek: number; 

  printEmployeeDetails = ():void =>{
    console.log(`${this.fullName}의 직업은 ${this.jobTitle}이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 입니다.`)
  }
}

let employee1 = new Employee();

employee1.printEmployeeDetails();

>>>
undefined의 직업은 undefined이고 일주일의 수입은 NaN 달러 입니다.

```

<p>Employee 클래스에 각 프로퍼티에 대한 키는 설정했지만 값을 설정하지 않아, 인스턴스 employee1을 만들어 메소드를 호출하여도, 원하는 결과값이 나오지 않았습니다. 클래스는 하나의 붕어빵틀과 같은 큰 틀이기 때문에, 생성자를 만들면서 employee1 인스턴스에 프로퍼티를 설정해주어야 합니다.</p>

```ts
...
let employee1 = new Employee();
employee1.fullName = '준모';
employee1.jobTitle = '주니어 웹 개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails();

>>>
준모의 직업은 주니어 웹 개발자이고 일주일의 수입은 1400 달러 입니다.
```

<p>각 프로퍼티에 value를 선언해주었더니, 원하는 값을 얻을 수 있었습니다. 이 처럼 우리는 class 와 오브젝트의 관계를 가지는 객체지향 프로그래밍으로 더 효과적이고 가벼운 프로그래밍을 할 수 있습니다.</p>

<hr/>