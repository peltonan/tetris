import "./Menu.css";


const Menu = ({ onClick }) => {
    return (
        <>
            <div>
                <h1 className="GameTitle">TETRIS</h1>
            </div>
            <div className="Menu">
                <button className="Button" onClick={onClick} >
                    Play
                </button>
            </div>
        </>)


}

export default Menu;