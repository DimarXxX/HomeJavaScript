import React, { Component} from 'react';
import GifSearch from './GifSearch';
import Gif from './Gif';

class GifList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list : []
        }
    }
    render () {

        return (
            <div className = "list">
            <GifSearch search={this.Search} />  
            </div>
        );
    }

    Search (word) {
        const baseUrl = 'http://api.giphy.com/v1/gifs/search?api_key=CpAF0AM2qwD9R5zJj9tsM7gBQOEpWRBO&q=';
        const newUrl = baseUrl + word;
        fetch (newUrl)
        .then(response => response.json())
        .then(array => console.log(array))
        .then(gifArray => this.setState({gifs: Array4794.data.images.original.url}))
        //.then(gifArray => console.log(gifArray))
    }
}
export default GifList;


