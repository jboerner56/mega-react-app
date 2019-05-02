import React from 'react';
import Axios from 'axios'

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: []
        };
    }
    _getWeather = async () => {
        const response = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=30041,us&APPID={2402706c5ba24136cc05967bee9e5a2e}`);
        this.setState({
            weather: response
        });
    }
    componentDidMount() {
        this._getWeather();
    }
    render() {
        return(
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