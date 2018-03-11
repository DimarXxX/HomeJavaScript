import React from 'react';
import ButtonRetweet from './ButtonRetweet';

const Tweet = (props) => {
    return (
       /* <div class = "tweet">
            <h3>props.name</h3>
            <p>props.text</p>
            < ButtonRetweet />
        </div>*/
        <div class = "tweet">
            <h3>Gilbert Chavarria</h3>
            <p>Found some time for @mute this weekend. Great Noir / Sci-Fi from @ManMadeMoon. @netflix has become an perfect home for projects like this and Paul Rudd showed up! #scifi</p>
            < ButtonRetweet />
            <h3>Joe Warren</h3>
            <p>Finally took some time to dive into @gatsbyjs and I'm really digging it so far #reactjs #gatsbyjs</p>
            < ButtonRetweet />
        </div>

    );
}
export default Tweet;