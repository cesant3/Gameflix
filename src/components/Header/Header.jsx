import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo300.png'
import Button from '../Button';
import './style.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Link to="/"><img src={logo} alt="Logo" className="logo"/></Link>
                <nav className="menu">
                    <h3 className="menu_h3"><Link to="/UserPage">Conheça os jogos</Link></h3>
                    <h3 className="menu_h3"><a href="./#assinaturas">Assinaturas</a></h3>
                    <h3 className="menu_h3"><Link to="/UserPage">FAQ</Link></h3>
                    <Link to="/UserPage"><Button label="Entrar"/></Link>
                </nav>
            </header>
        );
    }
}

export default Header;