import { Container, Content, AuxContainer, ButtonContent, Result, Operation, AuxContainer2 } from "./style"
import { useEffect, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
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

export default function Rotacao() {

    const [param1, setParam1] = useState('')
    const [angle, setAngle] = useState<number>()
    const [result, setResult] = useState('')

    const rotateImage = async () => {
        const theta = angle?.toString()
        const {data} = await api.get('rotacao/' + param1 + '&' + theta)
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
        param1.length !== 0 && angle !== 0 && rotateImage()
    }, [param1, angle]);

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
                        <button key={img} onClick={() => setParam1(img)}>Rotaconar</button>
                    )}
                </ButtonContent>

            </AuxContainer>

            <AuxContainer2>
                <Operation>
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Graus
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>{setAngle(90)}}>90</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setAngle(180)}}>180</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setAngle(270)}}>270</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setAngle(360)}}>360</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setAngle(-90)}}>-90</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setAngle(-180)}}>-180</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setAngle(-270)}}>-270</Dropdown.Item>
                            <Dropdown.Item onClick={()=>{setAngle(-360)}}>-360</Dropdown.Item>
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


