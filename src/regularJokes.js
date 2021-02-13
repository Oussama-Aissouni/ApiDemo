import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import './regularJokes.css'
function RegularJokes() {
    const [lang,setLang]=useState("en");
    const [commitHistory, setCommitHistory] = useState([]);
    const getJoke =()=>{
        const URL="https://v2.jokeapi.dev/joke/Any?lang="+lang+"&type=single";
        fetch(URL)
        .then((res)=>res.json())
        .then((data)=>setCommitHistory(data))
    }
    return (
        <div>
            <Form className="main__jokes"> 
                <Form.Group className="w-25 d-inline-flex">
                    <Form.Label >Select language:</Form.Label>
                    <Form.Control className="w-100" as="select" size="sm" onChange={e => setLang(e.target.value )}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="es">Spanish</option>
                    </Form.Control>
                </Form.Group>
                <div className="Joke">
                    {commitHistory.length===0 ? <h4>Click To Get Jokes</h4>:<p className="w-50 ">{commitHistory.joke}</p> }
                </div>
                <Button  className="w-25" variant="primary" onClick={getJoke} >
                        Get Joke
                </Button>
            </Form>
        </div>
    )
}

export default RegularJokes
