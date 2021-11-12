import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";

export default function Subtracao() {
    return (
        <Container>
            <h1>Operação de Subtração entre duas imagens</h1>
            <p>Essa função Subtrai duas imagens resultando em outra</p>

            <AuxContainer>
                <Content>
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                </Content>

                <ButtonContent>
                    <button onClick={() => console.log("Clicked")}>Subtrair das outras imagens</button>
                    <button onClick={() => console.log("Clicked")}>Subtrair das outras imagens</button>
                    <button onClick={() => console.log("Clicked")}>Subtrair das outras imagens</button>
                    <button onClick={() => console.log("Clicked")}>Subtrair das outras imagens</button>
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