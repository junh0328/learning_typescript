import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataForm from "components/DataForm";
import HeaderMain from "components/HeaderMain";
import { RootState } from "reducers";
import { FETCHING_TODOS_REQUEST } from "reducers/todos";
import { BtnWrapper, MainWrapper } from "./style";

function Main() {
  const dispatch = useDispatch();
  // 배열의 첫 번째 인덱스
  const [firstNum, setFirstNum] = useState(0);
  // 배열의 마지막 번째 인덱스
  const [lastNum, setLastNum] = useState(20);

  const { todos } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    console.log(firstNum, lastNum);
  }, [firstNum, lastNum]);

  useEffect(() => {
    if (todos.length) console.log("todos", todos);
  }, [todos]);

  const getAPI = () => {
    console.log("todos_request_start!");
    dispatch({
      type: FETCHING_TODOS_REQUEST,
      data: {
        first: firstNum,
        last: lastNum,
      },
    });
    updateNumber();
  };

  // useState로 받아오는 배열의 인덱스 추가
  const updateNumber = useCallback(() => {
    setFirstNum((num) => num + 20);
    setLastNum((num) => num + 20);
  }, []);

  return (
    <MainWrapper>
      <HeaderMain />
      {todos.length && <DataForm datas={todos} />}
      <BtnWrapper>
        <button onClick={getAPI}>Fetching Data!</button>
      </BtnWrapper>
    </MainWrapper>
  );
}

export default Main;
