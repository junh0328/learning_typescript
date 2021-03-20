import React from 'react';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

interface ICounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
}
// type aliases 를 사용하면 타입을 지정하지 않고, 선언만으로도 사용할 수 있지만, CounterProps 타입 aliases에서는 타입을 선언해줬습니다

const Counter = ({ count, onIncrease, onDecrease, onIncreaseBy }: ICounterProps) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
};

export default Counter;
