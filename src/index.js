import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { FilterProvider } from './context/FilterContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <CartProvider>
            <FilterProvider>
                <ToastContainer />
                <App />
            </FilterProvider>
        </CartProvider>
    </Router>
);
