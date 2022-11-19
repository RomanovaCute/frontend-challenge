import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        font-family: sans-serif;
    }

    li{
        list-style: none;
    }
    
    a{
        text-decoration: none;
    }
    
    h1, h2, h3, h4, h5, h6{
        margin: 0;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <GlobalStyles/>
        <App/>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
