import React, { Component} from 'react';

class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        }

        this.onSearch = this.onSearch.bind(this);
        this.onChangeWord = this.onChangeWord.bind(this);
    }
    render () {
        return (
            <div className = "search">
            <input type='text' value={this.state.word} onChange={this.onChangeWord}/>
            <button onClick={this.onSearch}>Search</button>   
            </div>
        );
    }
    onSearch (){
        this.props.search(this.state.word)
    }
    onChangeWord(event) {
        this.setState({word: event.target.value});
      }
}
export default GifSearch;