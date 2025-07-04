import { useState } from "react";
import Board from "./Board";

const Game = () => {
    const moves = Array(9).fill(null);
    const [currentMove, setCurrentMove] = useState(0);

    return (
        <div className="game">
            <Board moves={moves} />
        </div>
    );
}

export default Game;