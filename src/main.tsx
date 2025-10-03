import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ToastContainer/>
  </StrictMode>
)
