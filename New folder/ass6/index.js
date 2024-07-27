import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './components/Form';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import DynamicStyling from './components/DynamicStyling';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Form /> */}
    {/* <ConditionalRendering /> */}
    {/* <ListRendering /> */}
    {/* <DynamicStyling /> */}
  </React.StrictMode>
);
reportWebVitals();
