import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthProvide.jsx';
import { DataProvider } from './Contexts/DataProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
            <DataProvider>
                <App />
            </DataProvider>
        </AuthProvider>
    </BrowserRouter>
    // </React.StrictMode>
);
