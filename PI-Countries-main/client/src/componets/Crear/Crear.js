import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import s from './Crear.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getCountries, createActivity } from '../../actions/index';
import {useNavigate } from "react-router-dom";

function validate(details){
    let errors = {}

    if(!details.name){
        errors.name = 'Se requiere el nombre';
    }
    if(!details.dificultad){
        errors.dificultad = 'Se requiere el dificultad';
    }
    if(!details.duration){
        errors.duration = 'Se requiere el duration'
    }
    if(!details.temporada){
        errors.temporada = 'Se requiere el temporada'
    }
    if(!details.countries){
        errors.countries = 'Se requiere el pais'
    }
    console.log("valider", Object.keys(errors).length === 0)
    
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
        countries: ''
        
    })

    const[errors, setErrors] = useState({});

    function handleSubmit(e){
        e.preventDefault();

        const err = validate(details)

        setErrors(err)
    
            console.log(Object.keys(err).length === 0)
            if(Object.keys(err).length === 0){
                
                dispatch(createActivity(details))
    
                alert('Actividad Creada')
                
                setDetails({
                    name:'',
                    dificultad:'',
                    duration:'',
                    temporada:'',
                    countries: []
                })
                history('/home')
            }
        
    }

    function handleChange(e){
        setDetails({
            ...details,
            [e.target.name] : e.target.value
        })
        setErrors( validate (details))
    }

    function handleCheck(e){
        if(e.target.checked){
            setDetails({
                ...details,
                temporada: [...details.temporada, e.target.value]
            })
        }else{
            setDetails({
                ...details,
                temporada: details.temporada.filter(t => t !== e.target.value )
            })
        }
    }

    function handleSelect(e){
        
        if(e.target.checked){
            setDetails({
                ...details,
                countries:[...details.countries, e.target.value] 
            })
        }else{
            setDetails({
                ...details,
                countries: details.countries.filter(t => t !== e.target.value )
            })
        }
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
                            <label>Nombre:</label>
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
                        <div className={s.names}>
                            <label>Dificultad:</label>
                            <select
                                name='dificultad'
                                onChange={(e) => handleChange(e)}>
                                <option value=''>Dificultad...</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                            {errors.dificultad && (
                                <p className='dificultad'>{errors.dificultad}</p>
                            )}
                        </div>
                        <div className={s.names}>
                        <label>Duración:</label>
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
                            {errors.duration && (
                                <p className='error'>{errors.duration}</p>
                            )}
                        </div>
                        <div className={s.names}>
                            <label>Temporada:</label>
                            
                                <input
                                    type='checkbox'
                                    name='temporada'
                                    value='Verano'
                                    onChange={(e) => handleCheck(e)}/>
                                    <label>Verano</label>
                                <input
                                    type='checkbox'
                                    name='temporada'
                                    value='Otoño'
                                    onChange={(e) => handleCheck(e)}/>
                                    <label>Otoño</label>

                                <input
                                    type='checkbox'
                                    name='temporada'
                                    value='Invierno'
                                    onChange={(e) => handleCheck(e)}/>
                                    <label>Invierno</label>
                            
                                <input
                                    type='checkbox'
                                    name='temporada'
                                    value='Primavera'
                                    onChange={(e) => handleCheck(e)}/>
                                    <label>Primavera</label>

                                {errors.temporada && (
                                <p className='error'>{errors.temporada}</p>
                            )} 
                        </div>
                        <div className={s.names}>
                            <label>Seleccona País:</label>
                            
                            <opcion className={s.check} >
                                {countries.map((c,key) => (
                                    <opcion className={s.check__pais} key={key} onChange= {(e) => {handleSelect(e); console.log(e.target.value)}} >
                                        <input type="checkbox" value={c.id} name='countries' />
                                            {c.name} 
                                    </opcion>
                                ))}
                            </opcion>
                            {errors.countries && (
                                <p className='error'>{errors.countries}</p>
                            )}
                        </div>

                        <button type='submit' className={s.btnActivity}>Agregar actividad</button>
                    </form>
                </div>
        </div>
    )
}
