import { Container, Content, AuxContainer, ButtonContent, Result, Oparation, AuxContainer2 } from "./style"
import { useState, useEffect, useCallback } from 'react';
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

export default function Adicao() {

    const [btn, setBtn] = useState<repository[]>([])
    const [parm1, setParm1] = useState('')
    const [parm2, setParm2] = useState('')
    const [result, setResult] = useState('')
    
    const sumTwoImages = useCallback(async (img1, img2)  =>{
        const result = await api.get('sum/' + img1 +'&' + img2)
        setResult(result.data)
    },[result])
    
    const imageData = [
        { name: "Lena", where: Lena, },
        { name: "Amongus", where: Amongus, },
        { name: "Doggo", where: Doggo, },
        { name: "MegaRayquaza", where: MegaRayquaza, }
    ];
    useEffect(() => {
        setBtn(imageData)
    }, []);

  function callSum(params: number) {
      switch (params){
        case 1:
            setParm2('client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg')
            sumTwoImages(parm1, parm2)
            break;
        case 2:
            setParm2('client%2Fsrc%2Fassets%2Fplaceholders%2Famongus.jpeg')
            sumTwoImages(parm1, parm2)
            break;
        case 3:
            setParm2('client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg')
            sumTwoImages(parm1, parm2)
            break;
        case 4: 
            setParm2('client%2Fsrc%2Fassets%2Fplaceholders%2Frayquaza.jpeg')
            sumTwoImages(parm1, parm2)
            break;    
      }
  }

  


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
                    <button onClick={() => setParm1('client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg')}>Somar com</button>
                    <button onClick={() => setParm1('client%2Fsrc%2Fassets%2Fplaceholders%2Famongus.jpeg')}>Somar com</button>
                    <button onClick={() => setParm1('client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg')}>Somar com</button>
                    <button onClick={() => setParm1('client%2Fsrc%2Fassets%2Fplaceholders%2Frayquaza.jpeg')}>Somar com</button>
                </ButtonContent>

            </AuxContainer>

            <AuxContainer2>
                <Oparation>
                    <button onClick={() => callSum(1)}>Imagem 1</button>
                    <button onClick={() => callSum(2)}>Imagem 2</button>
                    <button onClick={() => callSum(3)}>Imagem 3</button>
                    <button onClick={() => callSum(3)}>Imagem 4</button>
                </Oparation>
                <Result>
                    <img className="resultado" src={result} alt="Resultado"/>
                </Result>
            </AuxContainer2>

        </Container>


    );
}


