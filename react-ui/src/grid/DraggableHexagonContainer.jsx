import React, { useState, useEffect } from 'react'
import DraggableHexagon from './DraggableHexagon';
const DraggableHexagonContainer = (props) => {
    const [imgURL, setImgUrl]= useState(null)
    const handleDrop = (championName) => {
        console.log("DROPPED")
        setImgUrl("https://www.mobafire.com/images/champion/square/khazix.png")
    }
    return <DraggableHexagon onDrop={handleDrop} imgSrc={imgURL}></DraggableHexagon>
}
export default DraggableHexagonContainer