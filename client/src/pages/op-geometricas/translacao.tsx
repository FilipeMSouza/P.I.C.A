import { Container, Content, AuxContainer, ButtonContent, Result, Operation, AuxContainer2 } from "../style"

import { useEffect, useState} from 'react';
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

export default function Translacao(this: any) {

    const [param1, setParam1] = useState('')
    const [paramX, setParamX] = useState('')
    const [paramY, setParamY] = useState('')

    const [result, setResult] = useState('')

    const translacImage = async () => {
        var X_Axis = paramX?.toString()
        var Y_Axis = paramY?.toString()
        const {data} = await api.get('translacao/' + param1 + '&' + X_Axis + '&' + Y_Axis)
        setResult(data.data)
    }

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

    useEffect(() => {
        param1.length !== 0 && paramX.length !== 0 && paramY.length !== 0 && translacImage()
    }, [param1, paramX, paramY]);


    const urlPaths = [
        'client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fcameraman.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fparis.jpeg'
    ]

    const input=[
        {Axis: 'X', value: 0, text :"0"},
        {Axis: 'Y', value: 0, text :"0"}
    ]

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
                        <button onClick={() => setParam1(img)}>Trasnlacionar</button>
                    )}
                    </ButtonContent>

                </AuxContainer>

                <AuxContainer2>
                    <Operation>
                        {input.map(inp =>
                            <label>
                                Fator eixo {inp.Axis}:
                                <input type="number" placeholder={inp.text} onChange={e=> {
                                    if(inp.Axis === 'X'){
                                        console.log(paramX)
                                        setParamX(e.target.value);
                                    }
                                else{
                                    setParamY(e.target.value);
                                        console.log(paramY)
                                }}}/>
                            </label>
                        )}
                    
                    </Operation>
                    
                    <Result>
                        <img className="resultado" src={result} alt="Resultado" />
                    </Result>

                </AuxContainer2>

            </Container>
    

    );
}


