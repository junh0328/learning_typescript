# π λ¦¬μ‘νΈμ νμμ€ν¬λ¦½νΈ μ μ©νκΈ°

## π λ€μ΄κ°κΈ° μμ

- νμ¬ μ λ λ§μ νλ‘μ νΈλ₯Ό .tsx μ¦, λ¦¬μ‘νΈ .jsx κΈ°λ³Έ λ¬Έλ²μ νμμ€ν¬λ¦½νΈ λ¬Έλ²μ μ μ©ν ννλ‘ μ§ννκ³  μμ΅λλ€.
- μ€ν°λλ₯Ό μ§ννλ©΄μ λ§λ λλ μ μ, νμμ κ³μλ κ°λ°μ λΆλ€ λλΆλΆμ΄ νμμ€ν¬λ¦½νΈ νκ²½μ λ μ¦κ²¨ μ¬μ©νμ¨κ³  νμμ€ν¬λ¦½νΈ κ³΅λΆλ₯Ό κ°μ‘°νμ¨μ΅λλ€.<br/>
- κΈ°μ‘΄ κ³΅λΆλ₯Ό νλ©΄μ λ§λ€μ΄ λ ν΄λμΈ todolist, todo-redux, using-thunkμ λν΄ λ³΅κΈ°νλ©°, μ€μ  νλ‘μ νΈμμ λλ μ΄λ €μκ³Ό ν΄κ²°λ°©μμ λν΄ κ³΅λΆν©λλ€.
- react νλ‘μ νΈ μμ μμ ν¨μ μ μΈμκ³Ό ν¨μ ννμμ μν©μ λ°λΌ λͺ¨λ μ¬μ©νκ² λλλ°, μ΄λ μ λ¬λλ props μ νμ μ μ© μμ λκΌλ λ²½μ νλ¬Όκ³  κΉκ² κ³΅λΆν  μμ μλλ€.

## λͺ©μ°¨

