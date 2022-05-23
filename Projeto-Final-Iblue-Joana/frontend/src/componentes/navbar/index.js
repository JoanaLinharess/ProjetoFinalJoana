import React ,{useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Usuario from '../../view/usuario-logado';

function Navbar(){

    const dispatch= useDispatch();
    return(
      
            
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
              
                <span className="navbar-brand font-weight-bold" >Colégio Bernoulli</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    { 
                        useSelector(state => state.usuarioLogado) >0 ?
                    <>
                        <li className="nav-item"><Link className="nav-link " to="/fundamentalaluno">Perfil</Link></li>
                        <li className="nav-item"><Link className="nav-link " to="/calculadora-Fundamental-1">Fundamental I</Link></li>
                        <li className="nav-item"><Link className="nav-link " to="/calculadora-Fundamental-2">Fundamental II</Link></li>   
                        <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})}>Sair</Link></li>
                       

                        
                    </>
                    :
                    <> 
                        <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li>
                      
                    </>
                    
                    }
                  </ul>
                  </div>
                </div>
            </nav>
            
    )
}

export default Navbar;