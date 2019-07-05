import React, { useState } from 'react'
import { DropTarget, DragSource } from 'react-dnd'
import Hexagon from 'react-hexagon';
import { isatty } from 'tty';

const HexagonTarget = ({ canDrop, isOver, connectDropTarget,name }) => {
    const isActive = canDrop && isOver
    console.log(name)
    let imageURL= null
    if (isActive) {
        imageURL= "https://www.mobafire.com/images/champion/square/khazix.png"
    } else if (canDrop) {

    }
    const handleDrop =  function(url){
        console.log(url)
    }
    return (
        <span ref={connectDropTarget}>
        <Hexagon backgroundImage={imageURL}>
        </Hexagon>
        </span>
  )
  

}
export default DropTarget(
    "box",
    {
        drop: (props,monitor,component) => {
            return ({ name: 'Dustbin' })}
            ,
        
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
)(HexagonTarget)
