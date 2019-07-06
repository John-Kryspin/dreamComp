import React from 'react'
import Box from './Box'
import championsJson from '../champions.json'
let championsArray = []
for(let championName in championsJson){
  championsArray.push(championsJson[championName])
}
console.log(championsArray)
const rowStyle = { overflow: 'hidden', clear: 'both', display: 'inline' }
const Container = () => {
  return(
    // ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json
  <div>
    <div style={rowStyle}>
    
    {championsArray.map(({name,key})=>{
      return <Box name={name} keyName={key}></Box>
    })}
    </div>
  </div>
)}
export default Container