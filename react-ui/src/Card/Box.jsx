import React from 'react'
import { DragSource } from 'react-dnd'

const Box = ({ name,keyName, connectDragSource }) => {
  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${keyName}.png`
  return (
    <div ref={connectDragSource}>
      <img src={imageUrl} alt={name} width="120px" height="120px"/>
    </div>
  )
}
export default DragSource(
  "box",
  {
    beginDrag: props => ({ name: props.name }),
    endDrag(props, monitor) {
      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()
      if (dropResult) {
        // alert(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(Box)
