import React, { Component } from 'react';
import { Link } from 'react-router';

const Default404 = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card" style={{backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
            <div className="card-content flow-text center-align">
              <span className="card-title red-text text-darken-2" style={{fontSize: '4rem'}}>404</span>
              <hr/>
              <p style={{padding: '1rem 0 1rem 0'}}>Uh oh! It looks that that page doesn't exist. Why don't you try heading back to the homepage?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12 center-align">
          <Link to="/" className="btn-large green"><i className="material-icons right">play_arrow</i>Go</Link>
        </div>
      </div>
    </div>
  );
}

export default Default404;
