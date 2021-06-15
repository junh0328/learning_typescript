// 사용자에게 보여지는 UI, 프레젠테이셔널 컴포넌트
type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
  onReset: () => void;
};

function Counter({
  count,
  onIncrease,
  onDecrease,
  onIncreaseBy,
  onReset,
}: CounterProps) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
      <button onClick={onReset}>reset</button>
    </div>
  );
}

export default Counter;
