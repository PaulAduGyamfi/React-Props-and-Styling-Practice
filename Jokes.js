import React from 'react'

function Jokes(props){
    return (
        <div className="wrap">
            <h1 className="Q">{props.joke.question}</h1>
            <h6 className="A">{props.joke.punchline}</h6>
        </div>
    );
}

export default Jokes