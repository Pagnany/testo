import "./App.css";
import { useState } from "react";

function App() {
  return <Board />;
}

export default App;

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    switch (value) {
      case null:
        setValue("X");
        break;
      case "X":
        setValue("O");
        break;
      case "O":
        setValue(null);
        break;
      default:
        setValue(null);
        break;
    }
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
