import "../Estilos/App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Tarea } from "./Tarea";
import { useState } from "react";
import tareasData from "../ListaTareas.json";
import { AgregarTarea } from "./Metodos";

function App() {
  const [titulo, setTitulo] = useState("");
  const [tareas, setTareas] = useState(tareasData.tareas);
  const tomarTitulo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(event.target.value);
  };

  return (
    <div className="main-div">
      <header className="header-titulo">Lista de Tareas</header>
      <div className="contenedor-input">
        <TextField
          id="outlined-basic"
          label="Añadir nueva tarea"
          className="input-tarea"
          value={titulo}
          onChange={tomarTitulo}
        />
        <Button
          variant="contained"
          className="boton-agregar"
          onClick={() => AgregarTarea(titulo, tareas, setTareas, setTitulo)}
        >
          Agregar
        </Button>
      </div>

      <div className="contenedor-tareas">
        {tareas.slice().reverse().map((tarea) => (
          <Tarea titulo={tarea.titulo} estado={tarea.estado} />
        ))}
      </div>

      <div className="contenedor-botones">
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          className="boton-group"
        >
          <Button>Todas</Button>
          <Button>Pendientes</Button>
          <Button>Hechas</Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default App;
