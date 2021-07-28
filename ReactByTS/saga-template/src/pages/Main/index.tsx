import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataForm from "../../components/DataForm";
import HeaderMain from "../../components/HeaderMain";
import { RootState } from "../../reducers";
import { FETCHING_TODOS_REQUEST } from "../../reducers/todos";
import { MainWrapper } from "./style";

function Main() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todos);

  const BtnStyle = useMemo(
    () => ({
      cursor: "pointer",
      fontSize: "1rem",
      padding: 10,
      border: "none",
      background: "hotPink",
      color: "black",
    }),
    []
  );

  useEffect(() => {
    if (todos.length) console.log("todos", todos);
  }, [todos]);

  const getAPI = () => {
    console.log("todos_request_start!");
    dispatch({
      type: FETCHING_TODOS_REQUEST,
    });
  };

  return (
    <MainWrapper>
      <HeaderMain />
      <button onClick={getAPI} style={BtnStyle}>
        Fetching Data!
      </button>
      <DataForm datas={todos} />
    </MainWrapper>
  );
}

export default Main;
