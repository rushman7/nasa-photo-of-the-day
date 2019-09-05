import React from 'react';

function Data(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.date}</p>
      <p>{props.about}</p>
    </div>
  )
}

export default Data;