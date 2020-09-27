import React, { Component } from 'react';
import Header from '../Header/Header';
import "../../Assets/main-img.png"
import VideoCard1 from "../../Assets/VideoCard-1.png"
import VideoCard2 from "../../Assets/VideoCard-2.png"
import VideoCard3 from "../../Assets/VideoCard-3.png"
import VideoCard4 from "../../Assets/VideoCard-4.png"
import exampleImage from "../../Assets/img-game.png"
import gamer from "../../Assets/hardcore-gamer.jpg"
import "./style.css"

class Main extends Component {
    render() {
        return (
            <section className="main">
                <div className="first">
                    <Header />
                    <div className="chamada">
                        <h1 className="title-big">Uma plataforma completa de jogos</h1>
                        <p className="title-medium">Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Atirei o pau no gatis, per gatis num morreus. Manduma pindureta quium dia nois paga.</p>
                    </div>
                    <div className="chamada-play">
                        <h1 className="title-big play">Play Now!</h1>
                        <div className="list list-games">
                            <div className="listaJogos"><img src={VideoCard1} alt="" /></div>
                            <div className="listaJogos"><img src={VideoCard2} alt="" /></div>
                            <div className="listaJogos"><img src={VideoCard3} alt="" /></div>
                            <div className="listaJogos"><img src={VideoCard4} alt="" /></div>
                        </div>
                    </div>
                </div>

                <div className="second">
                    <h1 className=" content">Jogue quando e onde quiser</h1>
                    <img src={exampleImage} alt="Fall Guys" className="content" />
                </div>
                <section className="clients">
                    <h1>O que os Clientes estão falando</h1>
                    <div className="client-list">
                        <div className="client">
                            <img src={gamer} alt="gamer" className="gamer" />
                            <h3>Fulano da Silva</h3>
                            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur impedit illo necessitatibus, velit, ullam</p>
                        </div>
                        <div className="client">
                            <img src={gamer} alt="gamer" className="gamer" />
                            <h3>Fulano da Silva</h3>
                            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur impedit illo necessitatibus, velit, ullam</p>
                        </div>
                        <div className="client">
                            <img src={gamer} alt="gamer" className="gamer" />
                            <h3>Fulano da Silva</h3>
                            <p className="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequatur impedit illo necessitatibus, velit, ullam</p>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default Main;