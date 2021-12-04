import { Container, Content, AuxContainer, ButtonContent, Result, Operation, AuxContainer2 } from "../style"

import { useEffect, useState} from 'react';
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

export default function Translacao(this: any) {

    const [param1, setParam1] = useState('')
    const [filter, setFilter] = useState('')
    const [paramY, setParamY] = useState('')

    const [result, setResult] = useState('')

    const translacImage = async () => {
        var auxFilter = filter?.toString()
        const {data} = await api.get('unsharp_mask_highboost/' + param1 + '&' + auxFilter)
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

    useEffect(() => {
        param1.length !== 0 && filter.length  !== 0 && translacImage()
    }, [param1, filter]);


    const urlPaths = [
        'client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Famongus.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Frayquaza.jpeg'
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
                        <button onClick={() => setParam1(img)}>selecionar</button>
                    )}
                    </ButtonContent>

                </AuxContainer>

                <AuxContainer2>
                    <Operation>
                        <label>
                            insira um valor de flitro:
                            <input type="number" placeholder="0" onChange={e=> {setFilter(e.target.value);}}/>
                        </label>
                    </Operation>
                    
                    <Result>
                        <img className="resultado" src={result} alt="Resultado" />
                    </Result>

                </AuxContainer2>

            </Container>
    

    );
}


