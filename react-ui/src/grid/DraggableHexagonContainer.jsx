import React, { useState, useEffect } from 'react'
import DraggableHexagon from './DraggableHexagon';
const DraggableHexagonContainer = (props) => {
    const [imgURL, setImgUrl]= useState(null)
    const [champion, setChampion]= useState(null)

    const handleDrop = (champion) => {
        setChampion(champion)
        setImgUrl(`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${champion.keyName}.png`)
    }
    return <DraggableHexagon onDrop={handleDrop} imgSrc={imgURL} {...champion}></DraggableHexagon>
}
export default DraggableHexagonContainer