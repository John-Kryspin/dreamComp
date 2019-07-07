import React, { useState, useEffect } from 'react'
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
  const [activeChampions, setActiveChampions] = useState([])

  const filterChampions = () => {
    let filteredChampions = championsArray.filter((champion) => {
      if (champion.name.toLowerCase().indexOf(championInput.toLowerCase()) !== -1)
        return true
      return false
    })
    console.log(filteredChampions)
    setChampions(filteredChampions)
  }
  const addToActiveChampion = (champion)=>{
    setActiveChampions([...activeChampions, champion])
  } 
  useEffect(() => {
   let championClasses = []
   for(const champion of activeChampions){
     championClasses.push(...champion.class)
   }
   let blademasterCount = 0
   for(const championClass of championClasses){
     console.log(championClass)
      if(championClass === "Sorcerer")
        blademasterCount ++
   }
   if(blademasterCount>=2){
     console.log("YOU HAVE SORCERER SYNERGY")
   }
  }, [activeChampions]);
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
        {champions.map((champion) => {
          return <Box name={champion.name} keyName={champion.key} addToActiveChampion={()=>addToActiveChampion(champion)} championInfo={champion}></Box>
        })}
      </div>)
      }
    </div>
  )
}
export default Container