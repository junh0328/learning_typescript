import React, { useCallback, useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

// props로 내려받은 함수 onInsert에도 입력받을 파라미터의 타입과 반환할 값의 타입을 지정해줘야 한다.
const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState('');

  // useState를 통해 state인 value 값을 상태관리 하기 위해서 onChange 프로퍼티를 이용한다.
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [value],
  );
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoInsert;
