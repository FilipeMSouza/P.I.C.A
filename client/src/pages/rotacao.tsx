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

    const [parm1, setParm1] = useState('')
    const [parm2, setParm2] = useState('')
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
                <button onClick={() => setParm1('/client/src/assets/placeholders/lena.jpeg')}>Rotacionar à</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/amongus.jpeg')}>Rotacionar à</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/doggo.jpeg')}>Rotacionar à</button>
                    <button onClick={() => setParm1('/client/src/assets/placeholders/rayquaza.jpeg')}>Rotacionar à</button>
                </ButtonContent>

            </AuxContainer>

            <AuxContainer2>
                <Operation>
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Direção
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Esqueda</Dropdown.Item>
                            <Dropdown.Item >Direita</Dropdown.Item>
                            
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                            Graus
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >90</Dropdown.Item>
                            <Dropdown.Item >180</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </Operation>
                <Result>
                   

                </Result>
            </AuxContainer2>

        </Container>


    );
}


