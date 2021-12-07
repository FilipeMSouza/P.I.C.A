import { Container, Content, AuxContainer, ButtonContent, Result, Operation, AuxContainer2 } from "../style"
import { useState, useEffect } from 'react';
import { api } from '../../Services/api';
import RepositoryImage from '../components/repository_image';
import Lena from "../../assets/placeholders/lena.jpeg";
import cameraman from "../../assets/placeholders/cameraman.jpeg";
import Doggo from "../../assets/placeholders/doggo.jpeg";
import paris from "../../assets/placeholders/paris.jpeg";
import Dropdown from "react-bootstrap/esm/Dropdown";
interface repository {
    name: string,
    where: string,

}



export default function Smoothing() {

    const [paramImg, setParamImg] = useState('')
    const [matrix, setMatrix] = useState('')
    const [border, setBorder] = useState('')
    const [result, setResult] = useState('')

    const smoothFilter = async () => {
       
        const { data } = await api.get('smoothing/' + paramImg + '&' + matrix + '&' + border)
        setResult(data.data)
    }

    useEffect(() => {
        paramImg.length !== 0 && matrix.length !== 0 && border.length !== 0 && smoothFilter()
    }, [paramImg, matrix, border]);

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

    const input = [
        { Axis: 'X', value: 0, text: "0" },
        { Axis: 'Y', value: 0, text: "0" }
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
                        <button key={img} onClick={() => setParamImg(img)}>Selecionar</button>
                    )}
                </ButtonContent>

            </AuxContainer>

            <AuxContainer2>
                <Operation>
                    <Dropdown>
                        <Dropdown.Toggle variant="light">Mascara Simples</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {setMatrix('1')}}>3x3 </Dropdown.Item>
                            <Dropdown.Item onClick={() => {setMatrix('2')}}> 5x5 </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="light">Masca Complexa</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {setMatrix('3')}}> 3x3 </Dropdown.Item>
                            <Dropdown.Item onClick={() => {setMatrix('4')}}> 5x5 </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="light">Bordas</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {setBorder('1')}} > Padding Com Zeros </Dropdown.Item>
                            <Dropdown.Item onClick={() => {setBorder('2')}}> Convolucao Periodica </Dropdown.Item>
                            <Dropdown.Item onClick={() => {setBorder('3')}}> Replicacao Dos Pixels </Dropdown.Item>
                            <Dropdown.Item onClick={() => {setBorder('4')}}> Zero Aos Resultados Não Calculáveis </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Operation>
                <Result>
                    <img className="resultado" src={result} alt="Resultado" />
                </Result>
            </AuxContainer2>

        </Container>


    );
}


