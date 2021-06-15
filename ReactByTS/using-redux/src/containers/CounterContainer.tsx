// 컨테이너 컴포넌트 , 프레젠테이셔널 컴포넌트에서 요청되는 함수에 대한 작동을 상태관리 도구(redux)에게 보내는 부분

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy, reset } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  const onReset = () => {
    dispatch(reset());
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
      onReset={onReset}
    />
  );
};

export default CounterContainer;
