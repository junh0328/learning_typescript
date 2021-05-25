# 📍 리액트에 타입스크립트 적용하기

## 📍 들어가기 앞서

- 현재 많은 프로젝트를 .tsx 즉, 리액트(.jsx)에 타입스크립트 문법을 적용한 형태로 진행하고 있습니다.
- 스터디를 진행하면서 만나 뵀던 현업 개발자 분들은 대부분 타입스크립트 환경을 더 즐겨 사용하셨고 타입스크립트 공부를 강조하셨습니다.<br/>
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
