import SquareButton from "./SquareButton";
import { getWinner } from "./helpers.js";

const Board = ({ xMove, moves, updateMove }) => {
    let status;
    const handleClick = (i) => {
        if (getWinner(moves) || moves[i]) return;

        updateMove(i);
    }

    const winner = getWinner(moves);

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next move: " + (xMove ? "X" : "O");
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <SquareButton value={moves[0]} onClick={() => handleClick(0)} />
                <SquareButton value={moves[1]} onClick={() => handleClick(1)} />
                <SquareButton value={moves[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <SquareButton value={moves[3]} onClick={() => handleClick(3)} />
                <SquareButton value={moves[4]} onClick={() => handleClick(4)} />
                <SquareButton value={moves[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <SquareButton value={moves[6]} onClick={() => handleClick(6)} />
                <SquareButton value={moves[7]} onClick={() => handleClick(7)} />
                <SquareButton value={moves[8]} onClick={() => handleClick(8)} />
            </div>
        </div>
    );
}

export default Board;