- [todolist](#-todolist)
- [todo-redux](#-todo-redux)
- [redux-thunk](#-redux-thunk)
- [redux-saga](#-redux-saga)

- [social-login](#-social-login)

## π todolist

```tsx

π src/App.tsx
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
      <Greetings name="μ€ν¬" optional="μ΅μμλλ€" onClick={onClick} />
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

> μ€μ  μλ£λ π ReactByTs/todolistμ λ€μ΄μμ΅λλ€.

- ν¨μ ννμμ μ¬μ©νμ¬ App μ»΄ν¬λνΈκ° μμ±λμμ΅λλ€.
- React.FC (Functional Component) λΌλ λ»μΌλ‘ ν¨μ μ μΈμ λλ ν¨μ ννμμΌλ‘ νμ΄νν  κ²½μ° ν΄λΉ μ»΄ν¬λνΈμ νμμ μμ±ν΄μ€μΌ ν©λλ€.
- onClick() ν¨μμ onSubmit() ν¨μλ₯Ό propsλ‘ νμ¬κΈ νμ μ»΄ν¬λνΈμΈ `<Greetings onClick={onClick}>`μ `<MyForm onSubmit={onSubmit}>` μ μ λ¬ν΄μ£Όκ³  μμ΅λλ€.
- Greetings μ»΄ν¬λνΈ λ¨Όμ  λ³΄κ² μ΅λλ€.

> `<Greetings μ λ¬ν  νλ‘νΌν° = {μ€μ  ν¨μ}>` μ ννμλλ€.

## π 1.1) Greetings.tsx

### π νμ΄ν ν¨μλ₯Ό ν΅ν΄ React.FCλ₯Ό μ¬μ©νμ§ μλ κ²½μ°

```tsx

π src/Greetings.tsx
...

// propsλ‘ μ λ¬λ°μ νλ‘νΌν°λ€μ λν νμμ μ§μ ν΄μ£Όμλ€.
type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
};


const Greetings = ({ name, optional, onClick }: GreetingsProps) => {
  /*
  μμ μ»΄ν¬λνΈμ μ λ¬λ°μ νλ‘νΌν°λ€μκ² νμ λͺμλ₯Ό ν΄μ€μΌ νλλ°, μ΄λ₯Ό νμ GreetingsPropsλ₯Ό λ§λ€μ΄ λͺμν΄μ£Όμμ΅λλ€.
  useStateλ‘ κ΄λ¦¬λλ state κ°μ΄κ±°λ, ν¨μ(onClick)μ κ²½μ°λ λ°μμ¨ νλ‘νΌν° κ·Έλλ‘ μ¬μ©ν  μ μμ΅λλ€.
  λ°λΌμ μ¬κΈ°μλ handleClick() μ΄λΌλ ν¨μλ₯Ό λ§λ€μ΄ μ λ¬λ°μ onClick ν¨μλ₯Ό νΈμΆνλλ‘ νμμ΅λλ€.
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
    <button onClick={onClick(name)}>Click Me</button> κ³Ό κ°μ νμμΌλ‘ μ¬μ©ν  μ μμ΅λλ€.
    λ§μ½ νλΌλ―Έν°λ‘ κ°μ λκ²¨μ£ΌκΈ° μΆλ€λ©΄ νμ΄ν ν¨μλ₯Ό μ¬μ©ν΄μΌ ν©λλ€
</div>
*/

/*
...
  const handleClick = (name: string) => { // νλΌλ―Έν°μ λν νμλ μ§μ ν΄μ€μΌ ν©λλ€
    onClick(name);
  };
  return (
    <div>
      Hello, {name}
      {optional && <p> {optional}</p>}
      <div>
        <button
          onClick={() => {
            handleClick(name);
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
*/
```

### π νμ΄ν ν¨μλ₯Ό ν΅ν΄ React.FCλ₯Ό μ¬μ©νλ κ²½μ°

```tsx

π src/Greetings.tsx
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

<p><b>: React.FC</b> λ₯Ό μ¬μ©ν  λλ propsμ νμμ Genericsλ‘ λ£μ΄μ μ¬μ©ν©λλ€.</p>
<p>μ²« λ²μ§Έλ, propsμ κΈ°λ³Έμ μΌλ‘ <b>children</b>μ΄ λ€μ΄κ° μλ€λ κ²μλλ€.</p>
<p>children μ΄ μ΅μλ ννλ‘ λ€μ΄κ°μλ€λ³΄λκΉ μ΄μ° λ³΄λ©΄ μ»΄ν¬λνΈμ props μ νμμ΄ λͺλ°±νμ§ μμ΅λλ€. μλ₯Ό λ€μ΄ μ΄λ€ μ»΄ν¬λνΈλ childrenμ΄ λ¬΄μ‘°κ±΄ μμ΄μΌ νλ κ²½μ°λ μμ κ²μ΄κ³ , μ΄λ€ μ»΄ν¬λνΈλ children μ΄ λ€μ΄κ°λ©΄ μλλ κ²½μ°λ μμ κ²μλλ€.</p>

### +) π νμ΄ν ν¨μλ₯Ό ν΅ν΄ React.FCλ₯Ό μ¬μ©νλ κ²½μ° (children μ¬μ©νκΈ°)

```tsx
case 1: κΈ°μ‘΄μ½λ
<Greetings name="μ€ν¬" optional="μ΅μμλλ€" onClick={onClick}/>

case 2: children νμμ ν΅ν΄ νμ μ»΄ν¬λνΈμ μ λ¬νλ κ²½μ°
<Greetings name="μ€ν¬" optional="μ΅μμλλ€" onClick={onClick}>
  μ·°λλ°μλλ€
</Greetings>
```

<p>React:FC λ₯Ό μ¬μ©νκ² λλ©΄, propsλ‘ μ λ¬λ°μ children νλ‘νΌν°μ λν΄ νμ μ€μ μ νμ§ μκ³  μ¬μ©ν  μ μμ΅λλ€. </p>

```tsx
type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
};

const Greetings: React.FC<GreetingsProps> = ({
  children,
  name,
  onClick,
  optional,
}) => {
  const handleClick = () => {
    onClick(name);
  };

  //<Greetings>...</Greetings> μ¬μ΄μ λκ²¨μ€ κ°μ children μΌλ‘ νμ©νμ¬ μμ μ»΄ν¬λνΈμμ μ¬μ©ν  μ μμ΅λλ€.

  return (
    <div>
      <p>{children}</p>
      {/* μ λ¬ λ°μ children propsλ₯Ό {children} μ ν΅ν΄ μ¬μ©νμμ΅λλ€. */}
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

<img src="./images/childrenProps.png" alt="UsingChildrenProps">

### π function ν€μλλ₯Ό ν΅ν΄ μμ±νλ κ²½μ°

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

### π +) function ν€μλλ₯Ό ν΅ν΄ μμ±νλ κ²½μ° (propsλ‘ μ λ¬ νμ κ΅¬μ‘°λΆν΄ ν λΉ νλ λ°©λ²)

> νμ λΆμ΄ μ°μλ λ°©λ²μ μΆκ°ν΄ λ³΄μμ΅λλ€. κ°μΈμ μΌλ‘λ μ΄ λ°©λ²μ΄ μ μΌ νΈνλ― ν©λλ€.<br/>
> μνλ props {name, optional, onClick } λ§ λ½μμ μ¬μ©ν  μ μκΈ° λλ¬Έμλλ€.

```tsx
import React from "react";

type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
};

function Greetings(props: GreetingsProps) {
  const { name, optional, onClick } = props;

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
}
```

## π 1.2) Counter.tsx

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

<p>TS μμ΄ λ¦¬μ‘νΈ μ»΄ν¬λνΈλ₯Ό μμ±νλ κ²κ³Ό λ³λ° μ°¨μ΄κ° μμ΅λλ€. <b>useState</b>λ₯Ό μ¬μ©ν  λ, <b>useState&lt;number&gt;()</b>μ κ°μ΄ μ λ€λ¦­μ μ¬μ©νμ¬ ν΄λΉ μνκ° μ΄λ€ νμμ κ°μ§κ³  μμμ§ μ€μ λ§ ν΄μ£Όλ©΄ λ©λλ€.</p>

<p>μ¬μ€ μ λ€λ¦­μΌλ‘ κ°μΈμ§ μλλΌλ νμμ€ν¬λ¦½νΈμ νμ μΆλ‘ μ μν΄ numberμΈ κ²μ μ μΆν  μ μμ΅λλ€. <br/>κ·Έλ λ€λ©΄ μ΄λ€ μν©μ μ λ€λ¦­μ μ¬μ©νλ κ² μ’μκΉμ?<Br/>λ°λ‘, μνκ° null μΌ μλ μκ³  μλμ λ μμ λ μ λ€λ¦­μ νμ©νμλ©΄ μ’μ΅λλ€.</p>

```tsx
type Information = { name: string; description: string };
const [info, setInfo] = useState<Information | null>(null);

// μ΄κΈ° κ°μ΄ null μΌ κ²½μ°, μ λ€λ¦­μ μ¬μ©νλ κ²μ΄ κ°λμ±μ΄ μ’μ΅λλ€.
```

## π 1.3) MyForm.tsx

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
    // e κ°μ λ¬΄μμΌλ‘ μ€μ ν΄μΌν κΉμ?
    // μΌλ¨ λͺ¨λ₯Όλλ any λ‘ μ€μ ν©λλ€.
  };

  const handleSubmit = (e: any) => {
    // μ¬κΈ°λ λͺ¨λ₯΄λκΉ any λ‘ νκ² μ΅λλ€.
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={name} onChange={onChange} />
      <input name="description" value={description} onChange={onChange} />
      <button type="submit">λ±λ‘</button>
    </form>
  );
}

export default MyForm;
```

- MyForm μ»΄ν¬λνΈλ κΈ°λ³Έμ μΌλ‘ μμ λλ ν λ¦¬μΈ Appμκ² propsλ‘ onSubmit ν¨μλ₯Ό μ λ¬λ°μ μνμλλ€
- μ΄λ₯Ό μ¬μ©νκΈ° μν΄μλ μμ μ»΄ν¬λνΈμμ λν ν΄λΉ ν¨μμ λν νμμ μ μν΄μ€μΌ ν©λλ€.
- μμ μ¬μ©ν κ²μ²λΌ, function ν€μλλ₯Ό μ¬μ©νμ¬ μ»΄ν¬λνΈλ₯Ό κ΅¬μ±ν  λ, μ μλ νμμ <b>: νμλͺ</b> νμμΌλ‘ λκ²¨μ€μΌ ν©λλ€.

```tsx
type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  ...
}
```

### π MyForm λ΄λΆμμ μ°μ΄λ ν¨μμ λν μ΄λ²€νΈ νμ μ μνκΈ°

- μ°λ¦¬λ MyForm μ»΄ν¬λνΈλ₯Ό μμ±μν€κΈ° μν΄ input νκ·Έμ onChange νλ‘νΌν°μ form νκ·Έμ onSubmit νλ‘νΌν°λ₯Ό μ¬μ©ν©λλ€.
- custom hookμ λ§λ€μ΄ useStateμ onChangeμ λμλλ νν¨μλ₯Ό λ§λ€κΈ°λ νμ§λ§, κ°λ¨νκ² λ§λ€μ΄λ³΄λλ‘ νκ² μ΅λλ€.

```tsx
const onChange = (e: any) => {
  // e κ°μ λ¬΄μμΌλ‘ μ€μ ν΄μΌν κΉμ?
  // μΌλ¨ λͺ¨λ₯Όλλ any λ‘ μ€μ ν©λλ€.
};

const handleSubmit = (e: any) => {
  // μ¬κΈ°λ λͺ¨λ₯΄λκΉ any λ‘ νκ² μ΅λλ€.
};
```

- ν΄λΉ ν¨μμ event:any μμ any λ³΄λ€ μ νν νμμ μ£ΌκΈ° μν΄μλ μ΄λ»κ² ν΄μΌ ν κΉμ?
- λ΅μ ν΄λΉ νλ‘νΌν°λ₯Ό ν΄λ¦­νμ¬ λ³΄λ©΄ μ μ μμ΅λλ€.

<img src="./images/propertEvent.png" alt="propertyEventType">

```tsx
(JSX attribute) React.InputHTMLAttributes<HTMLInputElement>.onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
```

- μμ onChange? : <b>React.ChangeEventHandler<HTMLInputElement> | undefined </b> λΆλΆμ΄ ν΄λΉ eventμ λν νμμλλ€.
- μ΄λ₯Ό μ½λμ μ μ©νλ©΄ λ€μκ³Ό κ°μ΅λλ€.

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

<p>κ²°κ³Ό νλ©΄μ λ³΄κ² μ΅λλ€</p>

<img src="./images/propertyError.png" alt="propertyError">

<p> μμ§λ μλ¬κ΅°μ, μ κ·Έλ΄κΉμ? νμΈν΄λ³΄κ² μ΅λλ€.</p>

<img src="./images/propertyPreviousError.png" alt="propertyPreviousError"/>

> 'ChangeEventHandler<HTMLInputElement>' νμμ 'target' μμ±μ΄ μμ΅λλ€. λΌλ μ€λ₯κ° λμ΅λλ€.

<img src="./images/propertyErrorView.png" alt="propertyErrorView"/>

```tsx
 type React.ChangeEventHandler<T = Element> = (event: React.ChangeEvent<T>) => void
```

<p>νμ¬λ <b>ChangeEventHandler</b>λ₯Ό ν΅ν΄ νννλλ°, event, e κ°μ²΄λ₯Ό μ»¨νΈλ‘€νκΈ° μν΄μλ <b>ChangeEvent</b>λ₯Ό μ¬μ©νλΌλ κ² κ°μ΅λλ€. </p>

```tsx
  π /src/MyForm.tsx
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
        <button type="submit">λ±λ‘</button>
      </form>
    </div>
  );
};

export default MyForm;

```

<p>λ§€μ° κΉλ€λ‘μ΄ κ³Όμ μΌ μ μμ§λ§ μ΄ νλ¦μ μ΄ν΄νλ€λ©΄, μνκ΄λ¦¬ μ κΉμ§ λ¦¬μ‘νΈμ νμμ€ν¬λ¦½νΈλ₯Ό μ μ©νλ κ²μ λ¬Έμ κ° μμ κ²μλλ€!</p>

## π todo redux

νμμ€ν¬λ¦½νΈμμ λ¦¬λμ€ νλ‘μ²λΌ μ¬μ©νκΈ° !

- <a href="https://github.com/erikras/ducks-modular-redux">Ducks ν¨ν΄</a>μ μ¬μ©νμ¬ todolistμ λ¦¬λμ€ νμμ μ μ©ν©λλ€
- μ¦, μ‘μνμ, μ‘μμμ±ν¨μ, λ¦¬λμλ₯Ό λͺ¨λ ν νμΌμ μμ±νκ² λ€λ μλ―Έμλλ€
- κΈ°λ³Έμ μΈ TodoAppμ νμ λ€μκ³Ό κ°μ΅λλ€.

```tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { toggleTodo, removeTodo, addTodo } from "../modules/todos";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

function TodoApp() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addTodo(text));
  };

  const onToggle = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const onRemove = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
}

export default TodoApp;
```

- react-reduxμ useDispatchμ useSelectorλ₯Ό μ¬μ©νμ¬ μνκ΄λ¦¬ λ° μ‘μμ μ€νν©λλ€.
- useSelectorλ‘ κ΄λ¦¬λλ todos λ RootState λ₯Ό ν΅ν΄ ν©μ³μ§ todos λͺ¨λμλλ€.
- (state: RootState)μμ νμμ μ§μ ν΄μ€ RootStateλ modules/index μμ export νμμ΅λλ€.
- ν¨μλ³ νλΌλ―Έν°μλ ν΄λΉ νμμ μ μΈν΄μ£Όμκ³  propsλ‘ ν¨μλ₯Ό λκ²¨μ£Όμμ΅λλ€.

> μ°μ  RootStateκ΄λ¦¬νλ λͺ¨λμΈ todos λͺ¨λλΆν° λ³΄κ² μ΅λλ€.

```tsx
// μ‘μ νμ μ μΈ
// λ€μ as const λ₯Ό λΆμ¬μ€μΌλ‘μ¨ λμ€μ μ‘μ κ°μ²΄λ₯Ό λ§λ€κ² action.type μ κ°μ μΆλ‘ νλ κ³Όμ μμ
// action.type μ΄ string μΌλ‘ μΆλ‘ λμ§ μκ³  'todos/ADD_TODO' μ κ°μ΄ μ€μ  λ¬Έμμ΄ κ°μΌλ‘ μΆλ‘  λλλ‘ ν΄μ€λλ€.
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 4; // μλ‘μ΄ ν­λͺ©μ μΆκ° ν  λ μ¬μ© ν  κ³ μ  ID κ°

// μ‘μ μμ± ν¨μλ₯Ό μμ±ν©λλ€
export const addTodo = (text: string) => ({
  type: ADD_TODO, // action.type μ κ°μ μΆλ‘ νλ κ³Όμ 
  payload: {
    id: nextId++,
    text,
  },
});

// μ‘μμ λΆκ°μ μΌλ‘ νμν κ°μ payload λΌλ μ΄λ¦μΌλ‘ ν΅μΌν©λλ€
// μ΄λ FSA (https://github.com/redux-utilities/flux-standard-action) λΌλ κ·μΉμΈλ°
// μ΄ κ·μΉμ μ μ©νλ©΄ μ‘μλ€μ΄ λͺ¨λ λΉμ·ν κ΅¬μ‘°λ‘ μ΄λ£¨μ΄μ Έμκ² λμ΄ μΆν λ€λ£° λλ νΈνκ³ 
// μ½κΈ° μ½κ³ , μ‘μ κ΅¬μ‘°λ₯Ό μΌλ°νν¨μΌλ‘μ¨ μ‘μμ κ΄λ ¨λ€ λΌμ΄λΈλ¬λ¦¬λ₯Ό μ¬μ© ν  μ μκ² ν΄μ€λλ€.
// λ€λ§, λ¬΄μ‘°κ±΄ κΌ­ λ°λ₯Ό νμλ μμ΅λλ€.

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});

// λͺ¨λ  μ‘μ κ°μ²΄λ€μ λν νμ μ€λΉ
// ReturnType<typeof _____> λ νΉμ  ν¨μμ λ°νκ°μ μΆλ‘ ν΄μ€λλ€
// μλ¨λΆμμ μ‘μνμμ μ μΈ ν  λ as const λ₯Ό νμ§ μμΌλ©΄ μ΄ λΆλΆμ΄ μ λλ‘ μλνμ§ μμ΅λλ€.
type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

// μνμμ μ¬μ© ν  ν  μΌ ν­λͺ© λ°μ΄ν° νμ μ μ
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

// μ΄ λͺ¨λμμ κ΄λ¦¬ν  μνλ Todo κ°μ²΄λ‘ μ΄λ£¨μ΄μ§ λ°°μ΄
// κ΄λ¦¬ν΄μΌ νλ μνκ° λ°°μ΄μ΄κΈ° λλ¬Έμ Todo λ°°μ΄μ λν νμμ μ§μ νλ κ³Όμ μ νλ² λ κ±°μ³€μ΅λλ€.
export type TodosState = Todo[];

// μ΄κΈ° μν μ μΈ
const initialState: TodosState = [
  {
    id: 1,
    text: "λ₯λ₯νμΉ",
    done: false,
  },
  {
    id: 2,
    text: "μν¬νμΉ",
    done: false,
  },
  {
    id: 3,
    text: "μ°λ¦¬ν¬νμΉ",
    done: false,
  },
];

// λ¦¬λμ μμ±
export default function todos(
  state: TodosState = initialState,
  action: TodosAction // μ¬κΈ°μ ReturnType<typeof ...> λ‘ μ μΈνλ νμμ μ¬μ©ν©λλ€.
) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      // payload κ° number μΈ κ²μ΄ μ μΆλ©λλ€.
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
```

- μ£Όμ κΉκ² λ΄μΌ ν  λΆλΆμ κ΄λ¦¬ν΄μΌ ν  κ°μ΄ λ°°μ΄μΌ κ²½μ° ν΄λΉ λ°°μ΄μ λν νμμ μμμ ν λ² λ μ μΈν΄μ€λ€λ κ²μλλ€
- μ΄ν΄λ₯Ό λκΈ° μν΄ state κ° numberμΈ μν κ°μ μ½λλ₯Ό λ³΄μ¬λλ¦¬κ² μ΅λλ€.

```tsx

π initialState μ νμμ΄ νλμΌ λ

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};
```

- μμ²λΌ initialState μΌλ°μ μΈ number, string, boolean κ°μ΄λΌλ©΄ ν΄λΉ νμμ ν λ² λ μ§μ ν΄μ€ νμκ° μμ΅λλ€.
- νμ§λ§ νμμ΄ λ°°μ΄ κ°μ²΄λΌλ©΄ κ·Έμ λν νμμ λ¨Όμ  μ μΈν΄μ£Όμ΄μΌ ν©λλ€.

```tsx
π initialState μ νμμ΄ λ°°μ΄ κ°μ²΄μΌ λ

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];

const initialState: TodosState = [
  {
    id: 1,
    text: "λ₯λ₯νμΉ",
    done: false,
  },
  {
    id: 2,
    text: "μν¬νμΉ",
    done: false,
  },
  {
    id: 3,
    text: "μ°λ¦¬ν¬νμΉ",
    done: false,
  },
];

// νλ‘νΌν°μΈ id, text, done μ λν νμμ λ¨Όμ  μ μΈν΄μ€λλ€.
```

- μ΄μ  μμμ λ§λ  todos λͺ¨λμ rootReducerμ λ³΄λλλ€
- νλμ μ€ν μ΄`(=store)`λ§ κ°μ§λ€λ κ·μΉμ λ°λΌ, λ¦¬λμκ° λ§μμ§ κ²½μ° μ΄λ κ² combine μμΌμ μ¬μ©ν©λλ€

```tsx
import { combineReducers } from "redux";
import todos from "./todos";
const rootReducer = combineReducers({
  todos,
});

// λ£¨νΈ λ¦¬λμλ₯Ό λ΄λ³΄λ΄μ£ΌμΈμ.
export default rootReducer;

// λ£¨νΈ λ¦¬λμμ λ°νκ°λ₯Ό μ μΆν΄μ€λλ€
// μΆν μ΄ νμμ μ»¨νμ΄λ μ»΄ν¬λνΈμμ λΆλ¬μμ μ¬μ©ν΄μΌ νλ―λ‘ λ΄λ³΄λ΄μ€λλ€.
export type RootState = ReturnType<typeof rootReducer>;
```

- λ€μ TodoAppμΌλ‘ λ€μ΄μ νμ¬ todosμ νμμ νμΈν΄λ΄μλ€

<img src="./images/todo_rootState.PNG" alt="todo_rootState"/>

- νμ μΆλ‘ μ μν΄ todosκ° μλμΌλ‘ <b>const todos: TodosState</b> ννλ₯Ό λλ κ²μ μ μ μμ΅λλ€
- νμ μ»΄ν¬λνΈμΈ &lt;TodoInsert&gt; , &lt;TodoList&gt; μ κ²½μ° propsλ‘ ν¨μλ₯Ό μ λ¬νλ κ² μΈμλ κΈ°μ‘΄ λ°©μκ³Ό κ°μ΅λλ€
- λ°λΌμ ν΄λΉ ν¨μ(onInsert, onToggle, onRemove)κ° μ€ν λμ λ, dispatch κ° λ°μνλ©° μμ²­λ μ‘μμ λ°λΌ stateμ κ°μ΄ λ³ννλ€λ νλ¦μ μΊμΉνλ©΄ μΆ©λΆν©λλ€
- reducerμμ concatμ ν΅ν΄ stateμ κ°μ΄ λ³κ²½λλ€λ©΄, virtual DOMμ΄ μ΄λ₯Ό κ°μ§νκ³  λ³νλ stateλ₯Ό λ λλ§ν΄μ€ κ²μλλ€
- κ·Έλ λ€λ©΄ μ°λ¦¬λ κ·Έ λ³νλ₯Ό λμΌλ‘ μ°Ύμλ³Ό μ μμ κ²μλλ€

## π redux thunk

> λ¦¬λμ€ λ―Έλ€μ¨μ΄λ₯Ό λ€λ£¨λ λ°©λ²μ μ λͺ¨λ₯΄μ λ€λ©΄ <a href="https://react.vlpt.us/redux-middleware/">λ¦¬λμ€ λ―Έλ€μ¨μ΄ νν λ¦¬μΌ</a>μ λ¨Όμ  μ½μ΄μ£ΌμΈμ

<p>κ°λ¨νκ² λ§νμλ©΄ λ¦¬λμ€ λ―Έλ€μ¨μ΄λ₯Ό μ¬μ©νλ©΄ μ‘μμ΄ λμ€ν¨μΉ λ λ€μ, λ¦¬λμμμ ν΄λΉ μ‘μμ λ°μμμ μλ°μ΄νΈνκΈ° μ μ μΆκ°μ μΈ μμμ ν  μ μμ΅λλ€.</p>

- νΉμ  μ‘°κ±΄μ λ°λΌ μ‘μμ΄ λ¬΄μλκ² λ§λ€ μ μμ΅λλ€
- μ‘μμ μ½μμ μΆλ ₯νκ±°λ, μλ²μͺ½μ λ‘κΉμ ν  μ μμ΅λλ€
- μ‘μμ΄ λμ€ν¨μΉ λμ λ μ΄λ₯Ό μμ ν΄μ λ¦¬λμμκ² μ λ¬λλλ‘ ν  μ μμ΅λλ€
- νΉμ  μ‘μμ΄ λ°μνμ λ μ΄μ κΈ°λ°νμ¬ λ€λ₯Έ μ‘μμ΄ λ°μλλλ‘ ν  μ μμ΅λλ€
- νΉμ  μ‘μμ΄ λ°μνμ λ νΉμ  μλ°μ€ν¬λ¦½νΈ ν¨μλ₯Ό μ€νμν¬ μ μμ΅λλ€

## π redux saga

<p>μ΄λ²μλ λ¦¬λμ€ λ―Έλ€μ¨μ΄ μ€ λ¦¬λμ€μ¬κ°μ νμμ€ν¬λ¦½νΈλ₯Ό μ μ©ν΄λ³΄λλ‘ νκ² μ΅λλ€. λ¦¬λμ€ μ¬κ°μ νμμ€ν¬λ¦½νΈλ₯Ό μ μ©νκΈ°μ μμ λ¦¬λμ€-μ¬κ°μ λν μ§μμ΄ λΆμ‘±νμλ€λ©΄ λ²¨λ‘νΌνΈλμ<a href="https://react.vlpt.us/redux-middleware/10-redux-saga.html">λ¦¬λμ€ μ¬κ°</a>λ₯Ό μ λ νμ μ΄ κΈμ μ°Έκ³ νμλ©΄ μ’μ κ² κ°μ΅λλ€.</p>

### λ νΌλ°μ€

<a href="https://www.gitmemory.com/issue/atlassian/react-beautiful-dnd/1245/481973419">emotion, propsμ μΈν°νμ΄μ€λ₯Ό ν΅ν΄ props μ¬μ  νμ μ μ©νκΈ°</a>

### λ¦¬λμ€-μ¬κ° λ³΄μΌλ¬νλ μ΄νΈ λ§λ€μ΄λ³΄κΈ°

<p>ν νλ‘μ νΈλ₯Ό μλ‘­κ² λ€μ΄κ°λ©΄μ, νμμ€ν¬λ¦½νΈλ₯Ό κΈ°λ°μΌλ‘ ν λ¦¬λμ€ λ¦¬λμ€ μ¬κ° λ―Έλ€μ¨μ΄λ₯Ό ν΅ν΄ μνκ΄λ¦¬λ₯Ό νκΈ°λ‘ κ²°μ λμμ΅λλ€. κ·Έμ λ°λΌ μμ  ν νλ‘μ νΈ λ κ³΅λΆνλ λ΄μ©μ λ°νμΌλ‘ λ³΄μΌλ¬ νλ μ΄νΈλ₯Ό λ§λ€μ΄ λ³΄μμ΅λλ€.</p>

<a href="https://github.com/junh0328/learning_typescript/commits?author=junh0328&since=2021-07-28&until=2021-07-29">λ¦¬λμ€-μ¬κ° λ³΄μΌλ¬νλ μ΄νΈ μμ μ»€λ° μμΌλ‘ λ³΄κΈ°</a>

### μμ

```
1. νλ‘μ νΈ μ΄κΈ°ννκΈ° (npx creat-react-app νλ‘μ νΈλͺ --template typescript)
2. axios λΌμ΄λΈλ¬λ¦¬λ₯Ό ν΅ν΄ λλ―Έ API λ°μ΄ν° ν¨μΉ­ νμΈ λ° λ λλ§
3. λ¦¬λμ, λ¦¬λμ€, λ¦¬λμ€ λ―Έλ€μ¨μ΄ (redux-saga) λμνκΈ°
4. κ²°κ³Ό νμΈνκΈ°

π 5. λ²νΌ μ΄λ²€νΈ μμ²­μ λ°λΌ λμ μΌλ‘ μΆκ° λ°μ΄ν° κ°μ Έμ€κΈ°
```

<p>js νκ²½μμ μΆ©λΆν μ΅μν΄μ‘κΈ° λλ¬Έμ, μ΄λ²μλ νμκ³Ό κ΄λ ¨λ λ΄μ©μ μ£Όλ‘ λ€λ€λ³΄κ² μ΅λλ€.</p>

### 1.νλ‘μ νΈ μ΄κΈ°ννκΈ°

<p>νμ¬ next.jsμ νλ μμν¬λ₯Ό μ¬μ©νλ κ²μ΄ μλ, CRA νκ²½μμ μμμ νκΈ° λλ¬Έμ λ€μκ³Ό κ°μ λͺλ Ήμ΄λ₯Ό μλ ₯νμ¬ ννλ¦Ώμ μμ±ν©λλ€.</p>

```
npx create-react-app name-of-app --template typescript
```

> <a href="https://github.com/typescript-cheatsheets/react">μ°Έκ³ μλ£: typescript-cheatsheets/ react </a>

### 2.axios λΌμ΄λΈλ¬λ¦¬λ₯Ό ν΅ν΄ λλ―Έ API λ°μ΄ν° ν¨μΉ­ νμΈ λ° λ λλ§

<p>λ¨Όμ  κΈ°λ³Έμ μΌλ‘ λ°μ΄ν°λ₯Ό μ΄λ»κ² λΆλ¬μ¬ μ§ μκ°ν΄μΌ ν©λλ€. κΈ°λ³Έμ μΌλ‘ axiosλ‘ λΆλ¬μ€λ €κ³  νλ APIλ λ€μκ³Ό κ°μ΅λλ€.</p>

```
https://jsonplaceholder.typicode.com/todos
```

```js
[
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];
```

<p>μμ κ°μ λ°©μμΌλ‘ μ½ 200κ°μ κ°μ²΄ λ°°μ΄λ‘ μ‘΄μ¬νκ³  μμ΅λλ€. μ λ μ¬κΈ°μ λ²νΌμ ν΄λ¦­νμ λ, ν΄λΉ λ°μ΄ν°λ₯Ό λΆλ¬μμ useStateμ μ μ₯νκ³  μ΄λ₯Ό κ³ μ°¨ν¨μμΈ map ν¨μλ₯Ό ν΅ν΄ λ λλ§νλ λ°©μμ ννμ΅λλ€.</p>

<p>μλ°μ€ν¬λ¦½νΈ νκ²½κ³Ό νμμ€ν¬λ¦½νΈ νκ²½μμ κ°μ₯ ν° μ°¨μ΄μ μ΄λΌκ³  νλ©΄, λ°μ΄ν°μ λν νμμ λͺμν΄μ€μΌ νλ€λ κ²μλλ€. μ°λ¦¬κ° λ°μμ€λ λ°μ΄ν°μ νλ‘νΌν°μλ κ°κ° νμμ΄ μ‘΄μ¬ν©λλ€.</p>

```js
userId: 1; // number
id: 4; // number
title: "et porro tempora"; // string
completed: true; // boolean
```

<p>μ΄μ λ§μΆ°μ ν΄λΉ λ°μ΄ν°μ νμμ λͺμν  todoTypeμ΄λΌλ νμμ μ μΈν΄μ£Όμμ΅λλ€.</p>

```js
export type todoType = {
  completed: boolean,
  id: number,
  title: string,
  userId: number,
};
```

<p>ν΄λΉ todoTypeμ λ°νμΌλ‘ λ°μ΄ν°λ₯Ό λΆλ¬μ€λ λ‘μ§μ μμ±νλ©΄ μλμ κ°μ΅λλ€.</p>

> π μ½λμ κ°λμ±μ μν΄ μ€νμΌλ§μ κ΄λ ¨λ λ΄μ©μ μ κ±°λ μνμλλ€.<br/>
> π μ€νμΌλ§μ ν¬ν¨ν λ΄μ©μ κΉνλΈμ μ¬λ € λμμ΅λλ€.

```tsx

π /src/pages/Main

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import DataForm from "../../components/DataForm";
import HeaderMain from "../../components/HeaderMain";
import { todoType } from "../../types";
import { MainWrapper } from "./style";

function Main() {
  const [datas, setDatas] = useState<todoType[]>([]);

  const API_URL = `https://jsonplaceholder.typicode.com/todos`;

  useEffect(() => {
    if (datas.length) console.log(datas);
  }, [datas]);

  const getAPI = useCallback(
    async (e) => {
      e.preventDefault();
      const result = await axios.get(API_URL);
      // console.log("result.data: ", result.data.slice(1, 30));
      setDatas(result.data.slice(1, 30));
    },
    [API_URL]
  );

  return (
    <MainWrapper>
      <HeaderMain />
      <button onClick={getAPI} >
        Fetching Data!
      </button>
      <DataForm datas={datas} />
    </MainWrapper>
  );
}

export default Main;
```

<p>buttonμ onClick μ΄λ²€νΈ μμ, getAPIλΌλ ν¨μλ₯Ό νΈμΆν©λλ€. getAPIλ axiosλ₯Ό ν΅ν΄ μ°λ¦¬κ° μ¬μ μ λ°μ΄ν°λ₯Ό λ°κΈ°λ‘ν APIμ μ°κ²°λμ΄ μμ΅λλ€. λ°νλ°λ κ²°κ³Όκ°μ resultμ μ μ₯νκ³  μ νν μλλλ‘ λμ΄μ€λμ§ νμΈνκΈ° μν΄ console.logλ‘ κ²°κ³Όκ°μ μ°μ΄λ³΄μμ΅λλ€.</p>

<p>νμ useStateλ‘ κ΄λ¦¬λκ³  μλλ° datas λΉ λ°°μ΄μ μ°λ¦¬κ° axiosλ₯Ό ν΅ν΄ λκ²¨λ°μ κ²°κ³Όκ°μ μ°λ¦¬μ μλλλ‘ μ μ₯νκΈ° μν΄ setDatasλ₯Ό μ¬μ©ν©λλ€.</p>

```js
setDatas(result.data.slice(1, 30));
```

<p>Array.prototype.slice() λ©μλλ₯Ό ν΅ν΄ μ°λ¦¬λ 200κ°λ λλ λ°°μ΄ μ€ μΌλΆλ₯Ό λ½μμ μ μ₯ν  μ μκ² λμμ΅λλ€. μ΄μ  μ μ₯λ datasλ₯Ό κ³ μ°¨ν¨μ mapμ ν΅ν΄ λ λλ§νκΈ° μν΄ ν΄λΉ μμμ λ΄λΉνλ μ»΄ν¬λνΈμΈ &lt;DataForm&gt;μ propsλ‘ μ λ¬ν΄μ£Όμμ΅λλ€.</p>

```tsx
π /src/components/DataForm

import React from "react";
import { todoType } from "../../types";

type Props = {
  datas: todoType[] | undefined;
};

function DataForm(props: Props) {
  const { datas } = props;

  return (
    <div>
      {datas &&
        datas.map((data) => (
          <div key={data.id}>
            <p>userId: {data.userId}</p>
            <p>title: {data.title}</p>
          </div>
        ))}
    </div>
  );
}

export default DataForm;
```

<p>μ°λ¦¬λ Pages/Main μ΄λΌλ μμ λλ ν λ¦¬μμ νμ μ»΄ν¬λνΈ (components/DataForm) μΌλ‘ propsλ₯Ό μμνκΈ° λλ¬Έμ νμ μ»΄ν¬λνΈμμλ propsμ λν νμμ μ μν΄μ€μΌ ν©λλ€. μ΄ κ°λμ κΈ°μ‘΄ js νκ²½μμ λ€λ£¬ prop-typesμ μ μ¬νλ€κ³  μκ°νμλ©΄ λ  κ² κ°μ΅λλ€. λ°λΌμ λκ²¨ λ°λ propsμ λν νμμ <b>Props</b>λΌκ³  μ μνμμ΅λλ€.</p>

```js
type Props = {
  datas: todoType[] | undefined, // μ¬μ μ λ§λ€μλ todoTypeμ λ°°μ΄μ κ·Έλλ‘ μ¬μ©νκΈ° λλ¬Έμ import νμ¬ μ¬μ©ν©λλ€.
};

/* todoTypeμ λ€μκ³Ό κ°μ΅λλ€. */
type todoType = {
  completed: boolean,
  id: number,
  title: string,
  userId: number,
};
```

<p>ν΄λΉ λ°μ΄ν°λ₯Ό μννκ² λ§€ννλ€λ©΄, μ΄λ―Έ λ°μ μ±κ³΅νμ  κ²μλλ€.</p>

### 3.λ¦¬λμ, λ¦¬λμ€, λ¦¬λμ€ λ―Έλ€μ¨μ΄ (redux-saga) λμνκΈ°

> <a href="https://github.com/junh0328/learning_typescript/commit/58272ad3f28214116e832158cdc3265f3a49bf0f">μμ μ»€λ° λ°λ‘κ°κΈ°</a>

<p>λ¨Όμ  νμμ€ν¬λ¦½νΈλ₯Ό ν¬ν¨ν λ¦¬λμ€ λ―Έλ€μ¨μ΄λ₯Ό μ μ©νκΈ° μν΄ λ€μ΄λ°μ λΌμ΄λΈλ¬λ¦¬λ λ€μκ³Ό κ°μ΅λλ€.</p>

```
@types/react-redux
immer
react-redux
redux-devtools-extenstion
redux-saga
```

<p>λ¦¬λμμμ μνλ₯Ό μλ°μ΄νΈν  λλ λΆλ³μ±μ μ§μΌμΌ νκΈ° λλ¬Έμ spread μ°μ°μ (...)μ λ°°μ΄μ λ΄μ₯ ν¨μλ₯Ό νμ©νμ΅λλ€. νμ§λ§ immerλ₯Ό μ μ©νλ€λ©΄ λ³΄λ€ μ½κ² μνλ₯Ό μλ°μ΄νΈν  μ μμ΅λλ€.</p>

<p>μ¬λλ§λ€ λ€λ₯΄κΈ΄ νμ§λ§ μ λ λ€μκ³Ό κ°μ μμλ‘ μ μ­κ°μ²΄ κ΄λ¦¬ μ½λλ₯Ό κ΅¬μ±ν©λλ€. </p>

```
1. λ¦¬λμ μμ± (index λ¦¬λμ> κΈ°λ₯λ³ λ¦¬λμ)
2. μ¬κ° μ½λ μμ± (index μ¬κ° > κΈ°λ₯λ³ μ¬κ°)
3. index.tsxμμ λ¦¬λμ λ° μ¬κ° μ μ©
4. νμ΄μ§ λ° μ»΄ν¬λνΈμμ μ‘μ λλ μ‘μ μμ±ν¨μ μ μ©
5. μ½μμ°½μμ κ²°κ³Όκ° νμΈ
```

### 1) λ¦¬λμ μμ±νκΈ°

<p>π λ¨Όμ  λͺ¨λ  λ¦¬λμ ν¨μλ€μ combine μν¬ reducers/index.tsxλ₯Ό μμ±ν©λλ€.</p>

```tsx
import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({
  todos,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
```

<p>λ¬Όλ‘  μμ§κΉμ§λ todos λ¦¬λμκ° μμ§λ§, ν΄λΉλΆλΆμ λΉμλ μ±λ‘ μμ±ν λ€μ import νμ¬ μ¬μ©νλ©΄ λ©λλ€.</p>

<p>π νμ λ³΄μΌλ¬ νλ μ΄νΈμ λ©μΈ μμμΈ todos λ¦¬λμ κ΄λ ¨ λ¦¬λμλ₯Ό μμ±ν©λλ€. μ λ ducks ν¨ν΄μ ν΅ν΄, κ° κΈ°λ₯λ³ λ¦¬λμμ λͺ¨λ  ν¨μλ€μ λͺ¨μμ£Όμμ΅λλ€. μ½λκ° κΈΈμ΄μ§ μ μμ§λ§, λλΆλΆ λ°λ³΅λλ μ½λμ΄κ³  μ€νλ € actionsμ κ°μ΄ ν΄λλ‘ λΉΌλ κ²λ³΄λ€ μ²μμλ μ΄ν΄νκΈ° λ μ½λ€κ³  νλ¨νμμ΅λλ€.</p>

```tsx
import produce from "immer";
import { todoType } from "../../types";

// initialState νμ μ μ
export interface todosIntialState {
  todos: todoType[];

  fetchTodosLoading: boolean;
  fetchTodosSuccess: boolean;
  fetchTodosFailure: null | Error;
}

// initialState μ μ
export const initialState: todosIntialState = {
  todos: [],

  fetchTodosLoading: false,
  fetchTodosSuccess: false,
  fetchTodosFailure: null,
};

// μ‘μ μ μ
export const FETCHING_TODOS_REQUEST = "FETCHING_TODOS_REQUEST" as const;
export const FETCHING_TODOS_SUCCESS = "FETCHING_TODOS_SUCCESS" as const;
export const FETCHING_TODOS_FAILURE = "FETCHING_TODOS_FAILURE" as const;

// μ‘μμ λν νμ μ μ;
export interface FetchingTodosRequest {
  type: typeof FETCHING_TODOS_REQUEST;
}

export interface FetchingTodosSuccess {
  type: typeof FETCHING_TODOS_SUCCESS;
  todos: todoType;
  data: [];
}

export interface FetchingTodosFailure {
  type: typeof FETCHING_TODOS_FAILURE;
  error: Error;
}

// λ¦¬λμ μμ λ€μ΄κ° μ‘μ νμμ λν μ‘μ μμ± ν¨μ μ μ
export const fetchingToddsRequest = (): FetchingTodosRequest => ({
  type: FETCHING_TODOS_REQUEST,
});

export const fetchingToddsSuccess = (
  todos: todoType,
  data: []
): FetchingTodosSuccess => ({
  type: FETCHING_TODOS_SUCCESS,
  todos,
  data,
});

export const fetchingToddsFailure = (error: Error): FetchingTodosFailure => ({
  type: FETCHING_TODOS_FAILURE,
  error,
});

export type FetchingTodos =
  | ReturnType<typeof fetchingToddsRequest>
  | ReturnType<typeof fetchingToddsSuccess>
  | ReturnType<typeof fetchingToddsFailure>;

// export μν¬ todos λ¦¬λμ
const todos = (state: todosIntialState = initialState, action: FetchingTodos) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCHING_TODOS_REQUEST: {
        draft.fetchTodosLoading = true;
        draft.fetchTodosLoading = false;
        break;
      }
      case FETCHING_TODOS_SUCCESS: {
        draft.fetchTodosLoading = false;
        draft.fetchTodosSuccess = true;
        draft.todos = draft.todos.concat(action.data);
        break;
      }
      case FETCHING_TODOS_FAILURE: {
        draft.fetchTodosSuccess = false;
        draft.fetchTodosFailure = action.error;
        break;
      }
      default:
        return state;
    }
  });

export default todos;
```

<p>JavaSript νκ²½κ³Ό typescript νκ²½μ κ°μ₯ ν° μ°¨μ΄μ μ λ¦¬λμμ case λ³ actionμ λν΄μλ νμμ μ ν΄μ€μΌ μ¬μ©ν  μ μλ€λ κ²μλλ€.</p>

```tsx
(state: todosIntialState = initialState, action: FetchingTodos))
```

<p>ν΄λΉ λΆλΆμ λ³΄μλ©΄ μμκ² μ§λ§, stateμ action λͺ¨λ νμμ μ§μ ν΄μ£Όμμ΅λλ€. μ½κ² μκ°ν΄μ κΈ°μ‘΄μ μμλλ‘, intialStateμ actionμ λ¨Όμ  μ μΈν νμ νμ ν΄λΉ κ°μ²΄μ λν νμμ μ ν΄μ£Όλ μμΌλ‘ κ°λ©΄ μ’μ κ² κ°μ΅λλ€.</p>

<p>...Loading, ...Success, ...Failureλ μ΄κΈ°κ°μ booleanμΌλ‘ λ£μ΄μ£Όμκ³  κ·Έ μΈμλ FETCHING_TODOS_SUCCESSμμ κ΄λ¦¬ν  todosμ λν νμλ§ λͺμν΄μ£Όλ©΄ λ©λλ€.</p>

### 2) μ¬κ° μ½λ μμ±νκΈ°

<p>μ¬κ° μ½λ λν index > κΈ°λ₯λ³ μ¬κ° λͺ¨λ μμΌλ‘ μμ±ν©λλ€. πsagas/index.tsx</p>

```tsx
import { all, fork } from "redux-saga/effects";

import todoSaga from "./todos";

export default function* rootSaga() {
  yield all([fork(todoSaga)]);
}
```

<p>redux-sagaμ μ΄ννΈμ generatorμ λν λ΄μ©μ js νκ²½μμ μΆ©λΆν λ€λ€λ€κ³  μκ°νκ³  λκΈ°λλ‘ νκ² μ΅λλ€. νμ πsagas/todos λ₯Ό μμ±ν©λλ€.</p>

```tsx
import { put } from "@redux-saga/core/effects";
import axios from "axios";
import { all, call, fork, takeLatest } from "redux-saga/effects";
import { API_URL } from "../../apis";
import {
  FetchingTodosRequest,
  FETCHING_TODOS_FAILURE,
  FETCHING_TODOS_REQUEST,
  FETCHING_TODOS_SUCCESS,
} from "../../reducers/todos";
import { todoType } from "../../types";

type resultType = {
  result: todoType[];
};

async function fetchTodosAPI() {
  try {
    const response = await axios.get(API_URL);
    // console.log("result.data: ", result.data.slice(1, 30));
    const result = response.data.slice(1, 30);
    return result;
  } catch (err) {
    console.error(err);
  }
}

function* fetchTodos(action: FetchingTodosRequest) {
  // console.log("action κ°μ§: ", action);
  try {
    const result: resultType = yield call(fetchTodosAPI);
    // console.log('result νμΈ: ', result);
    yield put({
      type: FETCHING_TODOS_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FETCHING_TODOS_FAILURE,
      console: err.response,
    });
  }
}

function* watchFetchTodos() {
  yield takeLatest(FETCHING_TODOS_REQUEST, fetchTodos);
}

export default function* todoSaga() {
  yield all([fork(watchFetchTodos)]);
}
```

<p>JavaScript νκ²½κ³Ό TypeScript νκ²½μμμ κ°μ₯ ν° μ°¨μ΄μ μ actionκ³Ό action λ΄λΆμ ν¬ν¨λ dataμ λν νμμ λͺμν΄μ€μΌ νλ€λ κ²μλλ€. νμ§λ§ κ±±μ ν  νμκ° μμ΅λλ€. μ΄λ―Έ λ¦¬λμμμ μμ±μ μλ£νμκΈ° λλ¬Έμ, ν΄λΉ λ΄μ©μ import νμ¬ μ¬μ©νλ©΄ λ©λλ€.</p>

### 3) index.tsxμ μ μ©νκΈ°

<p>μ¬κ°μ λ¦¬λμλ₯Ό μ¬μ©νκ² λ€λ μ μΈλ€μ κ°μ₯ μμ λλ ν λ¦¬μΈ π/src/index.tsxμ μ μΈν΄μ€λλ€. κΈ°μ‘΄ js νκ²½μμ μ¬μ©νλ κ²κ³Ό λ€λ₯Έ λ΄μ©μ μμ΅λλ€. μΆκ°μ μΌλ‘ ν¬λ‘¬ νμ₯ νλ‘κ·Έλ¨μΈ redux-devtoolsλ₯Ό μ¬μ©νμ¬, κ°λ°μ λκ΅¬μμ μ¬κ° μ΄ννΈλ€μ μΆμ νλλ‘ νκ² μ΅λλ€.</p>

```tsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### 4) κ° νμ΄μ§ λ° μ»΄ν¬λνΈμ λ§λ  ν¨μ μ μ©νκΈ°

<p>μ΄μ  κΈ°μ‘΄μ useStateμ axiosλ‘ νμ΄μ§μμ μ§μ  λ³΄λ΄μ€¬λ λ΄μ©λ€μ reduxμμ μ κ³΅νλ useDispatchμ useSelectorλ₯Ό ν΅ν΄ μ μ­κ°μ²΄λ‘ κ΄λ¦¬ν΄λ³΄κ² μ΅λλ€.</p>

```tsx
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataForm from "../../components/DataForm";
import HeaderMain from "../../components/HeaderMain";
import { RootState } from "../../reducers";
import { FETCHING_TODOS_REQUEST } from "../../reducers/todos";
import { MainWrapper } from "./style";

function Main() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todos);

  const BtnStyle = useMemo(
    () => ({
      cursor: "pointer",
      fontSize: "1rem",
      padding: 10,
      border: "none",
      background: "hotPink",
      color: "black",
    }),
    []
  );

  useEffect(() => {
    if (todos.length) console.log("todos", todos);
  }, [todos]);

  const getAPI = () => {
    console.log("todos_request_start!");
    dispatch({
      type: FETCHING_TODOS_REQUEST,
    });
  };

  return (
    <MainWrapper>
      <HeaderMain />
      <button onClick={getAPI} style={BtnStyle}>
        Fetching Data!
      </button>
      <DataForm datas={todos} />
    </MainWrapper>
  );
}
```

### 4.κ²°κ³Ό νμΈνκΈ°

<p>λ§μ§λ§μΌλ‘ μ½λκ° μ μμ μΌλ‘ μλνλμ§ νμΈν΄λ³΄κ² μ΅λλ€.</p>

#### λ²νΌ μ΄λ²€νΈ ν΄λ¦­ μ 

<img src="./images/sagaTemplate1.png" alt="sagaTemplate1">

#### λ²νΌ μ΄λ²€νΈ ν΄λ¦­ ν

<img src="./images/sagaTemplate2.png" alt="sagaTemplate2">

### 5. λ²νΌ μ΄λ²€νΈ μμ²­μ λ°λΌ λμ μΌλ‘ μΆκ° λ°μ΄ν° κ°μ Έμ€κΈ°

<p>4 λ¨κ³κΉμ§λ λκ΅¬λ€ λμ νκ³  λ°λΌ μΉ  μ μλ μ½λμλλ€. νμ§λ§, λΈλΌμ°μ μμ ν λ²μ λͺ¨λ  λ°μ΄ν°(μ¬κΈ°μλ 200κ°μ λ°°μ΄)λ₯Ό κ°μ§κ³  μλλ€λ©΄, λ‘λ© μλκ° λ¦μ΄μ§κ³  κ³§ μ¬μ©μμ λΆλ§μ μΌμΌν¬ μ μμ΅λλ€. κ·Έλ κΈ° λλ¬Έμ μ΄κΈ° λ‘λ© μλλ₯Ό λμ΄κΈ° μν΄μ λ°μ΄ν°λ₯Ό λμ μΌλ‘ κ°μ Έμ¬ μ μλ μμμ΄ νμν©λλ€.</p>

<p>μμλ λ€μκ³Ό κ°μ΅λλ€.</p>

```
1. useStateλ₯Ό ν΅ν΄ FETCHING_TODOS_REQUEST(μ‘μ ν¨μ)μ ν¨κ» λ³΄λΌ μΈλ±μ€ κ° μ μΈνκΈ°
2. FETCHING_TODOS_REQUESTκ³Ό ν¨κ» λ°μ΄ν°λ‘ 1λ²μ λ°μ΄ν° λ³΄λ΄κΈ°
3. λ¦¬λμ λ° μ¬κ°μμ 1λ² κ³Όμ μ λ°μ΄ν°μ λν νμ μ μΈνκΈ°
4. μ μμ μΌλ‘ λμνλ€λ©΄ useStateλ₯Ό ν΅ν΄ μνκ° μλ°μ΄νΈνκΈ°
5. κ²°κ³Ό νμΈνκΈ°
```

### useStateλ₯Ό ν΅ν΄ FETCHING_TODOS_REQUEST(μ‘μ ν¨μ)μ ν¨κ» λ³΄λΌ μΈλ±μ€ κ° μ μΈνκΈ°

<p>κΈ°μ‘΄μ saga/todosμμ λ°μ΄ν°λ₯Ό κ°μ Έμ¬ λ μ μ μΌλ‘ [1,20]κΉμ§μ λ°μ΄ν°λ₯Ό κ°μ Έμ€κΈ°λ‘ μ μΈνμμ΅λλ€.</p>

```tsx
async function fetchTodosAPI() {
  try {
    const response = await axios.get(API_URL);
    // console.log("result.data: ", result.data.slice(1, 30));
    const result = response.data.slice(1, 30);
    return result;
  } catch (err) {
    console.error(err);
  }
}
```

<p>μ ν¨μμμ sliceμ λ΄κΈΈ μΈλ±μ€λ₯Ό useStateλ‘ κ΄λ¦¬νμ¬ λμ μΌλ‘ λ³κ²½λ  μ μκ² μμν  κ²μλλ€. μ°μ  1κ³Ό 30μ λμ²΄ν  useStateλ₯Ό μ μΈν©λλ€.</p>

```tsx
// λ°°μ΄μ μ²« λ²μ§Έ μΈλ±μ€
const [firstNum, setFirstNum] = useState(0);
// λ°°μ΄μ λ§μ§λ§ λ²μ§Έ μΈλ±μ€
const [lastNum, setLastNum] = useState(20);
```

### FETCHING_TODOS_REQUESTκ³Ό ν¨κ» λ°μ΄ν°λ‘ 1λ²μ λ°μ΄ν° λ³΄λ΄κΈ°

<p>νμ μ μΈν firstNumκ³Ό lastNumμ μ‘μ ν¨μμ dataμ μΆκ°νμ¬ μ λ¬ν©λλ€.</p>

```tsx
  useEffect(() => {
    console.log("todos_request_start!");
    dispatch({
      type: FETCHING_TODOS_REQUEST,
      data: {
        first: firstNum,
        last: lastNum,
      },
    });
    updateNumber();
  };

  // data.fisrt , data.last λ‘ κ°κ° stateλ₯Ό μ λ¬ν©λλ€.
```

### λ¦¬λμ λ° μ¬κ°μμ 1λ² κ³Όμ μ λ°μ΄ν°μ λν νμ μ μΈνκΈ°

<p>κ·Έλ λ€λ©΄ ν΄λΉ request μ‘μμ argumentλ₯Ό μΆκ° νμΌλ―λ‘ π/reducers/todos μλ ν΄λΉ λ΄μ©μ νμμ μ μ΄μ€μΌ κ² μ£ ?</p>

```tsx
case 1 : κΈ°μ‘΄μ FetchingTodosRequest μΈν°νμ΄μ€

export interface FetchingTodosRequest {
  type: typeof FETCHING_TODOS_REQUEST;
}

------------------------------------------

case 2 : νμμ΄ μΆκ°λ FetchingTodosRequest μΈν°νμ΄μ€

export interface FetchingTodosRequest {
  type: typeof FETCHING_TODOS_REQUEST;
  data: {
    first: number;
    last: number;
  };
}
```

<p>μ‘μ μμ± ν¨μμλ κ°μ μμμ λ°λ³΅ν©λλ€.</p>

```tsx
case 1 : κΈ°μ‘΄μ FetchingTodosRequest

// λ¦¬λμ μμ λ€μ΄κ° μ‘μ νμμ λν μ‘μ μμ± ν¨μ μ μ

export const fetchingToddsRequest = (): FetchingTodosRequest => ({
  type: FETCHING_TODOS_REQUEST,
});

------------------------------------------

case 2 : νμμ΄ μΆκ°λ FetchingTodosRequest

export const fetchingToddsRequest = (data: {first: number; last: number;}): FetchingTodosRequest => ({
  type: FETCHING_TODOS_REQUEST,
  data,
});
```

<p>π/sagas/todosμλ νμ λͺμν λ΄μ©μ μλ°μ΄νΈν©λλ€.</p>

```tsx
async function fetchTodosAPI(data: { first: number; last: number }) {
  try {
    const response = await axios.get(API_URL);
    // console.log("result.data: ", result.data.slice(1, 30));
    const result = response.data.slice(data.first, data.last);
    return result;
  } catch (err) {
    console.error(err);
  }
}
```

```tsx
function* fetchTodos(action: FetchingTodosRequest) {
  try {
    const result: resultType = yield call(fetchTodosAPI, action.data);
    // actionκ³Ό ν¨κ» dataλ₯Ό λ£μ΄μ£ΌκΈ° λλ¬Έμ action.dataλ₯Ό μΆκ°νμμ΅λλ€.
    console.log("result νμΈ: ", result);
    yield put({
      type: FETCHING_TODOS_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FETCHING_TODOS_FAILURE,
      console: err.response,
    });
  }
}
```

### μ μμ μΌλ‘ λμνλ€λ©΄ useStateλ₯Ό ν΅ν΄ μνκ° μλ°μ΄νΈνκΈ°

<p>dispatch μ‘μμ΄ μ μ μλν νμ, useStateλ‘ κ΄λ¦¬νλ firstNumκ³Ό lastNumμ λν μνλ₯Ό μλ°μ΄νΈ ν΄μ€λλ€.</p>

```tsx
const getAPI = () => {
  console.log("todos_request_start!");
  dispatch({
    type: FETCHING_TODOS_REQUEST,
    data: {
      first: firstNum,
      last: lastNum,
    },
  });
  // λ°λ‘ setFirstNumμ μ μ΄μ€λ μ μ μλνμ§λ§, μ½λμ κ°λμ±μ μν΄ updateNumber ν¨μλ₯Ό λ§λ€μ΄ λ°λ‘ λΆλ¦¬νμμ΅λλ€.
  updateNumber();
};

// useStateλ‘ λ°μμ€λ λ°°μ΄μ μΈλ±μ€ μΆκ°
const updateNumber = useCallback(() => {
  setFirstNum((num) => num + 20);
  setLastNum((num) => num + 20);
}, []);
```

### κ²°κ³Ό νμΈνκΈ°

<img src="./images/sagaTemplate3.gif" alt="sagaTemplate3">

## μ΄ μ λ μ€λΉκ° λμλ€λ©΄ μΌλ§λ μ§ νλ‘μ νΈλ₯Ό μ§νν΄λ΄λ μ’μ κ² κ°μ΅λλ€ π

## π social login

<p>μ΄λ²μ νμ΅ν λ΄μ©μ νμμ€ν¬λ¦½νΈμ next.js νλ μμν¬ νκ²½μμ μμ λ‘κ·ΈμΈμ μ μ©νλ λ°©λ²μλλ€.</p>

> <a href="https://github.com/Doong-Ji/cola-map/pull/42">μ μ λ§λ€μλ μ°Έκ³  λ‘μ§ λ³΄κΈ° (μΉ΄μΉ΄μ€λ‘ λ‘κ·ΈμΈ)</a>

<p>λλ΅μ μΌλ‘ μμλ₯Ό λ³΄μλ©΄ λ€μκ³Ό κ°μ΅λλ€</p>

```
β  μΉ΄μΉ΄μ€ λλ λ€μ΄λ² λ±μ ν΄λΉνλ μ΄νλ¦¬μΌμ΄μ κΈ°λ₯ λ±λ‘
β‘ publicμ sdk λ±λ‘νκΈ°
β’ νκ²½ λ³μμ ν€κ° λ±λ‘νκΈ°
β£ sdkλ¦ ν΅ν΄ λ‘κ·ΈμΈ λ‘μ§ κ΅¬ννκΈ°
β€ κ²°κ³Ό νμΈνκΈ°
```

### β  μΉ΄μΉ΄μ€ λλ λ€μ΄λ² λ±μ ν΄λΉνλ μ΄νλ¦¬μΌμ΄μ κΈ°λ₯ λ±λ‘

μ΄λ―Έμ§λ₯Ό ν΅ν΄ κ°λ¨νκ² λμ΄ν΄λ³΄λλ‘ νκ² μ΅λλ€

> <a href="https://developers.kakao.com/">'μΉ΄μΉ΄μ€ developers' </a>μμ μ νλ¦¬μΌμ΄μμ μΆκ°ν ν ν€λ₯Ό λ°κΈ λ°μμΌ ν©λλ€.

### π λ‘κ·ΈμΈ νμ λ΄μ΄νλ¦¬μΌμ΄μ ν΄λ¦­

<img src="./images/1.png" alt="1">

### π μ΄νλ¦¬μΌμ΄μ μΆκ°

<img src="./images/2.png" alt="2">

### π μ± μ€μ  > νλ«νΌ > μΉ μ¬μ΄νΈ λλ©μΈ μΆκ°

<img src="./images/3.png" alt="3">

### π JavaScript ν€ λ³΅μ¬

<img src="./images/4.png" alt="4">

<p>μ¬κΈ°μ μμ±νλ JavaScript ν€λ₯Ό νκ²½ λ³μμ λ±λ‘νκ³  μ μ­μΌλ‘ κ΄λ¦¬ν©λλ€.</p>

### β‘ publicμ sdk λ±λ‘νκΈ°

<p>λ¦¬μ‘νΈμ CRA νκ²½κ³Ό next.js νλ μμν¬μ μ°¨μ΄κ° μμ΅λλ€. <br/>
β  CRA νκ²½μμλ π public/index.html μ μ°λ¦¬κ° μμ±ν μ½λκ° λ λλ§λλ λ°©μμ΄μμ΅λλ€. <br/>
β‘ Next.js νκ²½μμλ SSRμ κ΅¬ννκΈ° μν΄ μλ²μμ μ μ μΌλ‘ νμΌμ λ§λ€μ΄μ£ΌκΈ° λλ¬Έμ νΌλΈλ¦­ ν΄λμ ν΄λΉλλ index.htmlμ΄λΌλ νμΌμ΄ μ‘΄μ¬νμ§ μμ΅λλ€.</p>

<p>λ°λΌμ κΈ°μ‘΄μ public/index.htmlμ &lt;script&gt; ... &lt;/script&gt; λ‘ λ£μ΄μ€¬λ sdk μ½λλ next νκ²½μμ pages/_app.tsxμ λ£μ΄μ€λλ€.</p>

```tsx
π pages/_app.tsx

import Head from 'next/head'

...

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Head>
      {GlobalStyles}
      <div css={mainWrap}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
...
```

<p>μ²μ ν΄λΉ νμΌμλ νλΌκ·Έλ¨ΌνΈ &lt;&gt;...&lt;/&gt; λ§ μ‘΄μ¬νκ³  Head μ»΄ν¬λνΈκ° μμ μ μμ΅λλ€. λ°λΌμ next/Headκ° μ κ³΅νλ Headλ₯Ό λΆλ¬μ(import) μ¬μ©ν©λλ€.</p>

### β’ νκ²½ λ³μμ ν€κ° λ±λ‘νκΈ°

<p>Next.js νκ²½μμ SSRμ νμ©νμ¬ νκ²½ λ³μλ₯Ό λ±λ‘νκΈ° μν΄μλ κΈ°μ‘΄ λ°©μκ³Ό μ°¨μ΄μ μ΄ μμ΅λλ€. κΈ°μ‘΄μλ <b>(REACT_APP_)</b>μ μΆκ°νμ¬ process.env.REACT_APP_λ¬Έμμ΄ λ‘ λΆλ¬μμ΅λλ€.</p>

```
π.env
REACT_APP_λ¬Έμμ΄

ex)
REACT_APP_KAKAO_KEY=aaa18clakascnal119xamcsl
```

<p>νμ§λ§ Next νλ μμν¬λ₯Ό μ¬μ© μμλ νκ²½ λ³μλ₯Ό μ΄λ ν μν©μμ μ¬μ©νλμ§ ν΄λλͺλΆν° νμΌλͺκΉμ§ μ§μ ν΄μ€μΌ ν©λλ€. λν κΈ°μ‘΄μ <b>(REACT_APP_)</b>μ΄ μλ <b>(NEXT_PUBLIC_)</b>μ ν΅ν΄ μ°κ²°ν΄μ€λλ€</p>

> <a href="https://nextjs.org/docs/basic-features/environment-variables">κ³΅μ λ¬Έμ νκ²½ λ³μ μ€μ  λ³΄κΈ°</a>

```
β  νκ²½ λ³μ λλ ν λ¦¬λͺμ λ³κ²½ν©λλ€ (.env.local)
β‘ REACT_APP λμ  NEXT_PUBLIC μ μ¬μ©ν©λλ€
```

```
π.env.local

NEXT_PUBLIC_λ¬Έμμ΄

ex)
NEXT_PUBLIC_KAKAO_KEY=casc10cac8al38zcs
```

### β£ sdkλ₯Ό ν΅ν΄ λ‘κ·ΈμΈ λ‘μ§ κ΅¬ννκΈ°

<p>onclick μμ, μΉ΄μΉ΄μ€μμ μ κ³΅νλ sdkλ₯Ό λ°νμΌλ‘ λ‘μ§μ κ΅¬μ±νμμ΅λλ€.</p>

```tsx
 const kakaoLogin = () => {
    Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_KEY}`)

    Kakao.Auth.login({
      /* scopeλ μΉ΄μΉ΄μ€λ‘ λ‘κ·ΈμΈμμ μ€μ ν΄μ€ μ μμ΅λλ€ */
      scope: 'profile_nickname,  account_email',

      success: function (authObj: any) {
        console.log('authObj: ', authObj)
        if (authObj.access_token) {
          Kakao.cleanup()
          console.log('Kakao.cleanup!-login')
        }
      },
      fail: function (err: Error) {
        console.log('μλ¬', err)
        alert('λ‘κ·ΈμΈμ€ν¨!')
        return
      },
    })
  }

