import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import pallete from "../styles/pallete";

const Container = styled.footer`
  width: 100%;
  height: 53px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${pallete.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .footer-button {
    font-size: 32px;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0;
    line-height: 0;
    outline: none;
  }
`;

const Footer: React.FC = () => {
  const router = useRouter();
  // router.pathname을 통해 Footer의 글자를 조건부 렌더링할 수 있다
  const isMain = router.pathname === "/";

  return (
    <Container>
      <button
        type="button"
        className="footer-button"
        onClick={() => router.push(isMain ? "/todo/add" : "/")}
      >
        {isMain ? "+" : "-"}
      </button>
    </Container>
  );
};

export default Footer;
