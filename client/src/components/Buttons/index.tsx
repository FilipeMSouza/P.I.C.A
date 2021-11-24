import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


export function Buttons() {

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
    return (
        <Container>
            <Dropdown>
                <Dropdown.Toggle variant = "danger">
                    Operações Aritimeticas
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={redirectAd}> Adiçao </Dropdown.Item>
                    <Dropdown.Item onClick={redirectSub}> Subtração </Dropdown.Item>
                    <Dropdown.Item onClick={redirectMult}> Multiplicação  </Dropdown.Item>
                    <Dropdown.Item onClick={redirectDiv}> Divisão  </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>


            <Dropdown>
                <Dropdown.Toggle variant = "danger">
                    Operações Geométricas
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={redirectTrans}> Translação </Dropdown.Item>
                    <Dropdown.Item onClick={redirectRot}> Rotação </Dropdown.Item>
                    <Dropdown.Item onClick={redirectEsc}> Escala </Dropdown.Item>
                    <Dropdown.Item onClick={redirectRef}> Reflexão </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <button> Histogramas </button>

        </Container>

    );
}