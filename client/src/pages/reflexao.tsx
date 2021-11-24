import { Container, Content, AuxContainer, ButtonContent, Result,  AuxContainer2 } from "./style"

import {useEffect, useState} from 'react';
import { api } from '../Services/api';

import RepositoryImage from './repository_image';
import Lena from "../assets/placeholders/lena.jpeg";
import Amongus from "../assets/placeholders/amongus.jpeg";
import Doggo from "../assets/placeholders/doggo.jpeg";
import MegaRayquaza from "../assets/placeholders/rayquaza.jpeg";
interface repository {
    name: string,
    where: string,

}


export default function Reflexao() {

    const [param, setParam] = useState('')
    const [result, setResult] = useState('')
    const [btn, setBtn] = useState<repository[]>([])
    const imageData = [
        { name: "Lena", where: Lena, },
        { name: "Amongus", where: Amongus, },
        { name: "Doggo", where: Doggo, },
        { name: "MegaRayquaza", where: MegaRayquaza, }
    ];
    useEffect(() => {
        setBtn(imageData)
    }, []);

    const urlPaths = [
        'client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Famongus.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Frayquaza.jpeg'
    ]

    const reflectImage = async () => {
        const {data} = await api.get('reflexao/' + param)
        setResult(data.data)
    }

    useEffect(() => {
        param.length !== 0 && reflectImage()
    }, [param])

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
                            <button key={img} onClick={() => setParam(img)}>Refletir</button>
                        )}
                    </ButtonContent>

                </AuxContainer>

                <AuxContainer2>
                    <Result>
                        <img className="resultado" src={result} alt="Resultado" />
                    </Result>
                </AuxContainer2>

            </Container>
    

    );
}


