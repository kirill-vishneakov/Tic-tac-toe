import classes from './Place.module.css'
const Place = ({ arrays, setArrays, indexG, indexV, player, child, setPlayer, win, setWin }) => {
    const checkWin = (list) => {
        return list.some(array => {
            const result = array.every((el) => {
                return el === player
            })
            if (result) {
                if (player === 'X') {
                    array[0] = 'Х'
                    array[1] = 'Х'
                    array[2] = 'Х'
                } else {
                    array[0] = 'О'
                    array[1] = 'О'
                    array[2] = 'О'
                }
            }
            return result
        })
    }

    const onClick = () => {
        if (arrays[indexG][indexV] === ' ') {
            arrays[indexG][indexV] = player
            const vertical = [
                [arrays[0][0], arrays[1][0], arrays[2][0]],
                [arrays[0][1], arrays[1][1], arrays[2][1]],
                [arrays[0][2], arrays[1][2], arrays[2][2]],
            ]

            const dioganal = [
                [arrays[0][0], arrays[1][1], arrays[2][2]],
                [arrays[0][2], arrays[1][1], arrays[2][0]],
            ]
            if (checkWin(arrays)) {
                win = player
            } else if (checkWin(vertical)) {
                arrays = [
                    [vertical[0][0], vertical[1][0], vertical[2][0]],
                    [vertical[0][1], vertical[1][1], vertical[2][1]],
                    [vertical[0][2], vertical[1][2], vertical[2][2]],
                ]
                win = player
            } else if (checkWin(dioganal)) {
                arrays = [
                    [dioganal[0][0], arrays[0][1], dioganal[1][0]],
                    [arrays[1][0], dioganal[0][1] === arrays[1][1] ? dioganal[1][1] : dioganal[0][1], arrays[1][2]],
                    [dioganal[1][2], arrays[2][1], dioganal[0][2]],
                ]
                win = player
            }

            player = player === 'X' ? 'O' : 'X'
        }
        setWin(win)
        setArrays(arrays)
        setPlayer(player)
    }
    return (
        <button
            disabled={win !== ' '}
            className={[classes.btn, classes[child]].join(' ')}
            onClick={onClick}>
            {child}
        </button >
    )
}

export default Place