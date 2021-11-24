import React from 'react';
import styled from 'styled-components';
import pallete from '../../styles/pallete';

const Header: React.FC = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 52px;
    padding: 0 12px;
    border-bottom: 1px solid ${pallete.gray};
    h1 {
      font-size: 21px;
    }
  `;
  return (
    <Container>
      <h1>Junhee's TodoList</h1>
    </Container>
  );
};

export default Header;
