import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import DataForm from "../../components/DataForm";
import HeaderMain from "../../components/HeaderMain";
import { todoType } from "../../types";
import { MainWrapper } from "./style";

function Main() {
  const [datas, setDatas] = useState<todoType[]>([]);

  const API_URL = `https://jsonplaceholder.typicode.com/todos`;

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
    if (datas.length) console.log(datas);
  }, [datas]);

  const getAPI = useCallback(
    async (e) => {
      e.preventDefault();

      const result = await axios.get(API_URL);
      // console.log("result.data: ", result.data.slice(1, 30));
      setDatas(result.data.slice(1, 30));
    },
    [API_URL]
  );

  return (
    <MainWrapper>
      <HeaderMain />
      <button onClick={getAPI} style={BtnStyle}>
        Fetching Data!
      </button>
      <DataForm datas={datas} />
    </MainWrapper>
  );
}

export default Main;
