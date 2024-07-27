import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';
import UserSearch from './components/UserSearch';
import Users from './components/Users';
import FilteredPosts from './components/FilteredPosts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Counter /> */}
    <UserSearch />
    {/* <Users />
    <FilteredPosts /> */}
  </React.StrictMode>
);

reportWebVitals();
