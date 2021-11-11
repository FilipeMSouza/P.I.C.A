import logoImg from '../../assets/LogoImg.svg';
import { Container, Content } from './styles';
import { Button } from "../Buttons";

export function Header() {


    return (
        <Container>
            <Content>
                <img src={logoImg} alt="P.I.C.A" />
            </Content>
            <Button/>
        </Container>
    )
}