import Menu from "./Menu";
import Tetris from "./Tetris";

import { useGameOver } from "../hooks/useGameOver";

<header>
    <div>
        <h1>TETRIS</h1>
    </div>
</header>

const Game = ({ rows, columns }) => {
    const [gameOver, setGameOver, resetGameOver] = useGameOver();

    const start = () => resetGameOver();

    return (
        <div className="Game">
            {gameOver ? (
                <Menu onClick={start} />
            ) : (
                <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
            )}
        </div>
    );
};

export default Game;
