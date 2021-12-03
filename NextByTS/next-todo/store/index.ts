import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from "react-redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todo from "./todo";

const rootReducer = combineReducers({
  todo: todo.reducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

//* 스토어의 타입
export type RootState = ReturnType<typeof rootReducer>;

//* 타입 지원되는 커스텀 useSelector 만들기
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const initStore = () => {
  return configureStore({
    reducer,
    devTools: true,
  });
};

export const wrapper = createWrapper(initStore);
