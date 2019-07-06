import React from 'react'
import { DragSource } from 'react-dnd'

const Box = ({ name,keyName, connectDragSource }) => {
  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${keyName}.png`
  return (
    <span ref={connectDragSource}>
      <img src={imageUrl} alt={name} width="120px" height="120px"/>
    </span>
  )
}
export default DragSource(
  "box",
  {
    beginDrag: props => ({ name: props.name, keyName:props.keyName}),
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Box)
