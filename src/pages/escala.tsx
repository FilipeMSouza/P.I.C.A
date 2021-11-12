import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";

export default function Escala() {
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
                    <button onClick={() => console.log("Clicked")}>Upscale</button>
                    <button onClick={() => console.log("Clicked")}>Upscale</button>
                    <button onClick={() => console.log("Clicked")}>Upscale</button>
                    <button onClick={() => console.log("Clicked")}>Upscaale</button>
                </ButtonContent>
                <ButtonContent>
                    <button onClick={() => console.log("Clicked")}>Downscale</button>
                    <button onClick={() => console.log("Clicked")}>Downscale</button>
                    <button onClick={() => console.log("Clicked")}>Downscale</button>
                    <button onClick={() => console.log("Clicked")}>Downscale</button>
                </ButtonContent>
            </AuxContainer>
            <Result>
                <img className="resultado" src={Logo} alt="Resultado" />
            </Result>
        </Container>
    );
}