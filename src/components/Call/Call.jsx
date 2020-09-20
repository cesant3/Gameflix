import React, { Component } from 'react';
import imgGame from '../../Assets/img-game.png'
import './style.css'

class Call extends Component {
    render() { 
        return ( 
            <section className="call-game arranjo">
                <h1 className="title-game">Jogue quando e onde quiser</h1>
                <div className="image-game">
                    <img src={imgGame} alt="game Fall Guys"/>
                </div>
                <div className="clients">
                    <h3>O que os clientes estão falando</h3>
                    <div className="client">
                        
                    </div>
                </div>

            </section>
         );
    }
}
 
export default Call;