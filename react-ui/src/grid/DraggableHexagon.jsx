import React, { useState, useEffect } from 'react'
import { DropTarget, DragSource } from 'react-dnd'
import Hexagon from 'react-hexagon';
import _ from 'lodash';

const HexagonTarget = ({ canDrop, isOver, connectDropTarget, connectDragSource, imgSrc, ...rest }) => {
    const isActive = canDrop && isOver
    let imageURL = null
    if (isActive) {
        imageURL = imgSrc
    } else if (canDrop) {

    }
    imageURL = imageURL || imgSrc
    const handleClear = () =>{
        imageURL = null
    }
    return (
        connectDragSource(<span ref={connectDropTarget}>
            <Hexagon backgroundImage={imageURL}>
            </Hexagon>
        </span>)
    )


}
export default _.flow([
    DragSource(
        "box",
        {
            beginDrag: props => ({ name: props.name, keyName: props.keyName }),
            endDrag: (props,monitor,component) =>{
                if(monitor.getDropResult())
                    props.handleClear() 
            }
        },
        (connect, monitor) => ({
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging(),
        }),
    ), DropTarget(
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
    )
])(HexagonTarget)
