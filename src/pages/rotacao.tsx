import { Container, Content, AuxContainer, ButtonContent, Result, Oparation, AuxContainer2 } from "./style"
import LogoA from "../assets/placeholders/lena_gray_512.jpeg";
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Adicao() {

    const [op1, setOp1] = useState("off")
    const [op2, setOp2] = useState("off")
    const [op3, setOp3] = useState("off")
    const [op4, setOp4] = useState("off")

    function handleClick(param: number) {
        switch (param) {
            case 1:
                console.log(1)
                setOp1("on");
                setOp2("off");
                setOp3("off");
                setOp4("off");
                console.log(op1, op2, op3, op4);
                break;
            case 2:
                console.log(2);
                setOp2("on");
                setOp1("off");
                setOp3("off");
                setOp4("off");
                console.log(op1, op2, op3, op4);
                break;
            case 3:
                console.log(3);
                setOp3("on");
                setOp2("off");
                setOp1("off");
                setOp4("off");
                console.log(op1, op2, op3, op4);
                break;
            case 4:
                console.log(4);
                setOp4("on");
                setOp2("off");
                setOp3("off");
                setOp1("off");
                console.log(op1, op2, op3, op4);
                break;
            default:
                break;
        }
    }

    return (

        <Container>
            <h1>Operação de Adição entre duas imagens</h1>
            <p>Essa função soma duas imagens resultando em outra</p>
            <AuxContainer>
                <Content>
                    <img className="opcao" src={LogoA} alt="logo" />
                    <img className="opcao" src={LogoA} alt="logo" />
                    <img className="opcao" src={LogoA} alt="logo" />
                    <img className="opcao" src={LogoA} alt="logo" />
                </Content>
                <ButtonContent>
                    <button onClick={() => handleClick(1)}>Rotacionar à</button>
                    <button onClick={() => handleClick(2)}>Rotacionar à</button>
                    <button onClick={() => handleClick(3)}>Rotacionar à</button>
                    <button onClick={() => handleClick(4)}>Rotacionar à</button>
                </ButtonContent>

            </AuxContainer>

            <AuxContainer2>
                <Oparation>
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Direção
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Esqueda</Dropdown.Item>
                            <Dropdown.Item >Direita</Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >30</Dropdown.Item>
                            <Dropdown.Item >45</Dropdown.Item>
                            <Dropdown.Item >90</Dropdown.Item>
                            <Dropdown.Item >135</Dropdown.Item>
                            <Dropdown.Item >150</Dropdown.Item>
                            <Dropdown.Item >180</Dropdown.Item>
                            <Dropdown.Item >225</Dropdown.Item>
                            <Dropdown.Item >240</Dropdown.Item>
                            <Dropdown.Item >270</Dropdown.Item>
                            <Dropdown.Item >315</Dropdown.Item>
                            <Dropdown.Item >330</Dropdown.Item>
                            <Dropdown.Item >360</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </Oparation>
                <Result>
                    <img className="resultado" src={LogoA} alt="Resultado" />

                </Result>
            </AuxContainer2>

        </Container>


    );
}


