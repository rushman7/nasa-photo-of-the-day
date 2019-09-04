import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
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
    <div className="App">
      <h1>NASA Photo of the Day!</h1>
      <img className="nasa-photo" src={photo} alt=""/>
      <div>
        <p>{title}</p>
        <p>{date}</p>
        <p>{about}</p>
      </div>
      <button onClick={e => fetchPhoto()}>Click Test</button>
    </div>
  );
}

export default App;
