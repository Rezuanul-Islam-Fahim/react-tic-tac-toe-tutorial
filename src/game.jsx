import { useState } from "react";
import Board from "./Board";
import PlayHistory from "./PlayHistory";

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentPlay, setCurrentPlay] = useState(0);
    const xMove = currentPlay % 2 === 0;
    const currentMoves = history[currentPlay];

    const updateBoard = (e) => {
        const updatedMoves = [...history.slice(0, currentPlay + 1), e];
        setHistory(updatedMoves);
        setCurrentPlay(updatedMoves.length - 1);
    }

    const rewindMove = (i) => {
        setCurrentPlay(i);
    }

    return (
        <div className="game">
            <Board xMove={xMove}
                currentMoves={currentMoves}
                updateBoard={updateBoard} />
            <PlayHistory history={history} rewindMove={rewindMove} />
        </div>
    );
}

export default Game;