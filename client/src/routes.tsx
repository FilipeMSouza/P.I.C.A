import React from 'react';
import{ 
    Routes, 
    Route
} from 'react-router-dom';

import {Home} from './components/Home';
import Adicao from './pages/adicao';
import Divisao from './pages/divisao';
import Escala from './pages/escala';
import Multiplicacao from './pages/multiply';
import Reflexao from './pages/reflexao';
import Rotacao from './pages/rotacao';
import Subtracao from './pages/subtracao';
import Translacao from './pages/translacao';
import Histograma from './pages/histograma';
import Contrast from './pages/contrast_stretching';
import Equalized from './pages/imagem_equalizada'


export default function MainRoutes() {
    return (
       <Routes>
           
           <Route path="/" element={< Home/>}/>
           <Route path="/adicao" element ={<Adicao/>} />
           <Route path="/subtracao" element ={<Subtracao/>} />
           <Route path="/multiplicacao" element ={<Multiplicacao/>} />
           <Route path="/divisao" element ={<Divisao/>} />
           <Route path="/escala" element ={<Escala/>} />
           <Route path="/translacao" element ={<Translacao/>} />
           <Route path="/rotacao" element ={<Rotacao/>} />
           <Route path="/escala" element ={<Escala/>} />
           <Route path="/reflexao" element ={<Reflexao/>} />
           <Route path="/histograma" element ={<Histograma/>} />
           <Route path="/contraste" element ={<Contrast/>} />
           <Route path="/equalized" element ={<Equalized/>} />
           <Route path="*" element ={<h1>Not Found</h1>}/>
       </Routes>
       
    );
}