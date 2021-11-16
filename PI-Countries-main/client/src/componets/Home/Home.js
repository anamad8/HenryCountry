import React, { Fragment, useEffect, useState } from 'react';
import Buscador from '../Buscador/Buscador';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import Paged from '../../Paged/Paged';
import s from './Home.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { getCountries } from '../../actions/index';


export default function Home() {
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries); //reeemplazo del mapStateToProps

    // console.log(allCountries)
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 9;
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const allCountriesPag = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paged = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries()) //reemplazo del mapDispatchToProps
    }, [dispatch])

    return (
        <div>
            <Nav/>
            <div  className={s.titulo}>
                <h2>Escoge tu país</h2>
            </div>
            
            <Buscador /> 
            <div className={s.container}>
            {
                allCountriesPag?.map( (c) =>{
                    return(
                            <Card imgBandera={c.imgBandera} name={c.name} continente={c.continente} key={c.id} />
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


