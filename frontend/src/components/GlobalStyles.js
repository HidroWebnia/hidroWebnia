import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body{
        background-color: #26503c;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        text-align: justify;
        color: #ffffff;
    }

    h1{
        font-size: 50px;
        font-weight: bold;
    }

    h2{
        font-size: 40px;
        font-weight: bold;
    }

    p{
        font-size: 30px;
    }
`;

export default GlobalStyles