import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import ReduxCounter from './ReduxCounter'

const newRequest = () => {
  console.log("Network Request");
}

function App() {

  const [count, setCount] = useState(0)
  const[fruit, updateFruit] = useState("apple")

  // ComponentDidMount
  useEffect(() => {
    newRequest()
  }, [])

  // ComponentDidUpdate
  useEffect(() => {
    console.log("ComponentDidUpdate");
  })

  // ShouldComponentUpdate
  useEffect(() => {
    console.log("Count gets an update");
  }, [count])



  return (
    <div className="App">
      <header className="App-header">
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
        <p>You have {count} {fruit}</p>
        { count < 1 }
        <button
          onClick={() => {
            const incrementedValue = count + 1
            setCount(incrementedValue)
            if (incrementedValue > 1) {
              updateFruit("apples")
            }
          }}>+ 1</button>
          <br />
          <ReduxCounter />
      </header>
    </div>
  );
}

export default App;
