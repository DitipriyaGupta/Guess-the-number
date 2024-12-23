import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(1);
  const [lesserNumber, setLesserNumber] = useState(false);
  const [higherNumber, setHigherNumber] = useState(false);
  const [correctNumber, setCorrectNumber] = useState(false);

  const randomNumber = Math.floor(Math.random() * 100);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };
  const handleCheck = () => {
    if (randomNumber > inputValue) {
      setLesserNumber(true);
      setHigherNumber(false);
    } else if (randomNumber < inputValue) {
      setLesserNumber(false);
      setHigherNumber(true);
    } else {
      setCorrectNumber(true);
      setLesserNumber(false);
      setHigherNumber(false);
    }
  };
  return (
    <>
      <p>Guess a Number between 0 and 100</p>
      <input type="text" value={inputValue} onChange={handleInput} />
      <br />
      <button onClick={() => setInputValue(1)}>Reset</button>
      <button onClick={handleCheck}>Check</button>
      <br />
      {lesserNumber && <p>The number is lesser than actual</p>}
      {higherNumber && <p>The number is higher than actual</p>}
      {correctNumber && <p>The number is correct!!!</p>}
    </>
  );
}

export default App;
