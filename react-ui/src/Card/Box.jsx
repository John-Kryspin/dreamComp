import React from 'react'
import { DragSource } from 'react-dnd'

const Box = ({ name,keyName, connectDragSource }) => {
  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${keyName}.png`
  return (
      <img src={imageUrl} alt={name} ref={connectDragSource} width="120px" height="120px"/>
  )
}
export default DragSource(
  "champion",
  {
    beginDrag: props => ({ name: props.name, keyName:props.keyName}),
    endDrag: (props,monitor,component) =>{
      if(monitor.getDropResult())
          props.addToActiveChampion()
  } 
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Box)
