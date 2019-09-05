import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './Data';
import DatePicker from 'react-date-picker';

function Photo() {
  const [photo, setPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [date, setDate] = useState('');
  const [newDate, setNewDate] = useState(new Date());

  useEffect(() => {
    const fetchPhoto = () => 
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2016-12-08`)
        .then(photo => {
          setPhoto(photo.data.url)
          setTitle(photo.data.title)
          setAbout(photo.data.explanation)
          setDate(photo.data.date)
        });
      fetchPhoto()
  }, [])

  const onChange = newDate => setNewDate(newDate)
  console.log(newDate);

  return (
    <div className="photo-div">
      <DatePicker
        onChange={onChange}
        value={newDate}
        format='yyyy-MM-dd'
        maxDate={new Date()}
      />
      <img className="nasa-photo" src={photo} alt=""/>
      <Data title={title} about={about} date={date}/>
    </div>
  )
}

export default Photo;