import React from 'react';
import './banner.css';
import banner from '../../assets/img/banner.jpeg';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div className="banner-container position-relative">
            <img src={banner} alt="banner" className="banner-img img-fluid" />
            <div className="overlay"></div>
            <div className="text-overlay text-center">
                <h2>Descubra a beleza do seu <br /> próximo apartamento</h2>
                <p>
                    Imagine-se vivendo em um espaço que reflete o seu estilo de vida.
                    Um apartamento que não apenas oferece conforto,
                    mas também uma atmosfera vibrante e acolhedora.
                    Desde os amplos ambientes iluminados pela luz natural
                    até a vista deslumbrante da cidade, cada detalhe foi pensado para
                    proporcionar uma experiência única. Venha explorar um lar onde o aconchego
                    se encontra com a modernidade e onde cada momento se transforma em uma memória inesquecível.
                </p>
                <Link to='/cadastroimovel/'>
                    <button className="btn btn-primary">Cadastre seu Anúncio</button>
                </Link>
            </div>
        </div>
    );
}

export default Banner;
