import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <App />
  </StrictMode>,
)
