import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router'

import './global.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
