import { Container, Content, AuxContainer, ButtonContent, Result, Oparation, AuxContainer2 } from "./style"
import LogoA from "../assets/placeholders/lena.jpeg";
import {useState} from 'react';
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
                    <button onClick={() => setParm1('/client/src/assets/placeholders/lena.jpeg')}>Subtrair de</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/amongus.jpeg')}>Subtrair de</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/doggo.jpeg')}>Subtrair de</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/rayquaza.jpeg')}>Subtrair de</button>
                    </ButtonContent>

                </AuxContainer>

                <AuxContainer2>
                    <Oparation>
                    <button onClick={() => setParm2('/client/src/assets/placeholders/lena.jpeg')}>Imagem 1</button>
                    <button onClick={() => setParm2('/client/src/assets/placeholders/amongus.jpeg')}>Imagem 2</button>
                    <button onClick={() => setParm2('/client/src/assets/placeholders/doggo.jpeg')}>Imagem 3</button>
                    <button onClick={() => setParm2('/client/src/assets/placeholders/rayquaza.jpeg')}>Imagem 4</button>
                    </Oparation>
                    <Result>
                        <img className="resultado" src={LogoA} alt="Resultado" />

                    </Result>
                </AuxContainer2>

            </Container>
    

    );
}


