import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function photoFetch() {
  const [photo, setPhoto]
  const fetchPhoto = () => 
  fetch('https://api.nasa.gov/planetary/apod&date=2012-03-14')
    .then(res => res.json())
    .then(photo => {
      console.log(photo);
    })
}