import React, { useState } from 'react';
import './ContatoForm.css'; // Importe o arquivo de estilo
import Input from '../form/Input';
import Textarea from '../form/Textarea';
import Backend from '../config/Index';
import { useParams } from 'react-router-dom';

const ContatoForm = () => {
    const { id } = useParams();
    const agora = new Date();

    const dataFormatada = agora.toLocaleDateString('pt-BR');
    const horaFormatada = agora.toLocaleTimeString('pt-BR');
    const dataRegistro = `${dataFormatada} ${horaFormatada}`;

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [msg, setMsg] = useState('');

    function submitContactForm(e) {
        e.preventDefault();

        const projectData = {
            nome,
            id_imovel: id,
            email,
            tel,
            msg,
            dataRegistro,
        };

        Backend.post('/interessaimóvel', projectData)
            .then((response) => {
                console.log("Solicitação criada com sucesso", response.data);
                setNome('');
                setEmail('');
                setMsg('');
                setTel('');
            })
            .catch((error) => {
                console.log('Error', error);
                setNome('');
                setEmail('');
                setMsg('');
                setTel('');
            });
    }

    return (
        <div className="contato-container">
            <h2>Contato</h2>
            <form onSubmit={submitContactForm}>
                <div className="mb-">
                    <Input
                        type='text'
                        text="Nome"
                        name='name'
                        placeholder='Digite seu nome'
                        value={nome}
                        handleOnchange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <Input
                        type='email'
                        text="Email"
                        name='email'
                        placeholder='Digite seu email'
                        value={email}
                        handleOnchange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <Input
                        type='tel'
                        text="Telefone"
                        name='tel'
                        placeholder='Digite seu Telefone'
                        value={tel}
                        handleOnchange={(e) => setTel(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <Textarea
                        type='textarea'
                        text="Mensagem"
                        name='mensagem'
                        placeholder='Digite Mensagem'
                        value={msg}
                        handleOnchange={(e) => setMsg(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
};

export default ContatoForm;
