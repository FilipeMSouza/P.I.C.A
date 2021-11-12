import { Container, Content, AuxContainer, ButtonContent, Result } from "./style"
import LogoA from "../assets/placeholders/lena_gray_512.jpeg";



export default function Adicao() {

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
                <h1>Operação de Adição entre duas imagens</h1>
                <p>Essa função soma duas imagens resultando em outra</p>
                <AuxContainer>
                    <Content>
                        <img className="opcao" src={LogoA} alt="logo" />
                        <img className="opcao" src={LogoA} alt="logo" />
                        <img className="opcao" src={LogoA} alt="logo" />
                        <img className="opcao" src={LogoA} alt="logo" />
                    </Content>

                    <ButtonContent>
                        <button onClick={() => handleClick(1)}>Somar com as outras imagens</button>
                        <button onClick={() => handleClick(2)}>Somar com as outras imagens</button>
                        <button onClick={() => handleClick(3)}>Somar com as outras imagens</button>
                        <button onClick={() => handleClick(4)}>Somar com as outras imagens</button>
                    </ButtonContent>
                </AuxContainer>

                <Result>
                    <img className="resultado" src={LogoA} alt="Resultado 1" />
                    <img className="resultado" src={LogoA} alt="Resultado 2" />
                    <img className="resultado" src={LogoA} alt="Resultado 3" />
                </Result>

            </Container>
    

    );
}


