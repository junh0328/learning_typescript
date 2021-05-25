import React from 'react';

type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
};

const Greetings = ({ name, optional, onClick }: GreetingsProps) => {
  const handleClick = () => {
    onClick(name);
  };
  return (
    <div>
      Hello, {name}
      {optional && <p> {optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Greetings;
