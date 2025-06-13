import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'

const MiComponente = () => {
  useEffect(() => {
    document.title = "Lista de Tareas Avanzada- React/TypeScript - Vazquez";
  }, []);
  return("") 
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MiComponente/>
    <App />
  </StrictMode>,
)
