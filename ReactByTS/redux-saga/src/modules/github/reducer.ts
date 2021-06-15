import { createReducer } from 'typesafe-actions';
import { ActionType } from 'typesafe-actions';
import { createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

/* actions.ts 로 분리하지 않고 작성할 수도 있습니다  */

export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
};
export type GithubAction = ActionType<typeof getUserProfileAsync>;

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE' as const;
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS' as const;
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR' as const;

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
)<undefined, GithubProfile, AxiosError>();

const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};

const github = createReducer<GithubState>(initialState, {
  [GET_USER_PROFILE]: (state) => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default github;
