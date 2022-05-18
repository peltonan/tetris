import "./Tetris.css";

import Board from "./Board";
import GameController from "./GameController";
import GameStats from "./GameStats";
import Previews from "./Previews";

import { useBoard } from "../hooks/useBoard";
import { useGameStats } from "../hooks/useGameStats";
import { usePlayer } from "../hooks/usePlayer";

// Tetris Game by Restful Coder//

const Tetris = ({ rows, columns, setGameOver }) => {
    const [gameStats, addLinesCleared] = useGameStats();
    const [player, setPlayer, resetPlayer] = usePlayer();
    const [board, setBoard] = useBoard({
        rows,
        columns,
        player,
        resetPlayer,
        addLinesCleared
    });

    return (
        <div className="Tetris">
            <div className="GameWrapper">
                <div></div>
                <Board board={board} />
                <div>
                    <p className="NextBlock">Next Block</p>
                    {/*  <p className="ArrowDown">&#8595;</p> */}
                    <Previews tetrominoes={player.tetrominoes} />
                    <GameStats gameStats={gameStats} />
                </div>
            </div>
            <GameController
                board={board}
                gameStats={gameStats}
                player={player}
                setGameOver={setGameOver}
                setPlayer={setPlayer}
            />

        </div>
    );
};

export default Tetris;