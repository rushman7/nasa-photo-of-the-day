import React from 'react';

function Data(props) {
  return (
    <div className="data">
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>{props.about}</p>
    </div>
  )
}

export default Data;