import React, { useState, useEffect } from 'react'
import DraggableHexagon from './DraggableHexagon';
const DraggableHexagonContainer = (props) => {
    const [imgURL, setImgUrl]= useState(null)
    const [champion, setChampion]= useState(null)

    const handleDrop = (champion) => {
        console.log(champion)
        setChampion(champion)
        setImgUrl(`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${champion.keyName}.png`)
    }
    const handleClear = (champion) => {
        console.log(champion)
        setChampion(null)
        setImgUrl(null)
    }

    return <DraggableHexagon onDrop={handleDrop} handleClear={handleClear}  imgSrc={imgURL} {...champion}></DraggableHexagon>
}
export default DraggableHexagonContainer