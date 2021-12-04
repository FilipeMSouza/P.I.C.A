import { useEffect, useState } from 'react';

import { api } from '../../Services/api';

import RepositoryImage from '../components/repository_image';

import Lena from "../../assets/placeholders/lena.jpeg";
import Amongus from "../../assets/placeholders/amongus.jpeg";
import Doggo from "../../assets/placeholders/doggo.jpeg";
import MegaRayquaza from "../../assets/placeholders/rayquaza.jpeg";


import {
    Container,
    Content,
    AuxContainer,
    ButtonContent,
    Operation,
    AuxContainer2,
    GraphResult,
    Result
} from "../style";

import { AgChartsReact } from 'ag-charts-react';

export default function Histograma() {
    const [param1, setParam1] = useState('')
    const [tipo, setTipo] = useState('')
    const [result, setResult] = useState()   



    const histogram = async () => {
        const { data } = await api.get('histograma/' + tipo + '&' + param1)
        setResult(data.data)
    }

    var options = {
        container: document.getElementById('myChart'),
        title: {
          text: 'Histograma da imagem'
        },
        subtitle: {
          text: 'Número de pixels por nível de cinza'
        },
        data: result,
        series: [
          {
            type: 'histogram',
            xKey: 'idx',
            xName: 'Nível de cinza',
            yKey: 'value',
            yName: 'Número de pixels',
            binCount: 256,
          },
        ],
        legend: {
          enabled: false,
        },
        axes: [
          {
            type: 'number',
            position: 'bottom',
            title: { text: 'Níveis de cinza'}
          },
          {
            type:'number',
            position: 'left',
            title: {text: 'Número de pixels'}
          },
        ],
        height: 550,
      };

    const btn = [
        { name: "Lena", where: Lena, },
        { name: "Amongus", where: Amongus, },
        { name: "Doggo", where: Doggo, },
        { name: "MegaRayquaza", where: MegaRayquaza, }
    ];

    const urlPaths = [
        'client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Famongus.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Frayquaza.jpeg'
    ]

    function callHistograma(params: number) {
        const second = tipoHistograma[params - 1]
        setTipo(second)
    }

    const tipoHistograma = [
        'Equalizado',
        'Normalizado',
        'Normal'
    ]

    useEffect(() => {
        param1.length !== 0 && tipo.length !== 0 && histogram()
    }, [param1, tipo])
   

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
                        <button key={img} onClick={() => setParam1(img)}>Selecionar</button>
                    )}
                </ButtonContent>
            </AuxContainer>
            <AuxContainer2>
                <Operation>
                    {
                        [1, 2, 3].map(number =>
                            <button key={number} onClick={() => callHistograma(number)}>{tipoHistograma[number - 1]}</button>
                        )
                    }
                </Operation>
                <GraphResult id = "myChart">
                    <AgChartsReact options={options}/>
                </GraphResult>
            </AuxContainer2>
        </Container>
    );
}
