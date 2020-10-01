import React, { Component } from 'react';
import Button from '../Button';
import styled from 'styled-components';

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin: 18px auto;
`;


class Form extends Component {
    render() {
        return (
            <Formulario>
                <form action="" className="form">
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Sobrenome" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Senha" />
                    <Button />
                </form>
            </Formulario>
        );
    }
}

export default Form;