import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import 'macro-css'
const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<Router><App /></Router>)
