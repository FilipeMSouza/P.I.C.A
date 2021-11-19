import { Container, Content, AuxContainer, ButtonContent, Result, Oparation, AuxContainer2 } from "./style"

import { useState, useEffect, useCallback } from 'react';
import RepositoryImage from './repository_image';
import Lena from "../assets/placeholders/lena.jpeg";
import Amongus from "../assets/placeholders/amongus.jpeg";
import Doggo from "../assets/placeholders/doggo.jpeg";
import MegaRayquaza from "../assets/placeholders/rayquaza.jpeg";
interface repository {
    name: string,
    where: string,

}


export default function Multiplicacao() {

    const [btn, setBtn] = useState<repository[]>([])
    const [parm1, setParm1] = useState('')
    const [parm2, setParm2] = useState('')

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
                    <button onClick={() => setParm1('/client/src/assets/placeholders/lena.jpeg')}>Multiplicar por</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/amongus.jpeg')}>Multiplicar por</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/doggo.jpeg')}>Multiplicar por</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/rayquaza.jpeg')}>Multiplicar por</button>
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

                    </Result>
                </AuxContainer2>

            </Container>
    

    );
}


