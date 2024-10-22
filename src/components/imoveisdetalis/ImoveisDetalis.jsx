import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Backend from '../config/Index';
import './ImoveisDetalis.css';
import { FaCheck } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import ContatoForm from '../Contato/ContatoForm';

function ImoveisDetalis() {
    const [imovel, setImovel] = useState([]);
    const [msg, setMsg] = useState('');
    const { id } = useParams();

    useEffect(() => {
        Backend.get(`imoveis/${id}`)
            .then((response) => {
                setImovel([response.data]);
            })
            .catch((error) => {
                console.log(error);
                setMsg('Erro ao carregar os dados do imóvel.');
            });
    }, [id]);

    return (
        <>
            <div className='container custom-width mt-4'>
                {imovel.length > 0 ? (
                    imovel.map((imoveis) => (
                        <div key={imoveis.id} className='container-detalis mb-4'>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <img src={imoveis.imagem_url} alt={imoveis.descricao} className='img-fluid' />
                                    <div className='container-p'>
                                        <p>
                                            <span className='price-title'>Venda: R$ </span><br />
                                            {imoveis.valor.venda
                                                ? `${imoveis.valor.venda.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                                                : 'Valor de Venda indisponível'}
                                        </p>
                                        <p>
                                            <span className='price-title'>Aluguel: R$ </span><br />
                                            {imoveis.valor.aluguel
                                                ? `${imoveis.valor.aluguel.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mês`
                                                : 'Valor de Aluguel indisponível'}
                                        </p>
                                    </div>
                                    <div className='container-carac'>
                                        <div className='carac-column'>
                                            <p>{imoveis.area} m² - Área</p>
                                            <p>{imoveis.quartos} - Quartos</p>
                                            <p>{imoveis.banheiros} - Banheiros</p>
                                            <p>{imoveis.suites} - Suítes</p>
                                            <p>{imoveis.vagas} - Vagas</p>
                                            <p>
                                                {imoveis.caracteristicas.aceita_animais ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.aceita_animais ? 'Aceita animais' : 'Não aceita animais'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.piscina ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.piscina ? 'Piscina' : 'Sem piscina'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.varanda ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.varanda ? 'Varanda' : 'Sem varanda'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.quintal ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.quintal ? 'Quintal' : 'Sem quintal'}
                                            </p>
                                        </div>
                                        <div className='carac-column'>
                                            <p>
                                                {imoveis.caracteristicas.ar_condicionado ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.ar_condicionado ? 'Ar condicionado' : 'Sem ar condicionado'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.condominio_fechado ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.condominio_fechado ? 'Condomínio fechado' : 'Sem condomínio fechado'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.cozinha ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.cozinha ? 'Cozinha' : 'Sem cozinha'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.deposito ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.deposito ? 'Depósito' : 'Sem depósito'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.varanda_gourmet ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.varanda_gourmet ? 'Varanda gourmet' : 'Sem varanda gourmet'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.jardim ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.jardim ? 'Jardim' : 'Sem jardim'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.lareira ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.lareira ? 'Lareira' : 'Sem lareira'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.lavanderia ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.lavanderia ? 'Lavanderia' : 'Sem lavanderia'}
                                            </p>
                                        </div>
                                        <div className='carac-column'>
                                            <p>
                                                {imoveis.caracteristicas.playground ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.playground ? 'Playground' : 'Sem playground'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.quadra_poliesportiva ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.quadra_poliesportiva ? 'Quadra poliesportiva' : 'Sem quadra poliesportiva'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.quadra_tenis ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.quadra_tenis ? 'Quadra de tênis' : 'Sem quadra de tênis'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.pista_cooper ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.pista_cooper ? 'Pista de cooper' : 'Sem pista de cooper'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.escritorio ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.escritorio ? 'Escritório' : 'Sem escritório'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.sauna ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.sauna ? 'Sauna' : 'Sem sauna'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.area_servico ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.area_servico ? 'Área de serviço' : 'Sem área de serviço'}
                                            </p>
                                            <p>
                                                {imoveis.caracteristicas.academia ? <FaCheck /> : <BiError />}
                                                {imoveis.caracteristicas.academia ? 'Academia' : 'Sem academia'}
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        <strong>{imoveis.endereco.rua} - {imoveis.endereco.numero} - {imoveis.endereco.bairro} - {imoveis.endereco.cep} - {imoveis.endereco.cidade} - {imoveis.endereco.estado}</strong>
                                    </p>
                                    <p className='description'>{imoveis.descricao}</p>
                                </div>
                                
                                {/* Formulário de Contato ao lado dos detalhes do imóvel */}
                                <div className='col-md-4'>
                                    <ContatoForm />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='msg'>{msg}</p>
                )}
            </div>
        </>
    );
}

export default ImoveisDetalis;
