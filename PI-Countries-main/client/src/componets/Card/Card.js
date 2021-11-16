import React from 'react';
import s from './Card.module.css';
import { NavLink } from 'react-router-dom';

export default function Card(props) {
    // console.log(props.id)
    return (
        <div className={s.cards} >
            <div className={s.card} >
            <img src={props.imgBandera} alt={props.name} width='350' height='200'/>
            {/* <p>Id: {props.id}</p> */}
            <h3> {props.name} </h3>
            <p>Continente: {props.continente}</p>
            <NavLink to={`/home/countries/${props.id}`} className={s.masInfo} >Más Info</NavLink>   
            </div>
        </div>
    );
}
