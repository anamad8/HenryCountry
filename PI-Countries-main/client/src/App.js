import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componets/Home/Home';
import Inicio from './componets/Inicio/Inicio';
import Crear from './componets/Crear/Crear';
import CountryDeltail from './componets/CountryDeltail/CountryDeltail';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/activity" element={<Crear />}/>
        <Route exact path="/home/countries/:id" render={({match}) => <CountryDeltail country={match.params.id} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
