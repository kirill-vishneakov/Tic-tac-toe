import classes from './Place.module.css'
import bot from './bot'
import device from './device'
const Place = ({ arrays, setArrays, indexG, indexV, player, child, setPlayer, win, setWin, gameMod }) => {
    const onClick = () => {
        if (gameMod === 'device') {
            device(arrays, indexG, indexV, player, win, setWin, setArrays, setPlayer)
        } else if (gameMod === 'bot') {
            bot(arrays, indexG, indexV, player, win, setWin, setArrays, setPlayer)
        }
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