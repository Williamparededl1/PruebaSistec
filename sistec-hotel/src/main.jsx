import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClienteEvents } from './components/Events/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClienteEvents>
    <App />
  </ClienteEvents>,
  document.getElementById('root')
)
