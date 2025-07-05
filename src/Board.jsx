import SquareButton from "./SquareButton";
import { getCurrentPos, getWinner } from "./helpers.js";

const Board = ({ currentPlay, history, updateBoard }) => {
    let status;
    const currentMoves = history[currentPlay];
    const xMove = currentPlay % 2 === 0;
    const latestMove = getCurrentPos(history, currentPlay);

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
                <div key={i} className="board-row">
                    {Array(3).fill(null).map((_, j) => {
                        const index = i * 3 + j;
                        const isActive = latestMove &&
                            latestMove.row - 1 == i &&
                            latestMove.column - 1 == j;

                        return (
                            <SquareButton
                                key={index}
                                isActive={isActive}
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