import React from 'react'
import Dustbin from './Dustbin'
import Box from './Box'
const rowStyle = { overflow: 'hidden', clear: 'both' }
const Container = () => {
    
  return(
  
  <div>
    <div style={rowStyle}>
      <Dustbin />
    </div>
    <div style={rowStyle}>
      <Box name="Glass" />
      <Box name="Banana" />
      <Box name="Paper" />
    </div>
  </div>
)}
export default Container