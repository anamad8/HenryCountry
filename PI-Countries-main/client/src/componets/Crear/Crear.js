import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import s from './Crear.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getCountries, createActivity } from '../../actions/index';
import {useNavigate } from "react-router-dom";

function validate(details){
    let errors = {}

    if(!details.name){
        errors.name = 'Name is required';
    }
    if(!details.duration){
        errors.duration = 'Duration is required';
    } else if (/(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)/.test(details.duration)){
        errors.duration = 'Duration must be HH:MM:SS format';
    }
    return errors
} 

export default function Crear() {
    const dispatch = useDispatch()
    const history = useNavigate() //redirige a '/....'

    const countries = useSelector((state) => state.allCountries)

    const [details, setDetails] = useState({
        name:'',
        dificultad:'',
        duration:'',
        temporada:'',
        countries: []
        
    })

    const[errors, setErrors] = useState({});


    function handleSubmit(e){
        e.preventDefault();
        console.log(details)
        dispatch(createActivity(details))
        alert('Activity Created')
        
        setDetails({
            name:'',
            dificultad:'',
            duration:'',
            temporada:'',
            countries: []
        })
        history('/home')
    }

    function handleChange(e){
        setDetails({
            ...details,
            [e.target.name] : e.target.value
        })
        setErrors( validate ({
            ...details,
            [e.target.name] : e.target.value
        }))
    }

    function handleCheck(e){
        if(e.target.checked){
            setDetails({
                ...details,
                temporada: e.target.value
            })
        }
    }
    // console.log(details)

    function handleSelect(e){
        setDetails({
            ...details,
            countries: [...details.countries, e.target.value]
        })
    }

    return (
        <div >
            <Nav/>
            <div className={s.titulo}>
                <h2>Crea tu actiividad</h2>
            </div>
            <div  className={s.form}>
            <form onSubmit= {(e) => handleSubmit(e)}>
                    <div className={s.names}>
                        <label>Nombre: </label>
                        <input 
                            type= 'text'
                            value= {details.name}
                            name= 'name'
                            onChange={(e) => handleChange(e)}
                        />
                        {errors.name && (
                            <p className='error'>{errors.name}</p>
                        )}
                        
                    </div>
                    <div className={s.diff}>
                        <label>Dificultad: </label>
                        <select
                            name='dificultad'
                            onChange={(e) => handleChange(e)}
                        >
                            <option value=''>Dificultad...</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    <div className={s.dur}>
                    <label>Duración: </label>
                        <select
                            name='duration'
                            value={details.duration}
                            onChange={(e) => handleChange(e)}
                        >
                            <option value=''>Duración...</option>
                            <option value='1'>1 Hora</option>
                            <option value='2'>2 Hora</option>
                            <option value='3'>3 Hora</option>
                            <option value='4'>1 Día</option>
                            <option value='5'>Indefinido</option>
                        </select>

                    </div>
                    <div className={s.tem}>
                        <label>Temporada: </label>
                        <label>
                            <input
                                type='checkbox'
                                name='Verano'
                                value='Verano'
                                onChange={(e) => handleCheck(e)}
                            />Verano</label>
                        <label>
                            <input
                                type='checkbox'
                                name='Otoño'
                                value='Otoño'
                                onChange={(e) => handleCheck(e)}
                            />Otroño</label>
                        <label>
                            <input
                                type='checkbox'
                                name='Invierno'
                                value='Invierno'
                                onChange={(e) => handleCheck(e)}
                            />Invierno</label>
                        <label>
                            <input
                                type='checkbox'
                                name='Primavera'
                                value='Primavera'
                                onChange={(e) => handleCheck(e)}
                            />Primavera</label>   
                    </div>
                    <div className={s.pais}>
                        <label>Seleccona País: </label>
                        <select onChange= {(e) => handleSelect(e)}>
                            <option value=''>País...</option>
                            {countries.map((c) => (
                                <option value={c.id}>{c.name}</option>
                            ))}
                        </select>
                    </div>

                    <button type='submit' className={s.btnActivity}>Agregar actividad</button>
                </form>
                </div>
        </div>
    )
}