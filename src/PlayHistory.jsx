import { getCurrentPos } from "./helpers";

const PlayHistory = ({ history, rewindMove }) => {
    return (
        <div className="game-info">
            <ol>
                {history.map((v, i) => {
                    const currentPos = getCurrentPos(history, i);
                    let description = i > 0 ?
                        `Go to move #${i}` :
                        "Go to game start";

                    if (currentPos) {
                        description += ` (${currentPos.row}, ${currentPos.column})`
                    }

                    return (
                        <li key={i}>
                            <button onClick={() => rewindMove(i)}>
                                {description}
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

export default PlayHistory;