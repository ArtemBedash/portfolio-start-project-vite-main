import {createGlobalStyle} from "styled-components";
import {Theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    
    
    
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${Theme.colors.font}
        line-height:1.2px;
    }
    
    
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }
    
    section:nth-of-type(odd) {
        
        background-color: ${Theme.colors.primaryBg};
        
    }

    section:nth-of-type(even) {

        background-color: ${Theme.colors.secondaryBg};

    }
    
    h3 {

        font-weight: 500;
        font-size: 18px;
        
    }
    
`



