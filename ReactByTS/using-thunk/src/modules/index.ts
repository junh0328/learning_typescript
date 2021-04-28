import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = combineReducers({
  counter,
});

// 루트 리듀서를 내보내주세요.
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;

/*
js 에서는 export default rootReducer; 를 통해 rootReducer를 export 하고 끝나지만,
ts 에서는 이 rootReducer에 대한 리턴 타입을 한 번 더 정의해줘야 합니다.
*/
