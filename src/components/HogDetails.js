import React, { Component } from 'react';

class HogDetails extends Component {
  render() {
    return (
      <div className="ui eight wide column">
        <div className="ui card">

          <div className="content">
            <h3 className="header">{this.props.hog.name}</h3>

            <div className="description">
              {this.props.hog.name} won a <b>{this['props']['hog']['highest medal achieved']}</b> medal and specializes in <b>{this.props.hog.specialty.toLowerCase()}</b>
            </div>
          </div>

          <div className="extra content">
            {this.props.hog.greased === true ? <a><i className="tint icon"></i>Greased</a> : <a>Not Greased</a>}
          </div>

        </div>
      </div>
    )
  }
}

export default HogDetails;
