import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function photoFetch() {
  const [photo, setPhoto] = useState('');
  const fetchPhoto = () => 
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => res.json())
      .then(photo => {
        console.log(photo);
        setPhoto(photo.url)
      });

}