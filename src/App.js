import React, { useState } from 'react';
import "./App.css";

function App() {
  const [photo, setPhoto] = useState('');
  const fetchPhoto = () => 
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => res.json())
      .then(photo => {
        console.log(photo);
        setPhoto(photo.url)
      });

  return (
    <div className="App">
      <h1>NASA Photo of the Day!</h1>
      <img className="nasa-photo" src={photo} alt=""/>
      <button onClick={e => fetchPhoto()}>Click Test</button>
    </div>
  );
}

export default App;
