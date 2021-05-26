# 📍 리액트에 타입스크립트 적용하기

## 📍 들어가기 앞서

- 현재 저는 많은 프로젝트를 .tsx 즉, 리액트 .jsx 기본 문법에 타입스크립트 문법을 적용한 형태로 진행하고 있습니다.
- 스터디를 진행하면서 만나 느낀 점은, 현업에 계시는 개발자 분들 대부분이 타입스크립트 환경을 더 즐겨 사용하셨고 타입스크립트 공부를 강조하셨습니다.<br/>
- 기존 공부를 하면서 만들어 둔 폴더인 todolist, todo-redux, using-thunk에 대해 복기하며, 실제 프로젝트에서 느낀 어려움과 해결방안에 대해 공부합니다.
- react 프로젝트 작업 시에 함수 선언식과 함수 표현식을 상황에 따라 모두 사용하게 되는데, 이때 전달되는 props 와 타입 적용 시에 느꼈던 벽을 허물고 깊게 공부할 예정입니다.

## 📍 1. todolist

```tsx

📁 src/App.tsx
...

const App: React.FC = () => {
  const onClick = (name: string) => {
    alert(`${name} say hello~`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    alert(`name : ${form.name} \ndescription : ${form.description}`);
  };
  return (
    <div>
      <Greetings name="준희" optional="옵션입니다" onClick={onClick} />
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit} />
      <hr />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </div>
  );
};

export default App;
```

> 실제 자료는 📁 ReactByTs/todolist에 들어있습니다.

- 함수 표현식을 사용하여 App 컴포넌트가 작성되었습니다.
- React.FC (Functional Component) 라는 뜻으로 함수 선언식 또는 함수 표현식으로 타이핑할 경우 해당 컴포넌트의 타입을 작성해줘야 합니다.
- onClick() 함수와 onSubmit() 함수를 props로 하여금 하위 컴포넌트인 `<Greetings onClick={onClick}>`와 `<MyForm onSubmit={onSubmit}>` 에 전달해주고 있습니다.
- Greetings 컴포넌트 먼저 보겠습니다.

> `<Greetings 전달할 프로퍼티 = {실제 함수}>` 의 형태입니다.

## 📍 1.1) Greetings.tsx

### 📍 화살표 함수를 통해 React.FC를 사용하지 않는 경우

```tsx

📁 src/Greetings.tsx
...

// props로 전달받은 프로퍼티들에 대한 타입을 지정해주었다.
type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
};


const Greetings = ({ name, optional, onClick }: GreetingsProps) => {
  /*
  상위 컴포넌트에 전달받은 프로퍼티들에게 타입 명시를 해줘야 하는데, 이를 타입 GreetingsProps를 만들어 명시해주었습니다.
  useState로 관리되는 state 값이거나, 함수(onClick)의 경우는 받아온 프로퍼티 그대로 사용할 수 없습니다.
  따라서 여기서는 handleClick() 이라는 함수를 만들어 전달받은 onClick 함수를 호출하도록 하였습니다.
   */
  const handleClick = () => {
    onClick(name);
  };
  return (
    <div>
      Hello, {name}
      {optional && <p> {optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Greetings;

/*
<div>
    <button onClick={onClick(name)}>Click Me</button> 과 같은 형식으로 사용할 수 없습니다.
</div>
*/
```

### 📍 화살표 함수를 통해 React.FC를 사용하는 경우

```tsx

📁 src/Greetings.tsx
...
type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
};

const Greetings: React.FC<GreetingsProps> = ({ name, optional, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };
  return (
    <div>
      Hello, {name}
      {optional && <p> {optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Greetings;
```

<p><b>: React.FC</b> 를 사용할 때는 props의 타입을 Generics로 넣어서 사용합니다.</p>

### 📍 function 키워드를 통해 작성하는 경우

```tsx
type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
};

function Greetings({ name, optional, onClick }: GreetingsProps) {
  return (
    <div>
      Hello, {name}
      {optional && <p> {optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

export default Greetings;
```

## 📍 1.2) Counter.tsx

```tsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;
```

<p>TS 없이 리액트 컴포넌트를 작성하는 것과 별반 차이가 없습니다. <b>useState</b>를 사용할 때, <b>useState&lt;number&gt;()</b>와 같이 제네릭을 사용하여 해당 상태가 어떤 타입을 가지고 있을지 설정만 해주면 됩니다.</p>

