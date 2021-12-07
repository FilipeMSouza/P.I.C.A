import { useEffect, useState } from 'react';

import { api } from '../../Services/api';

import RepositoryImage from '../components/repository_image';

import Lena from "../../assets/placeholders/lena.jpeg";
import cameraman from "../../assets/placeholders/cameraman.jpeg";
import Doggo from "../../assets/placeholders/doggo.jpeg";
import paris from "../../assets/placeholders/paris.jpeg";

import {
    Container,
    Content,
    AuxContainer,
    ButtonContent,
    Result,
    Operation,
    AuxContainer2
} from "../style"

export default function Divisao() {
    const [param1, setParam1] = useState('')
    const [param2, setParam2] = useState('')
    const [result, setResult] = useState('')

    const DivideTwoImages = async () => {
        const { data } = await api.get('divide/' + param1 + '&' + param2)
        setResult(data.data)
    }

    const btn = [
        { name: "Lena", where: Lena, },
        { name: "cameraman", where: cameraman, },
        { name: "Doggo", where: Doggo, },
        { name: "paris", where: paris, }
    ];

    const urlPaths = [
        'client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fcameraman.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fparis.jpeg'
    ]

    function callSum(params: number) {
        const second = urlPaths[params - 1]
        setParam2(second)
    }

    useEffect(() => {
        param1.length !== 0 && param2.length !== 0 && DivideTwoImages()
    }, [param1, param2])

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
                        <button key={img} onClick={() => setParam1(img)}>Dividir por</button>
                    )}
                </ButtonContent>
            </AuxContainer>
            <AuxContainer2>
                <Operation>
                    {
                        [1, 2, 3, 4].map(number =>
                            <button key={number} onClick={() => callSum(number)}>Imagem {number}</button>
                        )
                    }
                </Operation>
                <Result>
                    <img className="resultado" src={result} alt="Resultado" />
                </Result>
            </AuxContainer2>
        </Container>
    );
}


