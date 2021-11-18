import { Container, Content, AuxContainer, ButtonContent, Result, Oparation, AuxContainer2 } from "./style"
import LogoA from "../assets/placeholders/lena.jpeg";
import { useState, useEffect, useCallback } from 'react';
import RepositoryImage from './repository_image';
import { api } from '../Services/api';
interface repository {
    name: string,
    where: string,

}

export default function Adicao() {

    const [btn, setBtn] = useState<repository[]>([])
    const [parm1, setParm1] = useState('')
    const [parm2, setParm2] = useState('')
    const [result, setResult] = useState()

    const loadSumImages = async()  => {
        const response = await api.get('sum')
    };
    
    const sumTwoImages = useCallback((img1, img2) =>{
    },[])

    const imageData = [
        { name: "Lena", where: LogoA, },
        { name: "tst", where: LogoA, },
        { name: "teste", where: LogoA, },
        { name: "lenna", where: LogoA, }
    ];
    useEffect(() => {
        setBtn(imageData)
    }, []);

  



    return (

        <Container>
            <h1>Operação de Adição entre duas imagens</h1>
            <p>Essa função soma duas imagens resultando em outra</p>
            <AuxContainer>
                <Content>
                    {btn.map(img => {
                        return (
                            <RepositoryImage key={img.name} imgData={img} />
                        )
                    })}
                </Content>
                <ButtonContent>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/lena.jpeg')}>Somar com</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/amongus.jpeg')}>Somar com</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/doggo.jpeg')}>Somar com</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/rayquaza.jpeg')}>Somar com</button>
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


