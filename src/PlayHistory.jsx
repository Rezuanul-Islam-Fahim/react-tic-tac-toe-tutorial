import { getCurrentPos } from "./helpers";

const PlayHistory = ({ history, rewindMove }) => {
    return (
        <div className="game-info">
            <ol>
                {history.map((v, i) => {
                    const currentPos = getCurrentPos(history, i);
                    const description = i > 0 ?
                        `Go to move #${i}${currentPos}` :
                        "Go to game start";

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