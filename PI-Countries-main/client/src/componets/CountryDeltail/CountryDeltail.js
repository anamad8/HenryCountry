import React, { useEffect } from 'react';
import Nav from '../Nav/Nav';
import s from './CountryDeltail.module.css';
import { useDispatch, useSelector } from "react-redux";
import { countryDetail } from "../../actions/index";


export default function CountryDeltail( { country } ) {
    const dispatch = useDispatch()

    const details = useSelector((state) => state.detail)

    
    useEffect(() => {
        dispatch(countryDetail(country))
    },[dispatch])
    
    return (
        <div>
            <Nav/>
            <div className={s.titulo}>
                <h2>Detalle del País</h2>
            </div>
            <div className={s.pais}>
                
                <img src={details.imgBandera} />
                <h2>Nombre: {details.name}  </h2>
                <p>Continente:{details.continente}</p>
                <p>Capital: {details.capital} </p>
                <p>Subregión: {details.subRegion}  </p>
                <p>Area:{details.aria} km2 </p>
                <p>Pobleción: {details.poblacion} </p>

            </div>
        </div>
    )
}
