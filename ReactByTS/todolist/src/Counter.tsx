import React, { useState } from 'react';

const Counter = () => {
  // const [count, setCount] = useState<number>(0); 제네릭을 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 상관없다.
  // 상태가 null 일 수도 있고 아닐 수도 있을 때 Generics 를 사용하면 좋습니다.

  /*
  type Information = { name: string; description: string};
  const [info, setInformation] = useState <Information | null >(null);
  */

  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease} style={{ marginRight: 10 }}>
        + 1
      </button>
      <button onClick={onDecrease}>- 1</button>
    </div>
  );
};

export default Counter;
