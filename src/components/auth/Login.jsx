
import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate} from 'react-router-dom';
import Input from '../form/Input';
import Backned from '../config/Index';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function user(e) {
    e.preventDefault();

    Backned.get('/user')
      .then((response) => {
        const users = response.data;

        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
          alert('Login realizado com sucesso!');
          console.log('Usuário logado:', user);
          localStorage.setItem('userName', user.nome);
          navigate('/'); 
          window.location.reload(); 
        }
        else {
          alert('Email ou senha incorretos!');
        }
      })
      .catch((error) => {
        console.log('Erro ao buscar usuários:', error);
        alert('Erro ao realizar o login. Tente novamente mais tarde.');
      });

  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow" style={{ width: '500px' }}>
        <div className="card-body">
          <h5 className="card-title text-center">Login</h5>
          <form onSubmit={user}>

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
            <Link to="/register" className="card-link w-100">Cadastro</Link>
          </div>

          <div className="text-center mt-3">
            <a href="#" className="text-decoration-none">Esqueceu sua senha?</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
