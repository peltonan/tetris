import './App.css';
import Game from "./components/Game";
import { useEffect } from 'react';

// Tetris Game by Restful Coder//


function App() {
  useEffect(() => {
    document.title = "TETRIS"
  }, []);
  return (

    <div className="App">
      <Game rows={20} columns={10} />
    </div>
  );
}

export default App;
