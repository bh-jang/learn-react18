import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleAutomaticBetchingClick = () => {
    setCount(pre => pre + 1);
    setTimeout(() => {
      setCount(pre => pre + 1);
      setCount(pre => pre + 1);
    }, 1000)
    setTimeout(() => {
      setCount(pre => pre + 1);
      setCount(pre => pre + 1);
    }, 1000)
  }

  useEffect(() => {
    if (count > 0) {
      console.log('render check log')
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginBottom: '32px' }}>
          {count}
        </div>
        <button onClick={handleAutomaticBetchingClick}>Automatic Betching</button>
      </header>
    </div>
  );
}

export default App;
