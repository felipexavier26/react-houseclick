import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
    return (
        <div className="error-container">
            <h1 className="error-title">Oops! Página não encontrada.</h1>
            <p className="error-description">
                Parece que você tentou acessar uma página que não existe. Por favor, verifique o URL ou volte para a página inicial.
            </p>

            <Link to="/" className="error-home-link">Voltar para a Home</Link>
        </div>
    );
}

export default Error;
