import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const index: NextPage = () => (
  <Container>
    <h1>Hello Typescript</h1>
    <h2>Hello Typescript</h2>
    <p>Hello Typescript</p>
    <ul>
      <li>Hello Typescript</li>
    </ul>
    <a>Hello Typescript</a>
    <span>Hello Typescript</span>
  </Container>
);

export default index;
