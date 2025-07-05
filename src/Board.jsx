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
            {Array(3).fill(null).map((_, i) => (
                <div className="board-row">
                    {Array(3).fill(null).map((_, j) => {
                        const index = i * 3 + j;

                        return (
                            <SquareButton
                                value={currentMoves[index]}
                                onClick={() => handleClick(index)} />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default Board;