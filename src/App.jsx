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
  const [value, setValue] = useState('bot')
  return (
    <div>
      <Header />
      <div className="selects">
        <select
          value={value}
          onChange={(event) => setValue(event.target.value)}>
          <option disabled>Game Mode</option>
          <option value="device">On one device</option>
          <option value="bot">With a bot</option>
        </select>
      </div>
      <PlaceList
        value={value}
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
