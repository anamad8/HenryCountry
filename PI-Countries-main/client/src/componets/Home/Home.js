import React, { useEffect, useState } from 'react';
import Buscador from '../Buscador/Buscador';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import Paged from '../Paged/Paged';
import s from './Home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getActivity, getCountries, filterContinent, sort, filterActivity  } from '../../actions/index';


export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries); //reeemplazo del mapStateToProps
    var allActivity = useSelector ((state) => state.allActivity);
    // console.log(allCountries)
    const [order, setOrder] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 9;
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const allCountriesPag = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paged = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries());
        dispatch(getActivity())  //reemplazo del mapDispatchToProps
    }, [dispatch])

    // useEffect (()  => {
    //     setTimeout(()=> {
    //         var actividad = new Set(allActivity)
    //         console.log(allActivity,actividad)
    //     },2000)
        
    // },[])

    // useEffect (()  => {
        
    //         var actividad = allActivity.filter(function(ele , pos){
    //             return allActivity.indexOf(ele) === pos;
    //         })
    //         console.log(allActivity,actividad)
        
        
    // },[])

    function handleFilterActivity(e){
        dispatch(filterActivity(e.target.value))
        // console.log(filterActivity)
    }

    function handleFilterContinent(e){
        e.preventDefault();
        dispatch(filterContinent(e.target.value))
        console.log(e.target.value)
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(sort(e.target.value));
        setCurrentPage(1);
        setOrder(e.target.value)
        // console.log(e.target.value)

    }
    

    return (
        <div>
            <Nav/>
            <div  className={s.titulo}>
                <h2>Escoge tu pa??s</h2>
            </div>
            
            <Buscador />
            
            <div className={s.selectors}>
                <select onChange = {(e)=>handleSort(e)} className={s.selec} >
                    <option value = 'nada'>Ordenado por</option>
                    <option value = 'asc'>A - Z</option>
                    <option value = 'desc'>Z - A</option>
                    <option value = 'Mayor'>Poblaci??n Mayor</option>
                    <option value = 'Menor'>Poblaci??n Menor</option>
                </select>
                <select onChange = {(e)=>handleFilterContinent(e)} className={s.selec} >
                    <option value = 'All'>Continentes</option>
                    <option value = 'Americas'>Americas</option>
                    <option value = 'Europe'>Europe</option>
                    <option value = 'Africa'>??frica</option>
                    <option value = 'Asia'>Asia</option>
                    <option value = 'Oceania'>Ocean??a</option>
                </select>
                <select onChange = {(e) => handleFilterActivity(e)} className={s.selec}>
                    <option value='All'>Actividad</option>
                    {
                        
                        allActivity.map(a => (
                                <option key={a.key} value={a.name}>{a.name}</option>
                            ))
                    }
                    
                </select>
            </div>

            <div className={s.container}>
            {
                
                allCountriesPag.length === 0 ? <h2>No se encontro el pais</h2> : allCountriesPag.map( (c) =>{
                    
                    return(
                            <Card imgBandera={c.imgBandera} name={c.name} continente={c.continente} key={c.id} id={c.id} />
                        )
                })
            }
            </div>
            <Paged
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paged={paged}
            />
            
        </div>
    )
}


