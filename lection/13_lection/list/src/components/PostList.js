import React, {Component } from 'react';
import Post from './Post';

const post = [
    {id : 0, title : 'Title 1111', text : 'Some text 111111111111 Some text 111111111111 Some text 111111111111'},
    {id : 1, title : 'Title 2222', text : 'Some text 111111111111 Some text 111111111111 Some text 111111111111'},
    {id : 2, title : 'Title 3333', text : 'Some text 111111111111 Some text 111111111111 Some text 111111111111'},
    {id : 3, title : 'Title 4444', text : 'Some text 111111111111 Some text 111111111111 Some text 111111111111'},
    {id : 4, title : 'Title 5555', text : 'Some text 111111111111 Some text 111111111111 Some text 111111111111'}
];

class PostList extends Component {
    render () {
        const list = post.map(t => <Post title={t.title} text={t.text} key={t.id}/>);
    
    return (
        <section className = "postlist">
          {list}
        </section>
      );
    }
}
export default PostList;