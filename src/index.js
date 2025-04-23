import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component
import './Header.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This will render the App component inside the 'root' div in index.html
);
