import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
        show: props.done
        }
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let text = this.state.show
        ? undefined
        : <p>{this.props.text}</p>;
        return (
            <section className = "post">
                <h2>{this.props.title}</h2>
                <button onClick={this.handleClick}>Hide</button>
                {text}
            </section>
        );
    }

    handleClick() {
        this.setState({show: !this.state.show})
      }
}
export default Post;