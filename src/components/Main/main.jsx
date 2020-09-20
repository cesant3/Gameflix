import React, { Component } from 'react';
import Header from '../Header/Header';
import "../../Assets/main-img.png"
import VideoCard1 from "../../Assets/VideoCard-1.png"
import VideoCard2 from "../../Assets/VideoCard-2.png"
import VideoCard3 from "../../Assets/VideoCard-3.png"
import VideoCard4 from "../../Assets/VideoCard-4.png"
import "./style.css"

class Main extends Component {
    render() { 
        return ( 
            <section className="main">
                <Header />
                <div className="principal">
                    <h1 className="title-big">Uma plataforma completa de jogos</h1>
                    <p className="title-medium">Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga.</p>
                </div>
                <div className="meio">
                    <h1 className="title-big">Play Now!</h1>
                    <div className="list list-games">
                        <div className="listaJogos"><img src={VideoCard1} alt=""/></div>
                        <div className="listaJogos"><img src={VideoCard2} alt=""/></div>
                        <div className="listaJogos"><img src={VideoCard3} alt=""/></div>
                        <div className="listaJogos"><img src={VideoCard4} alt=""/></div>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Main;