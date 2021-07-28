import React from "react";
import { todoType } from "../../types";

type Props = {
  datas: todoType[] | undefined;
};

function DataForm(props: Props) {
  const { datas } = props;

  return (
    <div style={{ marginTop: 50 }}>
      {datas &&
        datas.map((data) => (
          <div
            key={data.id}
            style={{
              border: "1px solid black",
              margin: "20px 0",
              padding: "0 20px",
            }}
          >
            <p style={{ fontWeight: "bolder" }}>userId: {data.userId}</p>
            <p style={{ fontWeight: "bolder" }}>title: {data.title}</p>
          </div>
        ))}
    </div>
  );
}

export default DataForm;
