import React from 'react';
import s from './Nav.module.css'
import { NavLink }from 'react-router-dom'
import logo from '../../img/logo.png';

export default function Nav() {
    return (
        <div className={s.contenido}>
            <div className={s.img}>
                <img src={logo} alt="Logo" />
            </div>
            <div >    
                <NavLink className={s.li} to="/home">Inicio</NavLink>
                <NavLink className={s.li} to="/activity">Crear Actividad</NavLink>
            </div>
            
        </div>
    )
}