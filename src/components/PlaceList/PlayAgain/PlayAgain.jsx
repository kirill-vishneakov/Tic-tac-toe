import classes from './PlayAgain.module.css'
const PlayAgain = ({ setArrays, setPlayer, clearArray, setWin, win, theEnd }) => {
    return (
        <div className={classes.btns}>
            <button
                className={classes.btn}
                disabled={win === ' ' && !theEnd}
                onClick={() => {
                    setArrays(clearArray)
                    setPlayer('X')
                    setWin(' ')
                }}>
                Play again
            </button>
        </div>

    )
}

export default PlayAgain