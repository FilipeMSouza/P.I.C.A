import React from 'react';
import{ 
    Routes, 
    Route
} from 'react-router-dom';

import {Header} from './components/Header';
import Adicao from './pages/adicao';
import Divisao from './pages/divisao';
import Escala from './pages/escala';
import Multiplicacao from './pages/multiply';
import Reflexao from './pages/reflexao';
import Rotacao from './pages/rotacao';
import Subtracao from './pages/subtracao';
import Translacao from './pages/translacao';

export default function MainRoutes() {
    return (
       <Routes>
           <Header/>
           <Route path="/adicao" element ={<Adicao/>} />
           <Route path="/divisao" element ={<Divisao/>} />
           <Route path="/escala" element ={<Escala/>} />
           <Route path="/multiplicacao" element ={<Multiplicacao/>} />
           <Route path="/reflexao" element ={<Reflexao/>} />
           <Route path="/rotacao" element ={<Rotacao/>} />
           <Route path="/subtracao" element ={<Subtracao/>} />
           <Route path="/translacao" element ={<Translacao/>} />
           <Route path="*" element ={<h1>Not Found</h1>}/>
       </Routes>
       
    );
}