import React, { useState, useEffect } from 'react'
import DraggableHexagon from './DraggableHexagon';
const DraggableHexagonContainer = (props) => {
    const [imgURL, setImgUrl]= useState(null)
    const handleDrop = (champion) => {
        console.log(champion)
        setImgUrl(`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${champion.keyName}.png`)
    }
    return <DraggableHexagon onDrop={handleDrop} imgSrc={imgURL}></DraggableHexagon>
}
export default DraggableHexagonContainer