import React from 'react';

const Poster = (props) => {
  if (props.movie) {
    return (
      <img className="poster" src={props.movie.Poster}/>
    )
  } else {
    return <div>No Movie Yet...</div>
  }
}

export default Poster;
