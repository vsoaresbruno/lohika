import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html{
        --grey: #aaaaaa;
        --blue: #3c7dd9;
        --light-blue: #8dbdff;
        --lighten-blue: #7ab3d7;
        --dark-blue: #211f2f;
        --gray: var(--grey, #aaaaaa);
    }

    * {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        width: 100%;
        height: 90vh;
        padding: 0;
        margin: 0;
        background-color: var(--dark-blue);
        font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: white;
        font-weight: 300;
    }

    input,
    label,
    button {
        font-family: "Mukta Mahee", Helvetica, Arial, sans-serif;
    }

    label {
        padding-right: 18px;
        display: inline-block;
        width: 150px;

        .label-extra-info {
            opacity: .7;
        }
    }

    input {
        font-size: 17px;
        background: #211f2f;
        color: white;
        width: 50%;
        padding: 0.3ch 5px;
        max-height: 40px;
        border: 1px solid #fff;
        border-radius: 5px;
    }

    fieldset {
        margin-bottom: 20px;
        border: none;
        margin: 0;
        padding: 5px 0;
    }

    button {
        background: transparent;
        color: var(--light-blue);
        padding: 4px 30px 5px;
        border-radius: 1000px;
        border: 1px solid var(--light-blue);
        font-size: 16px;
        margin: 20px 0 0;
        cursor: pointer;
        transition: 0.35s all;

        &:hover {
            background: var(--light-blue);
            color: black;
        }
    }

    [type="reset"] {
        color: var(--grey);
        border: 1px solid var(--grey);

        &:hover {
            background: var(--grey);
            color: black;
        }
        @media screen and (max-width:700px){
            margin-left: 20px;
        }
    }

`;
