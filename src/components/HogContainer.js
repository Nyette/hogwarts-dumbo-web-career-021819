import React, { Component } from 'react';
import HogCard from './HogCard';

class HogContainer extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map(hog => <HogCard key={hog.id} hog={hog} />)}
      </div>
    )
  }
}

export default HogContainer;
