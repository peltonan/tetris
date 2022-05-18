import { useState, useCallback } from "react";

// Tetris Game by Restful Coder//

export const useGameOver = () => {
    const [gameOver, setGameOver] = useState(true);

    const resetGameOver = useCallback(() => {
        setGameOver(false);
    }, []);

    return [gameOver, setGameOver, resetGameOver];
};