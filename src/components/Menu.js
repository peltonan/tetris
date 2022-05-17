import "./Menu.css";

<div>
    <h1 className="GameTitle">TETRIS</h1>
</div>
const Menu = ({ onClick }) => {
    return (
        <div className="Menu">
            <button className="Button" onClick={onClick} >
                Play
            </button>
        </div>)


}

export default Menu;