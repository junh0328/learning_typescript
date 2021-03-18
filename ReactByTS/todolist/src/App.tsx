import React from 'react';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    alert(`${name} say hello~`);
  };
  return <Greetings name="준희" optional="옵션입니다" onClick={onClick} />;
}

export default App;
