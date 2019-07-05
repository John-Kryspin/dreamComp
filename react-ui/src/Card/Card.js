import React from 'react'
import { useDrag } from 'react-dnd'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Example from './Example'
import { Grid } from '../grid/Grid';
/**
 * Your Component
 */
export default function Card({ isDragging, text }) {
    return (
            <DndProvider backend={HTML5Backend}>
                <Example></Example>
                <Grid></Grid>
            </DndProvider>
    )
}