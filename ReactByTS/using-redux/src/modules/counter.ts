import produce from 'immer';

// 액션 타입을 선언합니다
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;
const RESET = 'counter/RESET' as const;

// 액션 생성함수를 선언합니다
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (differnce: number) => ({
  type: INCREASE_BY,
  // 액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일합니다
  // 이는 FSA (https://github.com/redux-utilities/flux-standard-action) 라는 규칙인데
  // 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
  // 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련돤 라이브러리를 사용 할 수 있게 해줍니다.
  // 다만, 무조건 꼭 따를 필요는 없습니다.
  payload: differnce,
});

export const reset = () => ({
  type: RESET,
});

// 모든 액션 겍체들에 대한 타입을 준비해줍니다.
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
// 상단부에서 액션타입을 선언 할 떄 as const 를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>
  | ReturnType<typeof reset>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type CounterState = {
  count: number;
};

// 초기상태를 선언합니다.
const initialState: CounterState = {
  count: 0,
};

// 리듀서를 작성합니다.
// 리듀서에서는 state 와 함수의 반환값이 일치하도록 작성하세요.
// 액션에서는 우리가 방금 만든 CounterAction 을 타입으로 설정합니다.
const counter = (
  state: CounterState = initialState,
  action: CounterAction,
): CounterState =>
  produce(state, (draft) => {
    switch (action.type) {
      case INCREASE: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
        draft.count = draft.count + 1;
        break;
      case DECREASE:
        draft.count = draft.count - 1;
        break;
      case INCREASE_BY:
        // return { count: state.count + action.payload };
        draft.count = draft.count + action.payload;
        break;
      case RESET:
        draft.count = 0;
        break;
      default:
        return state;
    }
  });

export default counter;

/*
원래 리듀서 구조에서 typescript 변환시 추가되는 부분

1. initialState로 사용될 상태(state) 값에 대한 타입 👊🏼 :CounterState 
2. action 들의 상태를 정의해놓은 타입 👊🏼 :CounterAction
3. counter2 함수를 통해 리턴될 결과물에 대한 타입 👊🏼 :CounterState

function counter2(state = initialState, action) {
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
}
 */
