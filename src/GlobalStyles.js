import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
    html{
        height:100%;
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:darkgray;
        }
    }
    body{
        font-family: 'Poppins', sans-serif;
        overflow-x:hidden;
        background:#fefeff;
        color:#333;
    }
    .App{
        transition:350ms all ease-in-out;
    }
    .Container{
        padding:0 2em;
    }
    h1,h2,h3,h4,h5{
        font-weight:400;
    }
    .box-shadow{
        box-shadow:0 0 25px 0 rgb(197 197 197 / 40%);
    }
    .text-center{
        text-align:center;
    }
    svg{
        fill:#000;
    }
    .darkMode{
        background:rgb(36, 36, 36);
        color:rgba(255, 255, 255, 0.96);
    }
    .darkMode p{
        color:#ababab;
    }
    .darkMode .time{
        color:#333;
    }
    .darkMode button{
        background:#fff;
    }
    .darkMode svg{
        fill:rgba(255, 255, 255, 0.96);
    }
`;

export default GlobalStyle;
