import React from 'react';
import './footer.css';
import logo from '../assets/img/logo.jpg';
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Footer() {
    return (
        <footer className="bg-light text-dark">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={logo} alt="logo" className="mb-3" style={{ width: '150px' }} />
                        <p>
                            Ajudamos você a encontrar o imóvel ideal com segurança e transparência.
                            Seja para compra, venda ou locação, conte com nossa equipe especializada
                            para realizar o seu sonho.
                        </p>
                        <div className="footer-icons">
                            <FaFacebook className="mx-2" size={20} />
                            <CiInstagram className="mx-2" size={20} />
                        </div>
                    </div>

                    <div className="col-md-2">
                        <h5>Our Services</h5>
                        <p>Comprar</p>
                        <p>Alugar</p>
                        <p>Vender</p>
                    </div>

                    <div className="col-md-2">
                        <h5>Company</h5>
                        <p>Sobre Nós</p>
                        <p>Carreiras</p>
                        <p>Contato</p>
                    </div>

                    <div className="col-md-2">
                        <h5>Support</h5>
                        <p>FAQs</p>
                        <p>Suporte</p>
                        <p>Ajuda</p>
                    </div>
                </div>
            </div>

            <div className="bg-light text-dark text-center py-2">
                <div className="container d-flex justify-content-between">
                    <div>Copyright 2024 - Tech</div>
                    <div>
                        <span className="mx-2">Termos de Uso</span>
                        <span className="mx-2">Política de Privacidade</span>
                        <span className="mx-2">Política de Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
