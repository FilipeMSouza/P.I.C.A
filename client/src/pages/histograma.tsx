import { useEffect, useState } from 'react';

import { api } from '../Services/api';

import RepositoryImage from './repository_image';

import Lena from "../assets/placeholders/lena.jpeg";
import Amongus from "../assets/placeholders/amongus.jpeg";
import Doggo from "../assets/placeholders/doggo.jpeg";
import MegaRayquaza from "../assets/placeholders/rayquaza.jpeg";


import {
    Container,
    Content,
    AuxContainer,
    ButtonContent,
    Operation,
    AuxContainer2,
    GraphResult
} from "./style";

export default function Histograma() {
    const [param1, setParam1] = useState('')
    const [tipo, setTipo] = useState('')
    const [result, setResult] = useState('')

    let arrayRestul = ['']

    const histogram = async () => {
        const { data } = await api.get('histograma/' + tipo + '&' + param1)
        setResult(data.data)
        for(let i = 0; i < result.length; i++) {
            arrayRestul[i] = result[i]
        }
        
    }

    const btn = [
        { name: "Lena", where: Lena, },
        { name: "Amongus", where: Amongus, },
        { name: "Doggo", where: Doggo, },
        { name: "MegaRayquaza", where: MegaRayquaza, }
    ];

    const urlPaths = [
        'client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Famongus.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Frayquaza.jpeg'
    ]

    function callHistograma(params: number) {
        const second = tipoHistograma[params - 1]
        setTipo(second)
    }

    const tipoHistograma = [
        'normalizado',
        'equalizado'
    ]

    useEffect(() => {
        param1.length !== 0 && tipo.length !== 0 && histogram()
    }, [param1, tipo])

    return (
        <Container>
            <AuxContainer>
                <Content>
                    {btn.map(img => {
                        return (
                            <RepositoryImage key={img.name} imgData={img} />
                        )
                    })}
                </Content>
                <ButtonContent>
                    {urlPaths.map(img =>
                        <button key={img} onClick={() => setParam1(img)}>Selecionar</button>
                    )}
                </ButtonContent>
            </AuxContainer>
            <AuxContainer2>
                <Operation>
                    <button onClick={() => { callHistograma(1) }}> Normalizado </button>
                    <button onClick={() => { callHistograma(2) }}> Equalizado </button>
                </Operation>
                <GraphResult>
                   
                </GraphResult>
            </AuxContainer2>
        </Container>
    );
}