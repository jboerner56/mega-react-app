import React from 'react';
import Weather from './Weather';
import Fortune from './Fortune';
import Joke from './Joke';
import Home from './Home';
import {
  Route,
  Switch
} from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path="/" component={Home}/>
          {/* <Route path="/weather" component={Weather}/>
          <Route path="/fortune" component={Fortune}/> */}
          <Route path="/joke" component={Joke}/>
        </Switch>
      </div>
    );
  }
}

export default App;
