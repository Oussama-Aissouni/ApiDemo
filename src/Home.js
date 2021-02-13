import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import './Home.css';

function Home() {
    return (
        <div>
            <Jumbotron className="jumbotron">
                <h1>Hello Everybody!!</h1>
                <p>
                    This is a simple react Project where I practice calling APIs.<br/>
                    And I hope you like it 
                </p>
                    <Button variant="primary">Learn more</Button>   
            </Jumbotron>
        </div>
    )
}
export default Home
