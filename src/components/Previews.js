import React from "react";

import Preview from "./Preview";

// Tetris Game by Restful Coder//

const Previews = ({ tetrominoes }) => {
    const previewTetrominoes = tetrominoes
        .slice(1 - tetrominoes.length)
        .reverse();

    return (
        <div className="PreviewWrapper">
            {previewTetrominoes.map((tetromino, index) => (
                <Preview tetromino={tetromino} index={index} key={index} />
            ))}
        </div>
    );
};

export default React.memo(Previews);
