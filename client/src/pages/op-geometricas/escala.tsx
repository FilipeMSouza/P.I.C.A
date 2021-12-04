import { Container, Content, AuxContainer, ButtonContent, Result, Operation, AuxContainer2 } from "../style"
import { useState, useEffect } from 'react';
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



export default function Escala() {

    const [param1, setParam1] = useState('')
    const [param2, setParam2] = useState('')
    const [param3, setParam3] = useState('')
    const [result, setResult] = useState('')

    const scaleImage = async () => {
        const {data} = await api.get('escala/' + param1 + '&' + param2 + '&' + param3)
        setResult(data.data)
    }

    useEffect(() => {
        param1.length !== 0 && param2.length !== 0 && param3.length !== 0 && scaleImage()
    }, [param1, param2, param3]);

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
                        <button key={img} onClick={() => setParam1(img)}>Mudar escala</button>
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
                                        console.log(param2)
                                        setParam2(e.target.value);
                                    }
                                else{
                                    setParam3(e.target.value);
                                        console.log(param3)
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


