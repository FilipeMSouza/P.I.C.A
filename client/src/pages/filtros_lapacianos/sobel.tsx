import { Container, Content, AuxContainer, ButtonContent, Result,  AuxContainer2 } from "../style"

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


export default function Sobel() {

    const [param, setParam] = useState('')
    const [vResult, setVresult] = useState('')
    const [hResult, setHresult] = useState('')
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

    const detectorSobel = async () => {
        const {data} = await api.get('detectorSobel/' +param)
        setVresult(data.data.imageVertical)
        setHresult(data.data.imageHorizontal)
        console.log(vResult)
        console.log(hResult)

    }

    useEffect(() => {
        param.length !== 0 && detectorSobel()
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
                            <button key={img} onClick={() => setParam(img)}>Selecionar</button>
                        )}
                    </ButtonContent>

                </AuxContainer>

                <AuxContainer2>
                    <Result>
                        <img className="resultado" src={vResult} alt="Resultado" />
                        <img className="resultado" src={hResult} alt="Resultado" />
                    </Result>
                </AuxContainer2>

            </Container>
    

    );
}


