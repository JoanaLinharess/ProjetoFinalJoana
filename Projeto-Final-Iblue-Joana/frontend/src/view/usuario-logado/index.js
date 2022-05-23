import React, { useState, useEffect } from 'react';
import './usuario-logado.css';
import {Link} from 'react-router-dom';
import Navbar from '../../componentes/navbar';
import { useSelector } from 'react-redux';
import firebase from '../../config/firebase';
import AlunoCard from '../../componentes/aluno-card';

function UsuarioLogado({match}){

    const [usuarios, setUsuarios] = useState([]);
    let listausuarios = [];
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() =>{
        if(match.params.parametro){
            firebase.firestore().collection('usuarios').where('email','==',usuarioEmail).get().then(async (resultado)=> {
                await resultado.docs.forEach(doc => {
                    listausuarios.push({
                        id:doc.id,
                        ...doc.data()
                    })
    
                })
    
                setUsuarios(listausuarios);
            })

        }else{
              firebase.firestore().collection('usuarios').get().then(async (resultado)=> {
                await resultado.docs.forEach(doc => {
                    listausuarios.push({
                        id:doc.id,
                        ...doc.data()
                    })

            })

            setUsuarios(listausuarios);
        })
        }
      

    });
    
    return(
        <>
         <Navbar/>
         <div className="row p-3">
        {usuarios.map(item => <AlunoCard nome={item.nome} email={item.email} serie={item.serie}   />) }
        </div>
       </>
    )
}

export default UsuarioLogado;