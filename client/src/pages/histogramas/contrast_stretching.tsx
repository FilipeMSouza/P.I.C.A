import { Container, Content, AuxContainer, ButtonContent, Result,  AuxContainer2, GraphResult } from "../style"

import {useEffect, useState} from 'react';
import { api } from '../../Services/api';

import RepositoryImage from '../components/repository_image';
import Lena from "../../assets/placeholders/lena.jpeg";
import cameraman from "../../assets/placeholders/cameraman.jpeg";
import Doggo from "../../assets/placeholders/doggo.jpeg";
import paris from "../../assets/placeholders/paris.jpeg";

import { AgChartsReact } from 'ag-charts-react';

interface repository {
    name: string,
    where: string,

};


export default function ContrastStretch() {

    const [param, setParam] = useState('')
    const [result, setResult] = useState('')
    const [resultImg, setResultImg] = useState('')
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

    const urlPaths = [
        'client%2Fsrc%2Fassets%2Fplaceholders%2Flena.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fcameraman.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fdoggo.jpeg',
        'client%2Fsrc%2Fassets%2Fplaceholders%2Fparis.jpeg'
    ]

    const contrastStretch = async () => {
        const {data} = await api.get('contrastStretching/' + param)
        setResult(data.data.histData)
        setResultImg(data.data.imgData)
        console.log(result)
    }

    function callHistograma(params: number) {
        const second = urlPaths[params - 1]
        setParam(second)
    }

    useEffect(() => {
        param.length !== 0 && contrastStretch()
    }, [param])

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
                    {
                        [1, 2, 3,4].map(number =>
                            <button key={number} onClick={() => callHistograma(number)}>Selecionar</button>
                        )
                    }
                    </ButtonContent>

                </AuxContainer>

                <AuxContainer2>
                    <GraphResult id = "myChart">
                        <AgChartsReact options={options}/>
                    </GraphResult>

                    <Result>
                        <img className="resultado" src={resultImg} alt="Resultado" />
                    </Result>
                </AuxContainer2>

            </Container>
    

    );
}


