import { Container, Content, AuxContainer, ButtonContent, Result,  AuxContainer2, Operation } from "../style"

import {useEffect, useState} from 'react';
import { api } from '../../Services/api';

import RepositoryImage from '../components/repository_image';
import Lena from "../../assets/placeholders/lena.jpeg";
import cameraman from "../../assets/placeholders/cameraman.jpeg";
import Doggo from "../../assets/placeholders/doggo.jpeg";
import paris from "../../assets/placeholders/paris.jpeg";

interface repository {
    name: string,
    where: string,

}


export default function Log() {

    const [param, setParam] = useState('')
    const [result, setResult] = useState('')
    const [filtro, setFiltro] = useState('')
    const [btn, setBtn] = useState<repository[]>([])
    const imageData = [
        { name: "Lena", where: Lena, },
        { name: "cameraman", where: cameraman, },
        { name: "Doggo", where: Doggo, },
        { name: "paris", where: paris, }
    ];
    useEffect(() => {
        setBtn(imageData)
    }, []);

    const urlPaths = [
        'client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fcameraman.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fparis.jpeg'
    ]

    const log = async () => {
        const {data} = await api.get('LoG/' +param + '&'+ filtro)
        setResult(data.data)
    }

    useEffect(() => {
        param.length !== 0 && filtro.length != 0 && log()
    }, [param, filtro])

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
                            <button key={img} onClick={() => setParam(img)}>Selecionar</button>
                        )}
                    </ButtonContent>
                </AuxContainer>

                <AuxContainer2>
                    <Operation>
                        <button onClick={() => setFiltro('false')}>Filtro 1</button>
                        <button onClick={() => setFiltro('true')}>Filtro 2</button>
                        
                    </Operation>
                    <Result>
                    <img className="resultado" src={result} alt="Resultado" />
                    </Result>
                </AuxContainer2>

            </Container>
    

    );
}


