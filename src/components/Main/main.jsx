import React, { Component } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import "../../Assets/main-img.png"
import VideoCard1 from "../../Assets/VideoCard-1.png"
import VideoCard2 from "../../Assets/VideoCard-2.png"
import VideoCard3 from "../../Assets/VideoCard-3.png"
import VideoCard4 from "../../Assets/VideoCard-4.png"
import exampleImage from "../../Assets/img-game.png"
import gamer from "../../Assets/hardcore-gamer.jpg"
import Button from "../Button"
import "./style.css"

class Main extends Component {
    render() {
        return (
            <section className="page">
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
                <section className="main">
                    <div className="second">
                        <section className="position">
                            <h1 className=" content">Jogue quando e onde quiser</h1>
                            <img src={exampleImage} alt="Fall Guys" className="exampleImage" />
                        </section>
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
                        <div className="callToAction">
                            <h1>Assine agora</h1>
                            <div className="card">
                                <div className="callToAction-card">
                                    <h2>Standard</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt, quae alias praesentium obcaecati omnis accusantium vel aspernatur animi, numquam distinctio dignissimos veritatis labore corporis eligendi fuga a, dolor placeat!</p>
                                    <h4>R$ xx,xx</h4>
                                    <Button />
                                </div>
                                <div className="callToAction-card">
                                    <h2>Premium</h2>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas sunt, quae alias praesentium obcaecati omnis accusantium vel aspernatur animi, numquam distinctio dignissimos veritatis labore corporis eligendi fuga a, dolor placeat!</p>
                                    <h4>R$ xx,xx</h4>
                                    <Button />
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </section>
                </section>
            </section>
        );
    }
}

export default Main;