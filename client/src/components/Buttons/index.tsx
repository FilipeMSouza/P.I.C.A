import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";


export function Buttons() {

    const dropdownRef = useRef(null);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);

    let navigate = useNavigate();

    return (
        <Container>
            <Dropdown>
                <Dropdown.Toggle variant="light">Op. Aritiméticas</Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>navigate('/adicao')}>Adiçao</Dropdown.Item>
                    <Dropdown.Item onClick={()=>navigate('/subtracao')}> Subtração</Dropdown.Item>
                    <Dropdown.Item onClick={()=>navigate('/multiplicacao')}> Multiplicação  </Dropdown.Item>
                    <Dropdown.Item onClick={()=>navigate('/divisao')}> Divisão  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="light">Op. Aritiméticas</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>navigate('/translacao')}>Translação</Dropdown.Item>
                    <Dropdown.Item onClick={()=>navigate('/rotacao')}> Rotação</Dropdown.Item>
                    <Dropdown.Item onClick={()=>navigate('/escala')}> Escala  </Dropdown.Item>
                    <Dropdown.Item onClick={()=>navigate('/reflexao')}> Reflexão  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="light">Histogramas</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>navigate('/histograma')}>Histogramas</Dropdown.Item>
                    <Dropdown.Item onClick={()=>navigate('/contraste')}> Contraste  </Dropdown.Item>
                    <Dropdown.Item onClick={()=>navigate('/equalized')}> Imagem Equalizada  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <button onClick={()=>navigate('/Smoothing')}>Smoothing</button>

            <Dropdown>
                <Dropdown.Toggle variant="light">Filtros Laplacianos</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item> Filtros Laplacianos</Dropdown.Item>
                    <Dropdown.Item> Filtro LoG </Dropdown.Item>
                    <Dropdown.Item onClick={()=> navigate('/Unsharp')}> Unsharp / Highboost filtering </Dropdown.Item>
                    <Dropdown.Item onClick={()=> navigate('/Robs')}> Detector de Roberts </Dropdown.Item>
                    <Dropdown.Item onClick={()=> navigate('/Sobel')} > Detector de Sobel </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>

    );
}