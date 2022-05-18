import "./BoardCell.css";

// Tetris Game by Restful Coder//

const BoardCell = ({ cell }) => (
    <div className={`BoardCell ${cell.className}`}>
        <div className="Sparkle"></div>
    </div>
);

export default BoardCell;