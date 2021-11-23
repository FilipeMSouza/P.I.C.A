import { Container, Content, AuxContainer, ButtonContent, Result, Operation, AuxContainer2 } from "./style"

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

export default function Translacao() {

    let X_Axis= 0;
    let Y_Axis= 0;

    const [param1, setParam1] = useState('')
    const [paramX, setParamX] = useState(X_Axis)
    const [paramY, setParamY] = useState(Y_Axis)

    const [result, setResult] = useState('')

    const translacImage = async () => {
        const {data} = await api.get('translacao/' + param1 + '&' + paramX + '&' + paramY)
        setResult(data.data)
    }

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
                    <button onClick={() => setParam1('/client/src/assets/placeholders/lena.jpeg')}>Selecionar</button>
                    <button onClick={() => setParam1('/client/src/assets/placeholders/amongus.jpeg')}>Selecionar</button>
                    <button onClick={() => setParam1('/client/src/assets/placeholders/doggo.jpeg')}>Selecionar</button>
                    <button onClick={() => setParam1('/client/src/assets/placeholders/rayquaza.jpeg')}>Selecionar</button>
                    </ButtonContent>

                </AuxContainer>

                <AuxContainer2>
                    <Operation>
                    <form>
                        <label>
                            Fator eixo X:
                            <input type="number" name="X_Axis" id="X_Axis" onChange={()=>{}}/>
                        </label>
                        <label>
                            Fator eixo Y:
                            <input type="number" name="Y_Axix" id="Y_Axis" onChange={()=>{}}/>
                        </label>
                    </form>
                    </Operation>
                    
                    <Result>
                       

                    </Result>
                </AuxContainer2>

            </Container>
    

    );
}


