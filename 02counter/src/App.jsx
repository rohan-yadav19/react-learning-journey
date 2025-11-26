import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 5;
  const addValue = () => {
    //console.log("Button Clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  };
  const removeValue = () => {
    //console.log("Button Clicked", counter);
    counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>React</h1>
      <h5>Counter Value:{counter}</h5>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value:{counter}</button>
      <p>footer {counter}</p>
    </>
  );
}

export default App;
