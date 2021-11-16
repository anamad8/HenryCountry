import React from 'react';
import styles from './Inicio.module.css'
import { NavLink }from 'react-router-dom'

export default function Inicio() {
    return (
        <div className={styles.inicio}>
            <div className={styles.card}>
                <NavLink className={styles.btnInicio} to="/home">BIENVENIDO</NavLink>
            </div>
        </div>
    )
}



