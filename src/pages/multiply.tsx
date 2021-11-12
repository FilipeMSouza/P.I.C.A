import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";

export default function Multiplicacao() {
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
                    <button onClick={() => console.log("Clicked")}>Multiplicar com outras imagens</button>
                    <button onClick={() => console.log("Clicked")}>Multiplicar com outras imagens</button>
                    <button onClick={() => console.log("Clicked")}>Multiplicar com outras imagens</button>
                    <button onClick={() => console.log("Clicked")}>Multiplicar com outras imagens</button>
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