import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -2rem;
    align-items: start;

    button{ 
        background: var(--Dark-brown);
        padding: 1rem;
        margin-left: 4rem;
        margin-right: 4rem;
        border-radius: 0.25rem;
        color: var(--light-brown);
        border-color: var(--Dark-brown);
        box-shadow: none;
    }
`