import { Container, Content, AuxContainer, ButtonContent, Result, Oparation, AuxContainer2 } from "./style"

import {useEffect, useState} from 'react';
import { api } from '../Services/api';

import RepositoryImage from './repository_image';
import Lena from "../assets/placeholders/lena.jpeg";
import Amongus from "../assets/placeholders/amongus.jpg";
import Doggo from "../assets/placeholders/doggo.jpeg";
import MegaRayquaza from "../assets/placeholders/rayquaza.jpeg";
interface repository {
    name: string,
    where: string,

}


export default function Reflexao() {

    const [parm1, setParm1] = useState('')
    const [parm2, setParm2] = useState('')
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
                    <button onClick={() => setParm1('/client/src/assets/placeholders/lena.jpeg')}>Refletir</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/amongus.jpeg')}>Refletir</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/doggo.jpeg')}>Refletir</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/rayquaza.jpeg')}>Refletir</button>
                    </ButtonContent>

                </AuxContainer>

                <AuxContainer2>
                    <Oparation>
                    <button onClick={() => setParm2('/client/src/assets/placeholders/lena.jpeg')}>De Cima</button>
                    <button onClick={() => setParm2('/client/src/assets/placeholders/amongus.jpeg')}>De baixo</button>
                    <button onClick={() => setParm2('/client/src/assets/placeholders/doggo.jpeg')}>Da Esquerda</button>
                    <button onClick={() => setParm2('/client/src/assets/placeholders/rayquaza.jpeg')}>Da Direita</button>
                    </Oparation>
                    <Result>
                       

                    </Result>
                </AuxContainer2>

            </Container>
    

    );
}


