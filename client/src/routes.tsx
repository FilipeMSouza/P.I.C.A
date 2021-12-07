import{ 
    Routes, 
    Route
} from 'react-router-dom'

import {Home} from './components/Home'

import Adicao from './pages/op-aritimeticas/adicao'
import Divisao from './pages/op-aritimeticas/divisao'
import Subtracao from './pages/op-aritimeticas/subtracao'
import Multiplicacao from './pages/op-aritimeticas/multiply'

import Reflexao from './pages/op-geometricas/reflexao'
import Rotacao from './pages/op-geometricas/rotacao'
import Escala from './pages/op-geometricas/escala'
import Translacao from './pages/op-geometricas/translacao'

import Histograma from './pages/histogramas/histograma'
import Contrast from './pages/histogramas/contrast_stretching'
import Equalized from './pages/histogramas/imagem_equalizada'

import Laplace from './pages/filtros_lapacianos/laplaciano'
import Log from './pages/filtros_lapacianos/log'
import Sobel from './pages/filtros_lapacianos/sobel'
import Robs from './pages/filtros_lapacianos/roberts'
import Unsharp from './pages/filtros_lapacianos/unsharp'

import Smoothing from './pages/smoothing/smoothing'

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
            <Route path="/equalized" element ={<Equalized/>} />
            <Route path="/Sobel" element ={<Sobel/>} />
            <Route path="/Robs" element ={<Robs/>} />
            <Route path="/Unsharp" element ={<Unsharp/>} /> 
            <Route path="/Smoothing" element ={<Smoothing/>} /> 
            <Route path="/Laplace" element ={<Laplace/>} /> 
            <Route path="/Log" element ={<Log/>} /> 

            <Route path="*" element ={<h1>Not Found</h1>}/>
       </Routes>
       
    );
}