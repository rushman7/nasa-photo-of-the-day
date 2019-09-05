import React from 'react';
import styled from 'styled-components';

const DataDiv = styled.div`
  width: 75%;
  margin: 10px auto;
  padding: 2%;

  @media (min-width: 800px) {
    max-width: 600px;
  }
`;

function Data(props) {
  return (
    <DataDiv>
      <h2>{props.title}</h2>
      <h3>{props.date}</h3>
      <p>{props.about}</p>
    </DataDiv>
  )
}

export default Data;