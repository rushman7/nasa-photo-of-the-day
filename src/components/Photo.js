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

  let dd = newDate.getDate();
  let mm = newDate.getMonth()+1;
  let yyyy = newDate.getFullYear();

  const onChange = newDate => setNewDate(newDate)

  useEffect(() => {
    const fetchPhoto = () => 
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=2IHlxCsWWLtexHqizaiDCbZeuFMy929Fb9XqdxOx&date=${yyyy}-${mm}-${dd}`)
        .then(photo => {
          setPhoto(photo.data.hdurl)
          setTitle(photo.data.title)
          setAbout(photo.data.explanation)
          setDate(photo.data.date)
          console.log(photo);
        });
      fetchPhoto()
  }, [dd, mm, yyyy])

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