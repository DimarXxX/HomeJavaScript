import React, { Component } from 'react';
import './components.css';
import Tiles from './Tiles';

const tiles = [
    {id : 0, text : 0},
    {id : 1, text : 0},
    {id : 2, text : 0},
    {id : 3, text : 0}
];

class Form extends Component {
    render () {
        const mrfc = tiles.map(t => <Tiles text={t.text} key={t.id}/>);
        return (
        <div className ="form">
        {mrfc}
        </div>
        );
    }
}
export default Form;