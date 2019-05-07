import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';

class App extends Component {

  state = {
    allHogs: []
  }

  componentDidMount() {
    this.setState({
      allHogs: hogs
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <HogContainer hogs={this.state.allHogs} />
      </div>
    )
  }
}

export default App;
