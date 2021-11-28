import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(11,1fr);
    gap: 0.5rem;
    margin-top: -2.7rem;
    margin-left:0.5rem;
    margin-right:0.5rem;

    button{ 
        background: var(--Dark-brown);
        padding: 1rem 1rem;
        border-radius: 0.25rem;
        color: var(--light-brown);
        border-color: var(--Dark-brown);
        box-shadow: none;
    
    }
`