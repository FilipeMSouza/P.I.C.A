import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";

export default function Divisao() {
    return (
        <Container>
            <h1>Operação de Divisão entre duas imagens</h1>
            <p>Essa Função divide uma imagem pela outra resultando em outra</p>
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
                <img className="resultado" src={Logo} alt="Resultado 1" />
                <img className="resultado" src={Logo} alt="Resultado 2" />
                <img className="resultado" src={Logo} alt="Resultado 3" />
            </Result>
        </Container>
    );
}