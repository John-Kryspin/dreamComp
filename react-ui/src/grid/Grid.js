import Hexagon from 'react-hexagon';
import React, { Component } from 'react'
import './Grid.css'
import DraggableHexagonContainer from './DraggableHexagonContainer';
export class Grid extends Component {
    render() {

        return (
            <div id="demo">
                <div className="row">
                    <DraggableHexagonContainer></DraggableHexagonContainer>
                    <DraggableHexagonContainer></DraggableHexagonContainer>
                    <DraggableHexagonContainer></DraggableHexagonContainer>
                    <DraggableHexagonContainer></DraggableHexagonContainer>
                    <DraggableHexagonContainer></DraggableHexagonContainer>
                    <DraggableHexagonContainer></DraggableHexagonContainer>
                    <DraggableHexagonContainer></DraggableHexagonContainer>
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