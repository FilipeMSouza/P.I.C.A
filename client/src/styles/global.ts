import {createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --roxo: #2C3E40;
    --lilas: #918DBF;
    --roxo-claro:#5F5DA6;
    --azul: #2D4159;
    --preto:#262626;
    --white: E3E6E3;
    
}

*{
    margin: 0;
    padding: 0;
    box-sizing: 0;


    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body{ 
        background-color: var(--white);
        -webkit-font-smoothing: antialiased;
    }


    input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    body,h1, h2, h3, h4, h5, h6, strong, label{
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    } 

    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input { 
        margin-bottom:2rem;
        margin-left: 0.75rem;
        height: 3rem;
        background: var(--white);
        border-radius: .4rem;
        border: .09rem solid black;
        box-shadow: .1rem .2rem .2rem black;
        text-align: center;
        
    }
    input:focus {
        outline: none;
    }

}
`;