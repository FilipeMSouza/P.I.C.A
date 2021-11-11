import { Container, RightContent, LeftContent } from "./style"
import Logo from "../assets/placeholders/lena_gray_512.jpeg";




export default function Adicao() {



    return (
        <Container>
            <h1>Operação de Adição entre duas imagens</h1>
            <p>Essa imagem soma duas imagens resultando em outra</p>
            <RightContent>
                <div>
                    <img className="imgSoma" src={Logo} alt="logo" />
                    <button onClick={() => console.log("Clicked")}>Somar às outras imagens</button>
                </div>
                <div>
                    <img className="imgSoma" src={Logo} alt="logo" />
                    <button onClick={() => console.log("Clicked")}>Somar às outras imagens</button>
                </div>
                <div>
                    <img className="imgSoma" src={Logo} alt="logo" />
                    <button onClick={() => console.log("Clicked")}>Somar às outras imagens</button>
                </div>
                <div>
                    <img className="imgSoma" src={Logo} alt="logo" />
                    <button onClick={() => console.log("Clicked")}>Somar às outras imagens</button>
                </div>
            </RightContent>

            <LeftContent>
                <img className="imgSoma" src={Logo} alt="logo" />
            </LeftContent>

        </Container>
    );
}