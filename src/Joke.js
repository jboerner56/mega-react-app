import React from 'react';
import Axios from 'axios';
// import {Link} from 'react-router-dom';
class Joke extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            joke: ''
        };
    }
    async componentDidMount () {
        await Axios.get('https://api.chucknorris.io/jokes/random') 
        .then(response => {
            console.log('================');
            console.log(response.data.value)
            
            this.setState({
                joke: response.data.value
            }, () => {
                console.log("state set")
            });
        })
    }
    render () {
        return ( 
            <div>
                <h1>Your Chuck Norris Joke</h1>
                <h3>
                    {this.state.joke}
                </h3>
            </div>
            )
    }
}
export default Joke;