import React, { useState } from 'react';
import axios from 'axios';
import Data from './Data';

function Photo() {
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [date, setDate] = useState('');

  const fetchPhoto = () => 
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(photo => {
        console.log(photo);
        setPhoto(photo.data.url)
        setTitle(photo.data.title)
        setAbout(photo.data.explanation)
        setDate(photo.data.date)
      });

  return (
    <div>
      <img className="nasa-photo" src={photo} alt=""/>
      <Data title={title} about={about} date={date}/>
      <button onClick={e => fetchPhoto()}>Click Test</button>
    </div>
  )
}

export default Photo;