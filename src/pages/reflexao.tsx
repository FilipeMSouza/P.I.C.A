import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";

export default function Reflexao() {
    return (
        <Container>
            <h1>Operação de Reflexão</h1>
            <p>Essa função faz a reflexão</p>
            <AuxContainer>
                <Content>
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                    <img className="opcao" src={Logo} alt="logo" />
                </Content>

                <ButtonContent>
                    <button onClick={() => console.log("Clicked")}>Relfetir imagem</button>
                    <button onClick={() => console.log("Clicked")}>Relfetir imagem</button>
                    <button onClick={() => console.log("Clicked")}>Relfetir imagem</button>
                    <button onClick={() => console.log("Clicked")}>Relfetir imagem</button>
                </ButtonContent>
            </AuxContainer>
            <Result>
                <img className="resultado" src={Logo} alt="Resultado" />
            </Result>
        </Container>
    );
}