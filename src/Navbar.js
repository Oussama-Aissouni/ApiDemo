import React from 'react';
import './Navbar.css';
import {Navbar,NavDropdown,Nav} from 'react-bootstrap';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import CnJokes from './CNJokes';
import Home from './Home';
import regularJokes from './regularJokes';
function Navbars() {
    return (
        <div>
            <Router>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Custom API</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="APIs " id="basic-nav-dropdown">
                                <NavDropdown.Item href="/ChuckNorris">Chuck Norris Jokes</NavDropdown.Item>
                                <NavDropdown.Divider />
                               <NavDropdown.Item href="Regular">Regular Jokes</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="Infos-forms">
                    <Switch>
                        <Route path="/ChuckNorris" component={CnJokes}></Route>
                        <Route path="/Regular" component={regularJokes}></Route>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
export default Navbars
