import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdLocationPin } from "react-icons/md";
import Backend from '../config/Index';
import './styles.css';
import logo from '../../assets/img/imovel.png';

function Imoveis() {
  const [imovel, setImovel] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    Backend.get('/imoveis')
      .then((response) => {
        setImovel(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setMsg('Erro ao carregar os dados do imóvel.');
      });
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {imovel.length > 0 ? (
            imovel.map((imoveis) => (
              <div key={imoveis.id} className="col-md-4 mb-4"> 
                <div className="card">
                  <img src={imoveis.imagem_url || logo} className="card-img-top" alt={imoveis.descricao} />
                  <div className="card-body">
                    <h5 className="card-title">{imoveis.tipo}</h5>
                    <div className="container-valor mb-3">
                      <p>
                        <span className="price-title">Venda:</span><br />
                        {imoveis.valor.venda
                          ? <>R$ {imoveis.valor.venda.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</>
                          : 'Valor de Venda indisponível'}
                      </p>
                      <p>
                        <span className="price-title">Aluguel:</span><br />
                        {imoveis.valor.aluguel
                          ? <>R$ {imoveis.valor.aluguel.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</>
                          : 'Valor de Aluguel indisponível'}
                      </p>
                    </div>
                    <div className="location mb-3">
                      <p>
                        <MdLocationPin /> {`${imoveis.endereco.rua}, ${imoveis.endereco.numero} - ${imoveis.endereco.bairro}, ${imoveis.endereco.cidade} - ${imoveis.endereco.estado}`}
                      </p>
                    </div>
                    <Link to={`/imoveisdetalis/${imoveis.id}`} className="btn btn-primary">Ver Detalhes</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='msgerror'>{msg}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Imoveis;
