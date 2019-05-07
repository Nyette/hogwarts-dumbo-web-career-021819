import React from 'react';

const HogCard = (props) => {

  const generateRandomUrl = () => {
    let urls = [
      'https://media.giphy.com/media/1X4A8d96x0b8x98Q2Y/giphy.gif',
      'https://media.giphy.com/media/N6qooOEjfnTq0/giphy.gif',
      'https://media.giphy.com/media/35Fc6TlcuFmfK/giphy.gif'
    ];
    let url = urls[Math.floor(Math.random() * urls.length)];
    return url;
  }

  return (
    <div className="ui eight wide column">
      <div className="ui card">

        <div className="image">
          <img src={generateRandomUrl()} alt={props.hog.name} height="100" />
        </div>

        <div className="content">
          <a className="header">{props.hog.name}</a>

          <div className="description">
            {props.hog.name} won a <b>{props['hog']['highest medal achieved']}</b> medal and specializes in <b>{props.hog.specialty.toLowerCase()}</b>
          </div>
        </div>

        <div className="extra content">
          <a><i className="tint icon"></i>{props.hog.greased === true ? 'Greased' : 'Not Greased'}</a>
        </div>

      </div>
    </div>
  )
}

export default HogCard;
