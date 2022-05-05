import "./GameController.css";

const GameController = ({
    board,
    gameStats,
    player,
    setGameOver,
    setPlayer
}) => {
    const onKeyUp = ({ code }) => {

    }
    const onKeyDown = ({ code }) => { }
    return (
        <input
            className="GameController"
            type="text"
            onKeyDown={onKeyDown}
            onKeyUp={onKeyUp}
            autofocus
        />
    );

}



export default GameController;