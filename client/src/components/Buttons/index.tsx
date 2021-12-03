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

    const redirectAd = () => {
        navigate('/adicao')
    }
    const redirectSub = () => {
        navigate('/subtracao')
    }
    const redirectMult = () => {
        navigate('/multiplicacao')
    }
    const redirectDiv = () => {
        navigate('/divisao')
    }
    const redirectTrans = () => {
        navigate('/translacao')
    }
    const redirectRot = () => {
        navigate('/rotacao')
    }
    const redirectEsc = () => {
        navigate('/escala')
    }
    const redirectRef = () => {
        navigate('/reflexao')
    }
    const redirectHisto = () => {
        navigate('/histograma')
    }
    const redirectcontrast = () => {
        navigate('/contraste')
    }
    const redirectequalized = () => {
        navigate('/equalized')
    }


    return (

        <Container>


            <Dropdown>
                <Dropdown.Toggle variant="light">Op. Aritiméticas</Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={redirectAd}>Adiçao</Dropdown.Item>
                    <Dropdown.Item onClick={redirectSub}> Subtração</Dropdown.Item>
                    <Dropdown.Item onClick={redirectMult}> Multiplicação  </Dropdown.Item>
                    <Dropdown.Item onClick={redirectDiv}> Divisão  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="light">Op. Aritiméticas</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={redirectTrans}>Translação</Dropdown.Item>
                    <Dropdown.Item onClick={redirectRot}> Rotação</Dropdown.Item>
                    <Dropdown.Item onClick={redirectEsc}> Escala  </Dropdown.Item>
                    <Dropdown.Item onClick={redirectRef}> Reflexão  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="light">Op. Aritiméticas</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={redirectHisto}>Histogramas</Dropdown.Item>
                    <Dropdown.Item onClick={redirectcontrast}> Contraste  </Dropdown.Item>
                    <Dropdown.Item onClick={redirectequalized}> Imagem Equalizada  </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* <button onClick={redirectAd}> Adiçao </button>
            <button onClick={redirectSub}> Subtração </button>
            <button onClick={redirectMult}> Multiplicação  </button>
            <button onClick={redirectDiv}> Divisão  </button>
            <button onClick={redirectTrans}> Translação </button>
            <button onClick={redirectRot}> Rotação </button>
            <button onClick={redirectEsc}> Escala </button>
            <button onClick={redirectRef}> Reflexão </button>
            <button onClick={redirectHisto}> Histogramas </button>
            <button onClick={redirectcontrast}> Contrast Stretching </button>
            <button onClick={redirectequalized}> Imagem Equalizada </button> */}
        </Container>

    );
}