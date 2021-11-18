import { Container, Content, AuxContainer, ButtonContent, Result, Oparation, AuxContainer2 } from "./style"
import LogoA from "../assets/placeholders/lena_gray_512.jpeg";
import {useState, useEffect} from 'react';
import RepositoryImage from './repository_image';

interface repository {
  name: string,
  where: string,

}


export default function Adicao() {

  const [op1,setOp1] = useState<repository[]>([])


  const imageData =[
    { name: "Lena", where: LogoA,},
    { name: "tst", where: LogoA,},
    { name: "teste", where: LogoA,},
    { name: "lenna", where: LogoA,}

  ];

  useEffect(()=>{
    setOp1(imageData)
  },[]);

  return (

      <Container>
        <h1>Operação de Adição entre duas imagens</h1>
        <p>Essa função soma duas imagens resultando em outra</p>
        <AuxContainer>
          <Content>
            {op1.map( img => {
              return(
                  <RepositoryImage key ={img.name} imgData = {img}/>
              )
            })}
          </Content>
          <ButtonContent>
            <button onClick={() =>{}}>Somar com</button>
            <button onClick={() => {}}>Somar com</button>
            <button onClick={() => {}}>Somar com</button>
            <button onClick={() => {}}>Somar com</button>
          </ButtonContent>

        </AuxContainer>

        <AuxContainer2>
          <Oparation>
            <button onClick={() => {}}>Imagem 1</button>
            <button onClick={() => {}}>Imagem 2</button>
            <button onClick={() => {}}>Imagem 3</button>
            <button onClick={() => {}}>Imagem 4</button>
          </Oparation>
          <Result>
            <img className="resultado" src={LogoA} alt="Resultado" />

          </Result>
        </AuxContainer2>

      </Container>


  );
}


function path(arg0: string, path: any, arg2: string) {
  throw new Error("Function not implemented.");
}

