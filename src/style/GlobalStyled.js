import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body{
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            background-color: #9301E4;
            align-items: center;
        }
`

export default Global