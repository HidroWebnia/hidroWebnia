import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        background-color: #EDEDED;
        font-family: Arial, Helvetica, sans-serif;
        text-align: justify;
    }

    h1{
        font-size: 36px;
        font-weight: bold;
        color: #26503c;
    }

    h2{
        font-size: 24px;
        font-weight: medium;
        color: #212529;
    }

    p{
        font-size: 18px;
        color: #212529;
    }
`;

export default GlobalStyles;
