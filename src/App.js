import React from 'react';
import Photo from './components/Photo';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const StyledApp = styled.div`
  text-align: center;
`;

function App() {
  return (
    <StyledApp>
      <h1>NASA Photo of the Day!</h1>
      <Photo />
    </StyledApp>
  );
}

export default App;
