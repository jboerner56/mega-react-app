import React from 'react';
import Axios from 'axios';
import {link} from 'react-router-dom';
class Joke extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fortune: []
        };
    }
    async componentDidMount () {
        const response = await Axios.get(`http://api.icndb.com/jokes/random`) 
        console.log(response.data)
        this.setState({
            joke: response.data
        });
    }
    render () {
        return(

        <div>
            <h1>Your Random Chuck Norris Joke</h1>
            <p>
                {this.data.joke}
            </p>
        </div>
        )
    }
    
}
export default Joke;