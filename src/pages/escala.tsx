import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";

export default function Escala() {
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
        <Container>
            <h1>Operação de Escalonamento de imagens</h1>
            <p>Essa Função muda a escala de uma imagem</p>

            <AuxContainer>
                <Content>
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                </Content>

                <ButtonContent>
                    <button onClick={() => handleClick(1)}>Upscale</button>
                    <button onClick={() => handleClick(2)}>Upscale</button>
                    <button onClick={() => handleClick(3)}>Upscale</button>
                    <button onClick={() => handleClick(4)}>Upscaale</button>
                </ButtonContent>
                <ButtonContent>
                    <button onClick={() => handleClick(1)}>Downscale</button>
                    <button onClick={() => handleClick(2)}>Downscale</button>
                    <button onClick={() => handleClick(3)}>Downscale</button>
                    <button onClick={() => handleClick(4)}>Downscale</button>
                </ButtonContent>
            </AuxContainer>
            <Result>
                <img className="resultado" src={Logo} alt="Resultado" />
            </Result>
        </Container>
    );
}