...

<button type="button" css={kakao} onClick={kakaoLogin}>
  <img src="/images/login/kakao.svg" alt="μΉ΄μΉ΄μ€ λ‘κ·ΈμΈ" />
  μΉ΄μΉ΄μ€ν‘μΌλ‘ μμνκΈ°
</button>
```

<p>νμ§λ§ μ¬κΈ°μ λ¬Έμ κ° λ°μν©λλ€.</p>

<img width="500" src="./images/typeError.png" alt="νμμλ¬">

<br/>

<p>μΉ΄μΉ΄μ€ κ°μ²΄λ₯Ό μ λλ‘ λ°μμ€μ§ λͺ»νλ κ²μλλ€. μλ°μ€ν¬λ¦½νΈ νκ²½μμλ μλ¬΅μ  νμ λ³νμ μ κ³΅νκΈ° λλ¬Έμ λμ μΌλ‘ μκΈ΄ νμμ μλ°μ€ν¬λ¦½νΈ μμ§μ΄ νλ¨νμ¬ νμμ μ§μ ν΄μ€λλ€. νμ§λ§ νμμ€ν¬λ¦½νΈ νκ²½μμλ μ¬μ©ν  λ³μμ λν μ μ μΈ, μ¦ μ¬μ μ λ³μμ λν νμ μ μΈμ΄ νμν©λλ€. λ°λΌμ νμ μ μΈκ³Ό Kakao κ°μ²΄ μ μΈμ μΆκ°ν΄μ€λλ€.</p>

```tsx

