import { Container, Content, AuxContainer, ButtonContent, Result, Oparation, AuxContainer2 } from "./style"
import LogoA from "../assets/placeholders/lena_gray_512.jpeg";
import {useState} from 'react';



export default function Adicao() {

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
      
            <Container>
                <h1>Operação de Adição entre duas imagens</h1>
                <p>Essa função soma duas imagens resultando em outra</p>
                <AuxContainer>
                    <Content>
                        <img className="opcao" src={LogoA} alt="logo" />
                        <img className="opcao" src={LogoA} alt="logo" />
                        <img className="opcao" src={LogoA} alt="logo" />
                        <img className="opcao" src={LogoA} alt="logo" />
                    </Content>
                    <ButtonContent>
                        <button onClick={() => handleClick(1)}>Somar com</button>
                        <button onClick={() => handleClick(2)}>Somar com</button>
                        <button onClick={() => handleClick(3)}>Somar com</button>
                        <button onClick={() => handleClick(4)}>Somar com</button>
                    </ButtonContent>

                </AuxContainer>

                <AuxContainer2>
                    <Oparation>
                        <button onClick={() => handleClick(1)}>Imagem 2</button>
                        <button onClick={() => handleClick(2)}>Imagem 3</button>
                        <button onClick={() => handleClick(3)}>Imagem 4</button>
                    </Oparation>
                    <Result>
                        <img className="resultado" src={LogoA} alt="Resultado" />

                    </Result>
                </AuxContainer2>

            </Container>
    

    );
}


