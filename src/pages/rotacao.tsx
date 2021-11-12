import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";

export default function Rotacao() {
    return (
        <Container>
            <h1>Operação de Rotação </h1>
            <p>Essa função rotaciona a imagem</p>
            <AuxContainer>
                <Content>
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                </Content>

                <ButtonContent>
                    <button onClick={() => console.log("Clicked")}>Rotacionar imagem</button>
                    <button onClick={() => console.log("Clicked")}>Rotacionar imagem</button>
                    <button onClick={() => console.log("Clicked")}>Rotacionar imagem</button>
                    <button onClick={() => console.log("Clicked")}>Rotacionar imagem</button>
                </ButtonContent>
            </AuxContainer>

            <Result>
                <img className="resultado" src={Logo} alt="Resultado" />
            </Result>

        </Container>
    );
}