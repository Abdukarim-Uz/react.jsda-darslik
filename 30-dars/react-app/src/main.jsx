import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store/store.jsx'

const queryClint = new QueryClient()

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClint} >
      <Provider store={store} >
        <App />
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>
)
