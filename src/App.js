import { useState } from 'react';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { Counter } from './components/Counter';

function App() {
  const [name, setName] = useState('');
  return (
    <>
      <MyComponent name={name} setName={setName} />
      <Counter />
    </>
  );
}

export default App;
