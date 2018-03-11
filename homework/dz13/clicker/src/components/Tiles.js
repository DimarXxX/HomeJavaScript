import React, { Component } from 'react';
import './components.css';

class Tiles extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            show: props.done
            }
            this.handleClick = this.handleClick.bind(this);
    }
    render () {
        const blabla = <p>{this.props.text}</p>;
        //let text = this.state.show;
        return (
        <div className = "field" onClick={this.handleClick}>
            {blabla}
        </div>
        );
    }
    handleClick() {
        const format = (number) => {
            if (number < 10) {
                return '0' + number;
            }
            return String(number);
        }
      }
}

export default Tiles;