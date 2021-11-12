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
`;


export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    img{
        margin-left: .75rem;
        padding: 1rem;
        &.opcao{
            height: 5rem;
            width:  5rem;
        }
    }
    
`;


export const ButtonContent = styled.div`
    display: flex;
    flex-direction: column;
    

    button { 
        margin-top:2rem;
        margin-bottom:2rem;
        margin-left: 0.75rem;
        height: 3rem;
        background: var(--Dark-brown);
        padding: 0.5rem 0.5rem;
        border-radius: 0.25rem;
        color: var(--light-brown);
        border-color: var(--Dark-brown);
        box-shadow: none;
    }
`;

export const Result = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    align-items: center;
    margin-top: -24rem;
    margin-left: auto;
    margin-right: 1rem;
    width: 50%;
    img{
        padding: 0.5rem;
        &.resultado{
            width: 20rem;
            height: 20rem;
        }
    }
`;