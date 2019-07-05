import Hexagon from 'react-hexagon';
import React, { Component } from 'react'
import './Grid.css'
import DraggableHexagon from './DraggableHexagon';
export class Grid extends Component {
    render() {

        return (
            <div id="demo">
                <div className="row">
                    <DraggableHexagon></DraggableHexagon>
                    <DraggableHexagon></DraggableHexagon>
                    <DraggableHexagon></DraggableHexagon>
                    <DraggableHexagon></DraggableHexagon>
                    <DraggableHexagon></DraggableHexagon>
                    <DraggableHexagon></DraggableHexagon>
                    <DraggableHexagon></DraggableHexagon>
                </div>
                <div className="row">
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                </div>
                <div className="row">
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                </div>
                <div className="row">
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                </div>
                <div className="row">
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                </div>
                <div className="row">
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                    <Hexagon></Hexagon>
                </div>
            </div>
        );
    }
}