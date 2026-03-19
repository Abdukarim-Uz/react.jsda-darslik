import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { HiH1 } from 'react-icons/hi2'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense fallback={<h1>loading</h1>} >

      <App />
    </Suspense>
  </BrowserRouter>

)
