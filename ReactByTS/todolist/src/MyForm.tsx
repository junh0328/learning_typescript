import React, { useState } from 'react';

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

const MyForm = ({ onSubmit }: MyFormProps): any => {
  // 타입 또는 인터페이스에서 만든 메소드를 사용할 때 {} 중괄호에 해당 함수를 넣어 선언
  const [form, setForm] = useState({
    name: '',
    description: '',
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: '',
    });
  };

  return (
    <div style={{ marginTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={onChange} style={{ marginRight: 10 }} />
        <input name="description" value={description} onChange={onChange} style={{ marginRight: 10 }} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default MyForm;
