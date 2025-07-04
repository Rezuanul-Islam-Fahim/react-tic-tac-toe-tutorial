import SquareButton from "./SquareButton";

const Board = ({moves}) => {
    return (
        <div>
            <div className="board-row">
                <SquareButton value={moves[0]} onClick={() => { }} />
                <SquareButton value={moves[1]} onClick={() => { }} />
                <SquareButton value={moves[2]} onClick={() => { }} />
            </div>
            <div className="board-row">
                <SquareButton value={moves[3]} onClick={() => { }} />
                <SquareButton value={moves[4]} onClick={() => { }} />
                <SquareButton value={moves[5]} onClick={() => { }} />
            </div>
            <div className="board-row">
                <SquareButton value={moves[6]} onClick={() => { }} />
                <SquareButton value={moves[7]} onClick={() => { }} />
                <SquareButton value={moves[8]} onClick={() => { }} />
            </div>
        </div>
    );
}

export default Board;