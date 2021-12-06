import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    margin-top: -2.7rem;
    justify-items: center;

    button{
        position: relative;
        background-color: white;
        color: var(--preto);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        box-shadow: .2rem .4rem .8rem #001728;
    }
    
`