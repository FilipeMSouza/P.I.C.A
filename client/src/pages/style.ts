import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    margin-top: 2rem;
    h1,p {
        margin-left: auto;
        margin-right: auto;
    }

    
`;

export const AuxContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: start;
    margin-top:2rem;
    width: 50%;
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    img{
        margin-left: .75rem;
        padding: 1rem;
        &.opcao{
            height: 10rem;
            width:  10rem;
        }
    }
    
`;

export const Img = styled.img`
        
        margin-left: .75rem;
        padding: 1rem;
        &.opcao{
            height: 6rem;
            width:  6rem;
        }
`



export const ButtonContent = styled.div`
    display: flex;
    flex-direction: column;
    

    button { 
        margin-top: 4rem;
        margin-bottom: 3rem;
        margin-left: 0.75rem;
        height: 3rem;
        background: var(--black);
        color: var(--white);
        box-shadow: .2rem .4rem .8rem var(--dark-grey);
        padding: 0.5rem 0.5rem;
        border-radius: 0.25rem;
        
        
    }
`;

export const Result = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: 15.75rem;
    width: 50%;
    img{
        padding: 0.5rem;
        &.resultado{
            width: 35rem;
            height: 35rem;
        }
    }
`;

export const Operation = styled.div`
    display: flex;
    flex-direction: row;
    

    button { 
        margin-top:2rem;
        margin-bottom:2rem;
        margin-left: 0.75rem;
        height: 3rem;
        background: var(--black);
        color: var(--white);
        box-shadow: .2rem .4rem .8rem var(--dark-grey);
        padding: 0.5rem 0.5rem;
        border-radius: 0.25rem;
        &.translacao{
            margin-top:1.495rem;
        }
    }

    form { 
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        
    }
    label { 
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--text-title);
    }

    button{
        margin-top: 1.5rem;
    }

`;

export const AuxContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    margin-top: -40rem;
    margin-left: auto;
    margin-right: 1rem;
    width: 50%;
    
`;


export const GraphResult = styled.div`
    width: 100%;
    height: 80%;
`;