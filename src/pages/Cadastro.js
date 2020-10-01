import React from 'react';
import styled from 'styled-components';
import Form from '../components/Form/Form';
import Header from '../components/Header';

const Section = styled.div`
    width: 100%;
`;



function Cadastro() {
    return (
        <Section>
            <Header />
            <Form />
        </Section>
    );
  }
  
  export default Cadastro;