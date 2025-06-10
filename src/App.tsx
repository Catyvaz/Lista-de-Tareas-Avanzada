import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return(
     <div className="main-div">
        <header className="header-titulo">Lista de Tareas</header>
        <div className='contenedor-input'>
          <input type="text" placeholder="Añadir nueva tarea" className='input-tarea' />
          <button className='btn-agregar'>Agregar</button>
        </div>
        <div className='contenedor-tareas'>

        </div>
        <div className='contenedor-botones'>

        </div>
    </div>
  );
}

export default App
