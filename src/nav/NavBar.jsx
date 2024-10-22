import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/img/logo.jpg';
import Error from '../components/pages/Error';
import Login from '../components/auth/Login';
import Home from '../components/pages/Home';
import Imoveis from '../components/imoveis/Imoveis';
import ImoveisDetalis from '../components/imoveisdetalis/ImoveisDetalis';
import Register from '../components/auth/Register';
function NavBar() {
    const [userName, setUserName] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    const handleLogout = () => {
        const confirmed = window.confirm("Você realmente deseja sair?");

        if (confirmed) {
            localStorage.removeItem('userName'); 
            setUserName(null); 
            navigate('/login'); 
        }
    };


    return (
        <div>
            <nav>
                <div className='container-nav'>
                    <Link to="/" className="nav-link logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <div className="nav-links">
                        <Link to="/imoveis" className="nav-link login">Imóveis</Link>

                        {userName ? (
                            <>
                                <span className="nav-link">Olá, {userName}</span>
                                <Link to="#" className="nav-link" onClick={handleLogout}>Sair</Link>
                            </>
                        ) : (
                            <Link to="/login" className="nav-link login">Cadastro/Login</Link>
                        )}
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/imoveis' element={<Imoveis />} />
                <Route path='/login' element={<Login />} />
                <Route path='/imoveisdetalis/:id' element={<ImoveisDetalis />} />
                <Route path='/register' element={<Register />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    );
}