/*
'Window & typeof globalThis' νμμ 'Kakao' μμ±μ΄ μμ΅λλ€.
μλ¬λ₯Ό λμνκΈ° μν΄ global (node.js νκ²½μ μ μ­ κ°μ²΄)μ Kakaoμ λν νμμ μ μΈν΄μ£Όμμ΅λλ€
*/

declare global {
  interface Window {
    Kakao: any
  }
}

export default function AuthLogin() {
    // μ½λ μμ±
    var { Kakao } = window

    const kakaoLogin = () => {
    Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_KEY}`)
    ...
```

<p>κ·ΈλΌ κ²°κ³Όλ₯Ό νμΈν΄λ³ΌκΉμ?</p>

### β€ κ²°κ³Ό νμΈνκΈ°

<img width="400" src="./images/windowUndefined.png" alt="windowUndefined"/>

<p>μλ‘μ΄ μ€λ₯μΈ window<b>(λΈλΌμ°μ  νκ²½μμμ μ μ­(global) κ°μ²΄)</b>κ° μ μλμ§ μμλ€λ μ€λ₯κ° λ°μν©λλ€. μ νν ν΄μ€μ μλμ§λ§ μ μ κ°μΈμ μΈ μκ°μΌλ‘λ, Next.js νλ μμν¬λ μλ²-μ¬μ΄λ λ λλ§μ μν νλ μμν¬μ΄κΈ° λλ¬Έμ, μλ²μμ μ¬μ μ λκ²¨μ£Όλ index νμΌμ λ°νμΌλ‘ λ λλ§ν©λλ€. λ°λΌμ λΈλΌμ°μ  νκ²½μμ νμν windowλ₯Ό μ λ¬λ°κΈ° μ μ global νκ²½μμ ν΄λΉ μ΄νλ¦¬μΌμ΄μμ΄ μ€νλλ κ² κ°μ΅λλ€.</p>

<a href="https://www.google.com/search?q=window+is+not+defined+next&rlz=1C5CHFA_enKR920KR920&oq=wind&aqs=chrome.0.69i59l2j69i57j69i59l2j69i60l3.2932j0j7&sourceid=chrome&ie=UTF-8">κ΅¬κΈλ§: window is not defined next</a>

<p>κ΅¬κΈλ§μ ν΅ν΄ μ°Ύμ λ³Έ κ²°κ³Ό ν΄κ²° λ°©λ²μ window κ°μ²΄κ° undefinedμΌ κ²½μ°μ λ°μν  μ½λλ₯Ό μΆκ°νλ κ²μλλ€.</p>

```tsx
export default function AuthLogin() {

  // window κ° undefined λ©΄, λ΄λΆ λΈλ‘μ μ½λλ₯Ό μ€νν΄μ€
    if (typeof window !== "undefined") {
      var { Kakao } = window;
    }
    const kakaoLogin = () => {
    Kakao.init(`${process.env.NEXT_PUBLIC_KAKAO_KEY}`)
    ...
```

<p>μ΄μ  μ λ§ μ μμ μΌλ‘ μ€νμ΄ λ©λλ€</p>

<img width="500" src="./images/5.png" alt="success"/>

<p>λ‘κ·ΈμΈ κ³Όμ μ ν΅ν΄ μ»μ μ λ³΄λ₯Ό λ°νμΌλ‘ μλ²μ μ°λνμ¬ λ©μ§ μλΉμ€λ₯Ό κΈ°νν΄λ³΄μΈμ!</p>
