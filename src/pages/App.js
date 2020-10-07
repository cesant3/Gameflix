import React from 'react';
import "../Assets/App.css";
import Main from '../components/Main';
import styled from 'styled-components';

const Body = styled.body`
   margin:0;
   padding:0;
   height:100%;
`;

function Home() {
  return (

    <Body>
      <Main />
    </Body>
  );
}

export default Home;
