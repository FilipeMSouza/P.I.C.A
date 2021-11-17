import { Container } from "./styles";
import { useNavigate } from 'react-router-dom';
import React from "react";

export function Button() {

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
            <button onClick={redirectAd}> Adiçao </button>
            <button onClick={redirectSub}> Subtração </button>
            <button onClick={redirectMult}> Multiplicação  </button>
            <button onClick={redirectDiv}> Divisão  </button>
            <button onClick={redirectTrans}> Translação </button>
            <button onClick={redirectRot}> Rotação </button>
            <button onClick={redirectEsc}> Escala </button>
            <button onClick={redirectRef}> Reflexão </button>
            

        </Container>
    );
}