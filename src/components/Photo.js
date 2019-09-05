import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './Data';
import DatePicker from 'react-date-picker';
import styled from 'styled-components';

const StyledPhoto = styled.img`
  width: 80%;
  margin: 30px auto 0px auto;
  border: 1px solid black;
  border-radius: 20px;
  -webkit-box-shadow: 0px 1px 18px 3px rgba(0,0,0,0.77);
  -moz-box-shadow: 0px 1px 18px 3px rgba(0,0,0,0.77);
  box-shadow: 0px 1px 18px 3px rgba(0,0,0,0.77);

  @media (min-width: 800px) {
    width: 600px;
  }
`;

const PhotoDiv  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <PhotoDiv>
      <DatePicker
        onChange={onChange}
        value={newDate}
        format='yyyy-MM-dd'
        maxDate={new Date()}
      />
      <StyledPhoto className="nasa-photo" src={photo} alt=""/>
      <Data title={title} about={about} date={date}/>
    </PhotoDiv>
  )
}

export default Photo;