import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import './index.scss'
import './styles/_responsive.scss'

ReactDOM.createRoot(document.getElementById('dictionary')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
