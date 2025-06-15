import "../styles/App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import { AgregarTarea } from "./Metodos";
import { ListaTareas } from "./ListaTareas";
import { type TareaProps } from "../Types/Props";

export const App = () => {
  const [titulo, setTitulo] = useState("");
  const [tareas, setTareas] = useState<TareaProps[]>([
    { titulo: "tarea 1", estado: false },
  ]);
  const [filtro, setFiltro] = useState<"todas" | "pendientes" | "hechas">(
    "todas"
  );

  const tomarTitulo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitulo(event.target.value);
  };

  const tareasFiltradas = () => {
    switch (filtro) {
      case "pendientes":
        return tareas.filter((tarea) => !tarea.estado);
      case "hechas":
        return tareas.filter((tarea) => tarea.estado);
      default:
        return tareas;
    }
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
          size= "small"
        />
        <Button
          variant="contained"
          className="boton-agregar"
          onClick={() => AgregarTarea(titulo, tareas, setTareas, setTitulo)}
          size="medium"
        >
          Agregar
        </Button>
      </div>

      <div className="contenedor-tareas">
        <ListaTareas
          tareas={tareasFiltradas()}
          setTareas={setTareas}
          FiltrarTareas={(estado: boolean) =>
            tareas.filter((tarea) => tarea.estado === estado)
          }
        />
      </div>

      <div className="contenedor-botones">
        <ButtonGroup
          variant="contained"
          aria-label="Basic button group"
          className="boton-group"
        >
          <Button
            className="boton-group-todos"
            variant={filtro === "todas" ? "contained" : "outlined"}
            onClick={() => setFiltro("todas")}
          >
            Todas
          </Button>
          <Button
            className="boton-group-todos"
            variant={filtro === "pendientes" ? "contained" : "outlined"}
            onClick={() => setFiltro("pendientes")}
          >
            Pendientes
          </Button>
          <Button
            className="boton-group-todos"
            variant={filtro === "hechas" ? "contained" : "outlined"}
            onClick={() => setFiltro("hechas")}
          >
            Hechas
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};