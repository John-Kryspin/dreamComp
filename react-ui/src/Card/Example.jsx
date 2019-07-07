import React, { useState } from 'react'
import Box from './Box'
import championsJson from '../champions.json'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

let championsArray = []
for (let championName in championsJson) {
  championsArray.push(championsJson[championName])
}
console.log(championsArray)
const Container = () => {
  const [champions, setChampions] = useState([])
  const [championInput, setChampionInput] = useState("")
  const filterChampions = () => {
    let filteredChampions = championsArray.filter((champion) => {
      if (champion.name.toLowerCase().indexOf(championInput.toLowerCase()) !== -1)
        return true
      return false
    })
    console.log(filteredChampions)
    setChampions(filteredChampions)
  }
  return (
    // ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json

    <div id="championsContainer">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Champion Name"
          aria-label="Champion Name"
          value={championInput}
          onChange={(event) => {
            setChampionInput(event.target.value)
          }}
          onKeyPress={(event) => {
            filterChampions()
          }}
        />
      </InputGroup>
      {champions.length > 0 && (<div id="availableChampions">
        {champions.map(({ name, key }) => {
          return <Box name={name} keyName={key}></Box>
        })}
      </div>)
      }
    </div>
  )
}
export default Container