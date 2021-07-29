import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 100%;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;

  & button {
    cursor: pointer;
    font-size: 1rem;
    padding: 20px;
    border: none;
    background-color: hotpink;
    color: black;
    border-radius: 20px;
    transition: 500ms;

    &:hover {
      background-color: black;
      color: hotpink;
    }
  }
`;

//         style={{ display: "flex", justifyContent: "center", margin: "50px 0" }}
