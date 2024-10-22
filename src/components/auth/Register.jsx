import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Backend from '../config/Index'
import Input from '../form/Input';


function Register() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function user(e) {
        e.preventDefault();

        const userData = {
            nome,
            email,
            password,
        };

        Backend.get('/user')
            .then((response) => {
                const existingUsers = response.data;

                const emailExists = existingUsers.some((user) => user.email === email);

                if (emailExists) {
                    alert('Este e-mail já está cadastrado!');
                } else {
                    Backend.post('/user', userData)
                        .then((response) => {
                            console.log('Usuário registrado com sucesso:', response);
                            setNome('');
                            setEmail('');
                            setPassword('');
                        })
                        .catch((error) => {
                            alert('Erro ao cadastrar usuário.');
                            console.log(error);
                        });
                }
            })
            .catch((error) => {
                alert('Erro ao buscar usuários existentes.');
                console.log(error);
            });
    
}


return (

    <>
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="card shadow" style={{ width: '500px' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <form onSubmit={user}>
                        <div className="mb-3">
                            <Input
                                text='Nome:'
                                name='nome'
                                type='text'
                                placeholder='Digite seu nome'
                                value={nome}
                                handleOnchange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                text='Email'
                                name='email'
                                type='email'
                                placeholder='Digite seu Email'
                                value={email}
                                handleOnchange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <Input
                                text='Senha'
                                name='senha'
                                type='password'
                                placeholder='Digite sua senha'
                                value={password}
                                handleOnchange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="card-link w-100">Registrar</button>
                    </form>

                    <div className="text-center mt-3">
                        <Link to="/login" className="card-link w-100">Voltar</Link>
                    </div>


                </div>
            </div>
        </div>
    </>
)
}

export default Register