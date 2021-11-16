import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountries } from "../../actions/index";
import s from './Buscador.module.css'

export default function Buscador() {
    const dispatch = useDispatch();

    const [name, setName] = useState("")

    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
        // console.log(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameCountries(name))
    }

    // console.log(name)
    return (
        <div className={s.input}>
            <input className={s.imputBuscar}
                type= 'text'
                onChange={(e) => handleChange(e)}
                placeholder="Nombre del país">
            </input>
            <button type= 'submit' onClick={(e) => handleSubmit(e)} className={s.btnBuscar}></button>
        </div>
    )
}

