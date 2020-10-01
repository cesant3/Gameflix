import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Banner from '../Assets/BannerMain.png'
import Carousel from '../components/Carousel';
import Footer from '../components/Footer'

const Main = styled.div`
    width: 100%;
    height: 100%;
    background-color: #E5E5E5;
`;

const Topo = styled.div`
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
`;

const Img = styled.img`
    width: 1020px;
    height: 700px;
`;

const Info = styled.div`
    width: 80%;
    margin: 22px auto;
`;

const FlexItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 18px;
    padding: 12px;
`;

const Paragrafo = styled.p`
    padding: 12px;
`;


function Detalhes() {
    return (

        <section>
            <Header />
            <Main>
                <Topo>
                    <Img src={Banner} alt="jogo"></Img>
                </Topo>
                <Info>
                    <FlexItem>
                        <h2>Detalhes</h2>
                        <button className="btn">Jogar</button>
                    </FlexItem>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et varius tortor, vestibulum bibendum elit. Pellentesque diam turpis, viverra vel molestie ac, vulputate ut felis. Duis interdum commodo ultricies. In hac habitasse platea dictumst. Donec scelerisque justo ut purus rhoncus luctus. Aenean lobortis diam magna, eget sollicitudin ex scelerisque in. Etiam tincidunt, erat quis tincidunt mollis, eros odio placerat lorem, sit amet bibendum lectus erat ac orci. Ut mattis eget lorem vitae iaculis.</p>
                    <h2>Requisitos</h2>
                    <FlexItem>
                        <Paragrafo>MÍNIMOS:
                        Requer um processador e sistema operacional de 64 bits
                        SO: Windows 7 - Service Pack 1 (6.1.7601)
                        Processador: Intel® Core™ i5-2500K / AMD FX-6300
                        Memória: 8 GB de RAM
                        Placa de vídeo: Nvidia GeForce GTX 770 2GB 
                        Rede: Conexão de internet banda larga
                        Armazenamento: 150 GB de espaço disponível
                        Placa de som: Direct X Compatible</Paragrafo>
                        <Paragrafo>
                            RECOMENDADOS:
                            Requer um processador e sistema operacional de 64 bits
                            SO: Windows 10 - April 2018 Update (v1803)
                            Processador: Intel® Core™ i7-4770K / AMD Ryzen 5 1500X
                            Memória: 12 GB de RAM
                            Placa de vídeo: Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB
                            Rede: Conexão de internet banda larga
                            Armazenamento: 150 GB de espaço disponível
                            Placa de som: Direct X Compatible</Paragrafo>
                    </FlexItem>
                    <h2>Relacionado</h2>
                    <Carousel />
                </Info>
                <Footer />
            </Main>
        </section>
    );
}

export default Detalhes;