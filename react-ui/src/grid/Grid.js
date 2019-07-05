import  Hexagon  from 'react-hexagon';
import React, { Component } from 'react'

export class Grid extends Component {
    render() {

        return (
            <div className="App">
                <Hexagon
                    style={{ stroke: '#42873f', fill}}
                    backgroundImage="img/red-panda.jpg"
                    href="http://espen.codes/"
                />
                  <Hexagon
                    style={{ stroke: '#42873f'}}
                    backgroundImage="img/red-panda.jpg"
                    href="http://espen.codes/"
                />
                 <Hexagon
                    style={{ stroke: '#42873f'}}
                    backgroundImage="img/red-panda.jpg"
                    href="http://espen.codes/"
                />
                 <Hexagon
                    style={{ stroke: '#42873f'}}
                    backgroundImage="img/red-panda.jpg"
                    href="http://espen.codes/"
                />
            </div>
        );
    }
}