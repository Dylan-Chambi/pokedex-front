import { useState } from 'react';
import './App.css';
import { MyComponent } from './components/MyComponent';

function App() {
  const [name, setName] = useState('');
  return (
      <MyComponent name={name} setName={setName} />
  );
}

export default App;
