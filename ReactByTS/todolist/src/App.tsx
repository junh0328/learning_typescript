import React from 'react';
import Counter from './Counter';
import Greetings from './Greetings';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

const App: React.FC = () => {
  const onClick = (name: string) => {
    alert(`${name} say hello~`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    alert(`name : ${form.name} \ndescription : ${form.description}`);
  };
  return (
    <div>
      <Greetings name="준희" optional="옵션입니다" onClick={onClick} />
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit} />
      <hr />
      <SampleProvider>
        <ReducerSample />
      </SampleProvider>
    </div>
  );
};

export default App;
