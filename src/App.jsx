import React, { useState } from "react"
import './styles/App.css'
import PlaceList from "./components/PlaceList/PlaceLict";
import Header from "./components/Header/Header";

const App = () => {
  const [player, setPlayer] = useState('X')
  const clearArray = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']]
  const [arrays, setArrays] = useState(clearArray)
  const [win, setWin] = useState(' ')
  return (
    <div>
      <Header />
      <div className="selects">
        <select>
          <option disabled value="gameMode">Game Mode</option>
          <option value="device">On one device</option>
          <option value="bot">With a bot</option>
        </select>
      </div>
      <PlaceList
        arrays={arrays}
        setArrays={setArrays}
        player={player}
        setPlayer={setPlayer}
        clearArray={clearArray}
        win={win}
        setWin={setWin} />
    </div>
  );
}

export default App;
