const PlayHistory = ({ moves }) => {
    return (
        <div className="game-info">
            <ol>
                {moves.map((v, i) => {
                    const description = i > 0 ?
                        `Go to move #${i}` :
                        "Go to game start";

                    return (
                        <li>
                            <button >{description}</button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

export default PlayHistory;