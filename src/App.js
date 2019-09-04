import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  let today = new Date().toLocaleString()
  const [photo, setPhoto] = useState('');
  const fetchPhoto = () => 
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(photo => {
        console.log(photo);
        setPhoto(photo.data.url)
      });

  return (
    <div className="App">
      <h1>NASA Photo of the Day!</h1>
      <img className="nasa-photo" src={photo} alt=""/>
      <h2>Today is: {today}</h2>
      <div>
        <p></p>
      </div>
      <button onClick={e => fetchPhoto()}>Click Test</button>
    </div>
  );
}

export default App;
