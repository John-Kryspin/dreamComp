import React, { useState, useEffect } from 'react'
import { DropTarget, DragSource } from 'react-dnd'
import Hexagon from 'react-hexagon';
import { isatty } from 'tty';

const HexagonTarget = ({ canDrop, isOver, connectDropTarget, imgSrc }) => {
    const isActive = canDrop && isOver
    let imageURL = null
    if (isActive) {
        imageURL = imgSrc
    } else if (canDrop) {

    }
    imageURL = imageURL || imgSrc
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
        drop: (props, monitor, component) => {
            props.onDrop(monitor.getItem())
        }
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        didDrop: monitor.didDrop()
    }),
)(HexagonTarget)
