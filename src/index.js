import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './index.css'
import App from './App.js';
import { ContextProvider } from './contexts/ContextProvider.js'

ReactDOM.render(
    <BrowserRouter basename="/dash">
        <ContextProvider>
    <App />
</ContextProvider>,
</BrowserRouter>,
document.getElementById('root')
);