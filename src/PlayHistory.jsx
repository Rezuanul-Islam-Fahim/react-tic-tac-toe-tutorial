const PlayHistory = ({ history, rewindMove }) => {
    return (
        <div className="game-info">
            <ol>
                {history.map((v, i) => {
                    const description = i > 0 ?
                        `Go to move #${i}` :
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