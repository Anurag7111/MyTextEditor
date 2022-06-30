import Navbar from './Component/Navbar';
import TextBox from './Component/TextBox';
import './App.css';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode  === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#071e3f';
    }
    else {
      setMode('light');
      // document.body.style.backgroundColor = '#b3e2ec8c';
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextBox heading="Enter you text below..." mode={mode}/>
    </>
  );
}

export default App;
