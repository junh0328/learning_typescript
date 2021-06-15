import React from 'react';

type GreetingsProps = {
  name: string;
  optional?: string;
  onClick: (name: string) => void;
};

/*
1.const Greetings = () 내부에서 props로 전달 받은 name, optional, onClick 을 사용하기 위해서는 { ... } 중괄호로 감싸줘야 합니다
2.{ name : string, optional: string, onClick : (name:string) => void } 라고 중괄호 내에서 타입을 명시해도 되지만, 타입을 만들어 넣어주었습니다
3. onClick() 의 경우, 기존 함수를 상위 컴포넌트에서 전달 받았는데, 이를 그대로 호출하여 사용할수는 없습니다. 재정의가 필요합니다.
*/
function Greetings(props: GreetingsProps) {
  const { name, optional, onClick } = props;

  const handleClick = (name: string) => {
    onClick(name);
  };
  return (
    <div>
      Hello, {name}
      {optional && <p> {optional}</p>}
      <div>
        <button
          onClick={() => {
            handleClick(name);
          }}
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Greetings;
