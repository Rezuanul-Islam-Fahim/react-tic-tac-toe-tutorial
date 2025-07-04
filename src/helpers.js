export const getWinner = (move) => {
    const winnerList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winnerList.length; i++) {
        const [a, b, c] = winnerList[i];

        if (move[a] && move[a] === move[b] && move[a] === move[c]) {
            return move[a];
        }
    }

    return null;
}