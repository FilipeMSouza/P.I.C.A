import { Content } from "./style"

interface RepositoryImageProps{
    imgData:{
        name: string,
        where: string,
    }
}

export default function RepositoryImage(props: RepositoryImageProps){
    return(
        <Content>
            <img className="opcao" src = {props.imgData.where} alt = {props.imgData.name}/>
        </Content>
    );
}