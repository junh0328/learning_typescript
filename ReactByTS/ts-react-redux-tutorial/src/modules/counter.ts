// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

// 액션 생성함수를 선언합니다
// export const increase = () => ({
//   type: INCREASE,
// });

// 🌟 같은 함수이지만 중괄호를 사용했기 때문에 return 문을 통해 해당 반환 값을 적어주어야 한다.
export const increase = () => {
  return {
    type: INCREASE,
  };
};

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (diff: number) => ({
  // 파라미터로 받는 diff 는 difference의 약어라 생각하면 좋다,
  // 이전 행동의 결과를 받아서 현재 state에 더해줄 것
  type: INCREASE_BY,
  payload: diff,
});

// ReturnType은 interface를 대신하여 사용하는 타입 선언이며, 중복을 제거하는 기능을 합니다.
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>;

type CounterState = {
  // Reducer의 initialState의 타입
  count: number;
  // count : number = 0; 이라 작성할 경우 [형식 리터럴 속성에는 이니셜라이저를 사용할 수 없습니다] 라는 오류가 발생한다.
};

const initialState: CounterState = {
  count: 0,
};

const counter = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch (action.type) {
    case INCREASE: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export default counter;
