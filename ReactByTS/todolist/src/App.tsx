import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    alert(`${name} say hello~`);
  };
  return (
    <div>
      <Greetings name="준희" optional="옵션입니다" onClick={onClick} />
      <Counter />
    </div>
  );
}

export default App;
