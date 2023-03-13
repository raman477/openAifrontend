import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import ContextState from './context/globalState';

// import { Provider } from 'react-redux'
// import store from './app/store'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ContextState>
    <Router>
      <App />
    </Router>
  </ContextState>
);


reportWebVitals();
