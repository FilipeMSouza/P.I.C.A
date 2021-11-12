import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";

export default function Multiplicacao() {
    function handleClick(param: number){
        switch(param){
            case 1:
                console.log(1);
                break;
            case 2:
                console.log(2);
                break;
            case 3:
                console.log(3);
                break;  
            case 4:
                console.log(4);
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