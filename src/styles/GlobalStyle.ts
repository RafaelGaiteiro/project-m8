import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #4a5568;
       
    }

    html, body, #root {
        height: 100%;
    }

    *, button, input {
        border: 0;
        outline: 0;
    
    }

    button {
        cursor: pointer;
    }
`;
