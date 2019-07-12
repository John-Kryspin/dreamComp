import React from 'react'
import itemTranslation from '../itemTranslation.json'
console.log(itemTranslation.data)
const itemCodes = itemTranslation.data
const BasicItem = (props) => {

    return (
        <div onClick={()=>props.selectItem(props.keyName)}>{props.name}</div>
        )
}


export default BasicItem

    // const itemIdentity = getTranslatedCode(props.name)
    // function getTranslatedCode(keyName) {
    //     for (let index in itemCodes) {

    //         if (keyName == itemCodes[index].name) {
    //             console.log(index)
    //             return itemCodes[index].image.full
    //         }
    //     }
    // }
            // <img src={`http://ddragon.leagueoflegends.com/cdn/9.13.1/img/item/${itemIdentity}`}></img>
