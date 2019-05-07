import React from 'react';
import HogDetails from './HogDetails';

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

  const showDetails = () => {
    return <HogDetails hog={props.hog} />
  }

  return (
    <div className="ui eight wide column">
      <div className="ui card">

        <div className="image">
          <img src={generateRandomUrl()} alt={props.hog.name} height="100" />
        </div>

        <div className="content">
          <h3 className="header">{props.hog.name}</h3>

          <div className="description">
            Learn more here!
          </div>
        </div>

      </div>
    </div>
  )
}

export default HogCard;
