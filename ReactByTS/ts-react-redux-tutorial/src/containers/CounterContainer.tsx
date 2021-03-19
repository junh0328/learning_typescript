import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { decrease, increase, increaseBy } from '../modules/counter';

const CounterContainer = () => {
  // const count = useSelector((state: RootState) => state.counter.count);
  const { count } = useSelector((state: RootState) => state.counter); // 같은 useSelector 지만, 비구조화 할당을 통해 만듬
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <div>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} onIncreaseBy={onIncreaseBy} />
    </div>
  );
};

export default CounterContainer;
