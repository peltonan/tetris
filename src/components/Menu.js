import "./Menu.css";

// Tetris Game by Restful Coder//

const Menu = ({ onClick }) => {
    return (
        <>
            <div>
                <h1 className="GameTitle">TETRIS</h1>
                <h2>Instructions</h2>
                <p>Press <b>Play</b> to <b>Start the Game</b></p>
                <p>Use <b>Arrow Keys</b> to <b>Move</b> and <b>Rotate</b></p>
                <p>Use <b>Space</b> to <b>Fast Drop</b></p>
                <p>Press <b>P</b> to <b>Pause</b></p>
                <p>Press <b>Q</b> to <b>Quit</b></p>
            </div>
            <div className="Menu">
                <button className="Button" onClick={onClick} >
                    Play
                </button>
            </div>
        </>)


}

export default Menu;