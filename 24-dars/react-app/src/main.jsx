import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StateContextProvider from './assets/data/StateContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </BrowserRouter>
)
