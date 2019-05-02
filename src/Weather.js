import React from 'react';
import Axios from 'axios'

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        };
    }

    async componentDidMount() {
        const apiKey = `2402706c5ba24136cc05967bee9e5a2e`;

        await Axios.get(`http://api.openweathermap.org/data/2.5/weather?Atlanta,us&APPID=${apiKey}`)
        .then(response => {
            console.log('================');
            
            console.log(response.data)
            
            this.setState({
                weather: response.data
            }, () => {
                console.log('state set')
            });
        })
    }
    render() {
        return (
            <div>
                <h1>Weather</h1>
                <ul>
                    <li>Temp: {this.state.temp}</li>
                    <li>Wind: {this.state.wind}</li>
                </ul>
                
            </div>
        )
    }
}


export default Weather;