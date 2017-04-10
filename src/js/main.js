import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from '../components/contact';
import About from '../components/about'

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">home</Link>
                                </li>
                                <li>
                                    <Link to="/about">about</Link>
                                </li>
                                <li>
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </nav>
                        <Route exact path="/" render={()=><p>Home</p>}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/contact" component={Contact}></Route>
                    </div>
                </Router>
            </div>
        );
    }
};

ReactDom.render(<App />, document.getElementById('app'));