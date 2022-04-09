import './App.css';
import { useState } from "react"
import CounterBox from "./CounterBox.js"

function App() {
  const [myCounter, setMyCounter] = useState(0);
  const names = ["a", "b", "c"]
  return (
    <div className="App">
      {names.map((name) => <CounterBox name={name} counter={myCounter} setCounter={setMyCounter} />)}
    </div>
  );
}

export default App;
