import Place from "./Place/Place"
import classes from './PlaceList.module.css'
import PlayAgain from "./PlayAgain/PlayAgain"

const PlaceList = ({ arrays, player, setArrays, setPlayer, clearArray, win, setWin, value }) => {
    let theEnd = true
    return (
        <div >
            <h2 className={classes.player}>
                {value === 'bot'
                    ? ''
                    : win === ' '
                        ? `Player: ${player}`
                        : `Won: ${win}`
                }

            </h2>

            {
                arrays.map((array, indexG) =>
                (
                    <div className={classes.line}>
                        {array.map((el, indexV) => {
                            if (el === ' ') theEnd = false
                            return (<Place
                                gameMod={value}
                                key={indexV + indexG}
                                child={el}
                                player={player}
                                arrays={arrays}
                                setArrays={setArrays}
                                setPlayer={setPlayer}
                                indexG={indexG}
                                indexV={indexV}
                                setWin={setWin}
                                win={win} />)
                        })}
                    </div>
                ))
            }

            <PlayAgain
                setArrays={setArrays}
                setPlayer={setPlayer}
                setWin={setWin}
                clearArray={clearArray}
                win={win}
                theEnd={theEnd}
            />
        </div>
    )
}

export default PlaceList