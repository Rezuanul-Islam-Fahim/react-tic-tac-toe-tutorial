import { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [moves, setMoves] = useState(Array(9).fill(null));
    const [currentMove, setCurrentMode] = useState(0);
    const xMove = currentMove % 2 === 0;

    const updateMove = (ind) => {
        setMoves(v => v.map((e, i) => i == ind ? xMove ? 'X' : 'O' : e));
        setCurrentMode(v => ++v);
    }

    return (
        <div className="game">
            <Board xMove={xMove} moves={moves} updateMove={updateMove} />
        </div>
    );
}

export default Game;