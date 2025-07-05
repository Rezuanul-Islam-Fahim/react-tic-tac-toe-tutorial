import SquareButton from "./SquareButton";
import { getWinner } from "./helpers.js";

const Board = ({ currentPlay, currentMoves, updateBoard }) => {
    const xMove = currentPlay % 2 === 0;
    let status;
    const handleClick = (i) => {
        if (getWinner(currentMoves) || currentMoves[i]) return;
        const newMoves = currentMoves.slice();

        if (xMove) {
            newMoves[i] = 'X';
        } else {
            newMoves[i] = 'O';
        }

        updateBoard(newMoves);
    }

    const winner = getWinner(currentMoves);
    if (winner) {
        status = "Winner: " + winner;
    } else {
        if (currentPlay !== 9) {
            status = "Next move: " + (xMove ? "X" : "O");
        } else {
            status = "Match drawn";
        }
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <SquareButton value={currentMoves[0]} onClick={() => handleClick(0)} />
                <SquareButton value={currentMoves[1]} onClick={() => handleClick(1)} />
                <SquareButton value={currentMoves[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <SquareButton value={currentMoves[3]} onClick={() => handleClick(3)} />
                <SquareButton value={currentMoves[4]} onClick={() => handleClick(4)} />
                <SquareButton value={currentMoves[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <SquareButton value={currentMoves[6]} onClick={() => handleClick(6)} />
                <SquareButton value={currentMoves[7]} onClick={() => handleClick(7)} />
                <SquareButton value={currentMoves[8]} onClick={() => handleClick(8)} />
            </div>
        </div>
    );
}

export default Board;