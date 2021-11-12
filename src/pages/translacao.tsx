import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";

export default function Translacao() {
    return (
        <Container>
            <h1>Operação de Translação</h1>
            <p>IDK</p>
            <AuxContainer>
                <Content>
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                </Content>

                <ButtonContent>
                    <button onClick={() => console.log("Clicked")}>Translacionar imagem</button>
                    <button onClick={() => console.log("Clicked")}>Translacionar imagem</button>
                    <button onClick={() => console.log("Clicked")}>Translacionar imagem</button>
                    <button onClick={() => console.log("Clicked")}>Translacionar imagem</button>
                </ButtonContent>
            </AuxContainer>

            <Result>
                <img className="resultado" src={Logo} alt="Resultado" />
            </Result>


        </Container>

    );
}