import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import s from './CountryDeltail.module.css';
import { useDispatch, useSelector } from "react-redux";
import { countryDetail } from "../../actions/index";
import {useParams} from 'react-router-dom';

export default function CountryDeltail ()  {
    const dispatch = useDispatch()

    const details = useSelector((state) => state.detail)

    const { id }= useParams();
    
    useEffect(() => {
        dispatch(countryDetail(id))
    },[dispatch, id])
    
    return (
        <div>
            <Nav/>
            <div className={s.titulo}>
                <h2>Detalle del País</h2>
            </div>
            <div className={s.pais}>
                <div className={s.card}>
                    <img src={details.imgBandera} />
                    <h2>Nombre: {details.name}  </h2>
                    <div className={s.detalles}>
                        <p>Continente: {details.continente}</p>
                        <p>Capital: {details.capital} </p>
                        <p>Subregión: {details.subRegion}  </p>
                        <p>Area: {details.area} km2 </p>
                        <p>Pobleción: {details.poblacion} </p>
                    </div>
                </div>
            </div>

            <div className={s.pais}>
                <div className={s.card}>
                    <h2>Actividades Turísticas</h2>
                    { 
                        details.activities === undefined || details.activities.length === 0 ? 
                        <p className={s.act}>No se han creado actividades</p> : 
                        details.activities.map((activity) => (
                            <div key={activity.id}>
                                <h2>{activity.name}</h2>
                                <div className={s.detalles}>
                                    <p>Dificultad: {activity.dificultad}</p>
                                    <p>Duración: {activity.duration}</p>
                                    <p>Temporada: {activity.temporada}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
