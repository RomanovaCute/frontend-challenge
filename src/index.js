import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { Provider } from "react-redux"
import { setupStore } from './store';

const GlobalStyles = createGlobalStyle`
    .main{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 46px;
        padding: 48px 62px;

        @media (max-width: 768px) {
            position: absolute;
            padding: 20px;
        }
    }

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
const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <GlobalStyles/>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