<p>사실 제네릭으로 감싸지 않더라도 타입스크립트의 타입 추론에 의해 number인 것을 유추할 수 있습니다. <br/>그렇다면 어떤 상황에 제네릭을 사용하는 게 좋을까요?<Br/>바로, 상태가 null 일 수도 있고 아닐수 도 있을 때 제네릭을 활용하시면 좋습니다.</p>

```tsx
type Information = { name: string; description: string };
const [info, setInfo] = useState<Information | null>(null);

// 초기 값이 null 일 경우, 제네릭을 사용하는 것이 가독성이 좋습니다.
```

## 📍 1.3) MyForm.tsx

```tsx
import React, { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (e: any) => {
    // e 값을 무엇으로 설정해야할까요?
    // 일단 모를떄는 any 로 설정합니다.
  };

  const handleSubmit = (e: any) => {
    // 여기도 모르니까 any 로 하겠습니다.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

export default MyForm;
```

- MyForm 컴포넌트는 기본적으로 상위 디렉토리인 App에게 props로 onSubmit 함수를 전달받은 상태입니다
- 이를 사용하기 위해서는 자식 컴포넌트에서 또한 해당 함수에 대한 타입을 정의해줘야 합니다.
- 앞서 사용한 것처럼, function 키워드를 사용하여 컴포넌트를 구성할 때, 정의된 타입을 <b>: 타입명</b> 형식으로 넘겨줘야 합니다.

```tsx
type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  ...
}
```

### 📍 MyForm 내부에서 쓰이는 함수에 대한 이벤트 타입 정의하기

- 우리는 MyForm 컴포넌트를 완성시키기 위해 input 태그의 onChange 프로퍼티와 form 태그의 onSubmit 프로퍼티를 사용합니다.
- custom hook을 만들어 useState와 onChange에 대응되는 훅함수를 만들기도 하지만, 간단하게 만들어보도록 하겠습니다.

```tsx
const onChange = (e: any) => {
  // e 값을 무엇으로 설정해야할까요?
  // 일단 모를떄는 any 로 설정합니다.
};

const handleSubmit = (e: any) => {
  // 여기도 모르니까 any 로 하겠습니다.
};
```

- 해당 함수에 event:any 에서 any 보다 정확한 타입을 주기 위해서는 어떻게 해야 할까요?
- 답은 해당 프로퍼티를 클릭하여 보면 알 수 있습니다.

<img src="./images/propertEvent.png" alt="propertyEventType">

```tsx
(JSX attribute) React.InputHTMLAttributes<HTMLInputElement>.onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
```

- 에서 onChange? : <b>React.ChangeEventHandler<HTMLInputElement> | undefined </b> 부분이 해당 event에 대한 타입입니다.
- 이를 코드에 적용하면 다음과 같습니다.

```tsx
const onChange = (e: React.ChangeEventHandler<HTMLInputElement>) => {
  const { name, value } = e.target;
  setForm({
    ...form,
    [name]: value,
  });
};

const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
  e.preventDefault();
  onSubmit(form);
  setForm({
    name: "",
    description: "",
  });
};
```

<p>결과 화면을 보겠습니다</p>

<img src="./images/propertyError.png" alt="propertyError">

<p> 아직도 에러군요, 왜 그럴까요? 확인해보겠습니다.</p>

<img src="./images/propertyPreviousError.png" alt="propertyPreviousError"/>

> 'ChangeEventHandler<HTMLInputElement>' 형식에 'target' 속성이 없습니다. 라는 오류가 나옵니다.

<img src="./images/propertyErrorView.png" alt="propertyErrorView"/>

```tsx
 type React.ChangeEventHandler<T = Element> = (event: React.ChangeEvent<T>) => void
```

<p>현재는 <b>ChangeEventHandler</b>를 통해 표현했는데, event, e 객체를 컨트롤하기 위해서는 <b>ChangeEvent</b>를 사용하라는 것 같습니다. </p>

```tsx
  📁 /src/MyForm.tsx
  ...
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: '',
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={onChange} style={{ marginRight: 10 }} />
        <input name="description" value={description} onChange={onChange} style={{ marginRight: 10 }} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default MyForm;

```

<p>매우 까다로운 과정일 수 있지만 이 흐름을 이해한다면, 상태관리 전까지 리액트에 타입스크립트를 적용하는 것은 문제가 없을 것입니다!</p>
