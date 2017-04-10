/**
* this is a simple example of axios a React application to connect to an Api
*/

import React from 'react';
import css from '../css/style.css';
import axios from 'axios';

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            title: 'loading...'
        }
    }
    componentDidMount(){
        axios.get('/src/fakeApi/about.json')
            .then((response) => {
                this.setState({
                    title: response.data.title,
                    desc: response.data.description
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <article>
                <h3>{this.state.title}</h3>
                <p className="txt">{this.state.desc}</p>
            </article>
        );
    }
}


export default About;