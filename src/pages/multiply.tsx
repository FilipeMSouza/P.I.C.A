import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";
import {useState} from 'react';

export default function Multiplicacao() {
    
    const [op1,setOp1] = useState("off")
    const [op2,setOp2] = useState("off")
    const [op3,setOp3] = useState("off")
    const [op4,setOp4] = useState("off")

    function handleClick(param: number){
        switch(param){
            case 1:
                console.log(1)
                setOp1("on");
                setOp2("off");
                setOp3("off");
                setOp4("off");
                console.log(op1,op2,op3,op4);
                break;
            case 2:
                console.log(2);
                setOp2("on");
                setOp1("off");
                setOp3("off");
                setOp4("off");
                console.log(op1,op2,op3,op4);
                break;
            case 3:
                console.log(3);
                setOp3("on");
                setOp2("off");
                setOp1("off");
                setOp4("off");
                console.log(op1,op2,op3,op4);
                break;  
            case 4:
                console.log(4);
                setOp4("on");
                setOp2("off");
                setOp3("off");
                setOp1("off");
                console.log(op1,op2,op3,op4);
                break;
            default:
                break;
            }
    }
    return (
        <Container >
            <h1>Operação de Adição entre duas imagens</h1>
            <p>Essa Função Multiplica duas imagens resultando em outra</p>

            <AuxContainer>
                <Content>
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                </Content>

                <ButtonContent>
                    <button onClick={() => handleClick(1)}>Multiplicar com outras imagens</button>
                    <button onClick={() => handleClick(2)}>Multiplicar com outras imagens</button>
                    <button onClick={() => handleClick(3)}>Multiplicar com outras imagens</button>
                    <button onClick={() => handleClick(4)}>Multiplicar com outras imagens</button>
                </ButtonContent>
            </AuxContainer>
            <Result>
                <img className="resultado" src={Logo} alt="Resultado 1" />
                <img className="resultado" src={Logo} alt="Resultado 2" />
                <img className="resultado" src={Logo} alt="Resultado 3" />
            </Result>
        </Container>
    );
}