import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import items from '../items.json'
import BasicItem from './BasicItem.js';

let itemsArray = []
for (let itemName in items) {
  itemsArray.push(items[itemName])
}
console.log(itemsArray)
const ItemBuilder = (props) => {
  const [selectedItems, setSelectedItems] = useState({})
  const selectItem = (keyName) => {
    console.log(keyName)
    if(!selectedItems[keyName])
      setSelectedItems({...selectedItems, keyName: 0})
    else
      setSelectedItems({...selectedItems, keyName:selectedItems[keyName] +1})


  }
  let makeableItems = []
    for (let item of itemsArray) {
      if (item.buildsFrom) {
        
      }
    }
  return (
    <div>{
      itemsArray.map((item) => {
        if (item.kind == "basic")
          return <BasicItem {...item} keyName={item.key} selectItem={selectItem}>{item.name}</BasicItem>
      })}
      {makeableItems.map((item) => {
        return item
      })}
    </div>

  )
}
function arrayContainsArray (superset, subset) {
  return subset.every(function (value) {
    return (superset.indexOf(value) >= 0);
  });
}
export default ItemBuilder