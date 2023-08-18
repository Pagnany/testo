import './App.css';

function App() {
  return (
   <Board />
  );
}

export default App;

function Board() {
  const numRows = 3;
  const numCols = 3;

  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const squares = [];

    for (let j = 0; j < numCols; j++) {
      squares.push(<Square key={`${i}-${j}`} />);
    }

    rows.push(
      <div className='board__row' key={i}>
        {squares}
      </div>
    );
  }

  return <div className='board'>{rows}</div>;
}

function Square () {
  return (
    <button className='square'></button>
  )
}