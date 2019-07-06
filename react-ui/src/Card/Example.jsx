import React from 'react'
import Dustbin from './Dustbin'
import Box from './Box'
import championsJson from '../champions.json'
let championsArray = []
for(let championName in championsJson){
  championsArray.push(championsJson[championName])
}
console.log(championsArray)
const rowStyle = { overflow: 'hidden', clear: 'both' }
const Container = () => {
  return(
    // ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json
  <div>
    <div style={rowStyle}>
      <Dustbin />
    </div>
    <div style={rowStyle}>
      <Box name="Glass" />
      <Box name="Banana" />
      <Box name="Paper" />
    </div>
    {championsArray.map(({name,key})=>{
      return <Box name={name} keyName={key}></Box>
    })}
  </div>
)}
export default Container