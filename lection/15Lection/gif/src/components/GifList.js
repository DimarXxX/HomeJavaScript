import React, { Component} from 'react';
import GifSearch from './GifSearch';
import Gif from './Gif';

class GifList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list : []
        }
        this.Search = this.Search.bind(this);
    }
    render () {
        console.log(this.state)
        const gifList = this.state.list.map(e => <img src = {e.url}/>);
        return (
            <div className = "list">
            <GifSearch search={this.Search} />
            {gifList}  
            </div>
        );
    }

    Search (word) {
        const baseUrl = 'http://api.giphy.com/v1/gifs/search?api_key=CpAF0AM2qwD9R5zJj9tsM7gBQOEpWRBO&q=';
        const newUrl = baseUrl + word;
        fetch (newUrl)
        .then(response => response.json())
        .then(list => list.data.map(g => g.images.fixed_height))
        .then(gifArray => this.setState({list : gifArray}))
    }
}
export default GifList;


