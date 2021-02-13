import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import './CNJokes.css'
function CnJokes() {
    const apiUrl = 'https://api.chucknorris.io/jokes/random'; 
    const [commitHistory, setCommitHistory] = useState([]);
    const getJoke=()=>{
            fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setCommitHistory(data));
    }
    return (
       <div>
           <div className="content__main">
                <h1>Chuck Norris Jokes API 💥 </h1>
                <div className="content__api">
                    <img src={commitHistory.icon_url}></img>    
                    {commitHistory.length==0 ?  <h4>Click To Get Jokes</h4>:<p>{commitHistory.value}</p> }
                </div>
                <Button variant="primary" onClick={getJoke}>Get Joke</Button>
            </div>
       </div>
    )
}
export default CnJokes
