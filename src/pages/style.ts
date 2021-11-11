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
export const RightContent= styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    
    div{ 
        display: flex;
        flex-direction: horizontal;
    }
    img{
        margin-left: 2rem;
        padding: 0.75rem;
        &.imgSoma{
            height: 4rem;
            width:  4rem;
        }
    }

    button{
        margin-top: 1.25rem;
        height: 3rem;
        background: var(--Dark-brown);
        padding: 0.5rem 0.5rem;
        border-radius: 0.25rem;
        color: var(--light-brown);
        border-color: var(--Dark-brown);
        box-shadow: none;
    
    }

`;

export const LeftContent= styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-top: -21rem;
    
    img{
        margin-right: 5rem;
        padding: 0.75rem;
        &.imgSoma{
            height: 20rem;
            width:  20rem;
        }
    }
`;