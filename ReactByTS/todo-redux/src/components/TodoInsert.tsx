import React, { ChangeEvent, FormEvent, useState } from 'react';

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  const [value, setValue] = useState('');

  // useState를 통해 state인 value 값을 상태관리 하기 위해서 onChange 프로퍼티를 이용한다.
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  };
  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoInsert;
