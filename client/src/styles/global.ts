import {createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --light-green: #025159;
    --dark-green: #012326;

    --light-brown: #D9CCC1;
    --Dark-brown: #591E11;

    --orange: #A6351C;
    --text-title: #363F5F;
    
    --text-body: #969CB3;
    --background: #F0F2F5;
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
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }


    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong, label{
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
        background: var(--background);
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