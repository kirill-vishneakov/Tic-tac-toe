const bot = (arrays, indexG, indexV, player, win, setWin, setArrays, setPlayer) => {
    if (arrays[indexG][indexV] === ' ') {
        arrays[indexG][indexV] = player
    }
    player = player === 'X' ? 'O' : 'X'
    setPlayer(player)

    if (arrays[0][1] === ' ') {
        arrays[0][1] = player
    }

    player = player === 'X' ? 'O' : 'X'
    setPlayer(player)
    setArrays(arrays)
}

export default bot