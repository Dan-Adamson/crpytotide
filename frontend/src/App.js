import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
      document.body.style.backgroundColor = "#212121"
  }
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/about' exact={true} component={About}/>
            {/* <Route path='/clients/:id' component={ClientEdit}/> */}
          </Switch>
        </Router>
    )
  }

}

export default App;
