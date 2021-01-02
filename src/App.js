import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Home from './Pages/HomeScreen/Home';
import About from './Pages/AboutScreen/About';

function App() {  
  const [Step, setStep] = useState(0);
  const changePages = () => {
    if (Step) {
      setStep(0)
    } else {
      setStep(1)
    }
  }

  return (
    <div onClick={changePages} className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {Step === 0 ? <Home />: <About />}
    </div>
  );
}

export default App;
