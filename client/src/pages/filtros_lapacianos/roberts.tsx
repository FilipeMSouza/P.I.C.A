import { Container, Content, AuxContainer, ButtonContent, Result,  AuxContainer2 } from "../style"

import {useEffect, useState} from 'react';
import { api } from '../../Services/api';

import RepositoryImage from '../components/repository_image';
import Lena from "../../assets/placeholders/lena.jpeg";
import Amongus from "../../assets/placeholders/amongus.jpeg";
import Doggo from "../../assets/placeholders/doggo.jpeg";
import MegaRayquaza from "../../assets/placeholders/rayquaza.jpeg";

interface repository {
    name: string,
    where: string,

}


export default function Roberts() {

    const [param, setParam] = useState('')
    const [vResult, setVresult] = useState('')
    const [hResult, setHresult] = useState('')
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

    const detectorSobel = async () => {
        const {data} = await api.get('detectorRoberts/' +param)
        setVresult(data.data.verticalImg)
        setHresult(data.data.horizontalImg)
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
                            <button key={img} onClick={() => setParam(img)}>Detector Sobel</button>
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


