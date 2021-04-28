import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { GithubAction } from './types';
import { getUserProfile } from '../../api/github';
import { getUserProfileAsync } from './actions';

export function getUserProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
  return async (dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}

/*
ThunkAction 의 Generics 로는 다음 값들을 순서대로 넣어주어야 합니다. <TReturnType, TState, TExtraThunkArg, TBasicAction>

- TReturnType: thunk 함수에서 반환하는 값의 타입을 설정합니다.
- TState: 스토어의 상태에 대한 타입을 설정합니다.
- TExtraThunkArg: redux-thunk 미들웨어의 Extra Argument의 타입을 설정합니다.
- TBasicAction: dispatch 할 수 있는 액션들의 타입을 설정합니다.
- TReturnType 의 경우 아무것도 반환하지 않는다면 void 라고 넣으시면 됩니다. 현재 상황에서는 thunk 함수에서 async 를 사용하고 있으니 Promise<void>가 더 정확합니다. 하지만 그냥 void 라고 입력해도 문제가 되지는 않습니다.

*/

/*
thunk 함수가 아닌, ts 환경에서 제네릭에 대한 이해가 부족
*/
