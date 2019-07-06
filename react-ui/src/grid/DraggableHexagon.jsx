import React, { useState, useEffect } from 'react'
import { DropTarget, DragSource } from 'react-dnd'
import Hexagon from 'react-hexagon';
import { isatty } from 'tty';

const HexagonTarget = ({ canDrop, isOver, connectDropTarget,name, didDrop, imgSrc }) => {
    const isActive = canDrop && isOver
    let imageURL= null
    if (isActive) {
        imageURL= "https://www.mobafire.com/images/champion/square/khazix.png"
    } else if (canDrop) {

    }
    imageURL = imageURL||imgSrc
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
            props.onDrop()
            return ({ name: 'Dustbin' })}
            ,
        
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        didDrop: monitor.didDrop()
    }),
)(HexagonTarget)
