import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../config/firebase';

import './aluno-card.css';

function AlunoCard({nome, email, serie}){


    return(
        <div className="card col-md-12 col-sm-12">
            <div className="card-body">
                <p className=" text-center">Nome: {nome}</p>
                <p className=" text-center">Email: {email}</p>                   
                <p className="text-center ">Período: {serie}</p>
            </div>

        </div>
        
    )
}

export default AlunoCard;