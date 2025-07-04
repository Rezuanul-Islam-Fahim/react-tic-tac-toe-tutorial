import { useState } from "react";
import Board from "./Board";
import PlayHistory from "./PlayHistory";

const Game = () => {
    const [moves, setMoves] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xMove = currentMove % 2 === 0;

    const updateBoard = (currentMoves) => {
        const updatedMoves = [...moves, currentMoves];
        setMoves(updatedMoves);
        setCurrentMove(updatedMoves.length - 1);
    }

    return (
        <div className="game">
            <Board xMove={xMove}
                currentMoves={moves[currentMove]}
                updateBoard={updateBoard} />
            <PlayHistory moves={moves} />
        </div>
    );
}

export default Game;