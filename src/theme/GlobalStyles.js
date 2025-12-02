import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html{
        font-family: ${props => props.theme.fonts.main};
        font-weight: ${props => props.theme.fontsWeights.regular};
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
    }

    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
        font-family: ${props => props.theme.fonts.main};
    }        
`;

export default GlobalStyles;