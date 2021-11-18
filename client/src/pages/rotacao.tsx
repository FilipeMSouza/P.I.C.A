import { Container, Content, AuxContainer, ButtonContent, Result, Oparation, AuxContainer2 } from "./style"
import LogoA from "../assets/placeholders/lena.jpeg";
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export default function Adicao() {

    const [parm1, setParm1] = useState('')
    const [parm2, setParm2] = useState('')

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
                <button onClick={() => setParm1('/client/src/assets/placeholders/lena.jpeg')}>Rotacionar à</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/amongus.jpeg')}>Rotacionar à</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/doggo.jpeg')}>Rotacionar à</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/rayquaza.jpeg')}>Rotacionar à</button>
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
                            Graus
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >90</Dropdown.Item>
                            <Dropdown.Item >180</Dropdown.Item>
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


