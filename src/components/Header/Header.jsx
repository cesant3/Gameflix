import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo300.png'
import Button from '../Button';
import './style.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img src={logo} alt="Logo" className="logo"/>
                <nav className="menu">
                    <h3 className="menu_h3"><a href="./">Conheça os jogos</a></h3>
                    <h3 className="menu_h3"><a href="./">Assinaturas</a></h3>
                    <h3 className="menu_h3"><a href="./">FAQ</a></h3>
                    <Link to="/UserPage"><Button /></Link>
                    {/* <button className="menu_btn" >Entrar</button> */}
                </nav>
            </header>
        );
    }
}

export default Header;