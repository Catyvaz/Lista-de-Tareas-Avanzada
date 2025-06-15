import { type ListaTareasProps } from "../Types/Props";
import { Tarea } from "./Tarea";
import { EliminarTarea, CambiarEstadoTarea, ModificarTarea } from "./Metodos";
import React from "react";
import { List, ListItem } from "@mui/material";

//SetStateAction, define el tipo de valor que se le pasa al setter, y aca lo que hace es permitir que se pase una lista nueva o una función que retorna una lista.

export const ListaTareas: React.FC<ListaTareasProps> = ({ tareas, setTareas }) => {
  const handleCambiarEstado = (titulo: string) => {
    CambiarEstadoTarea(tareas, setTareas, titulo);
  };

  const handleEliminar = (titulo: string) => {
    EliminarTarea(tareas, setTareas, titulo);
  };

  const handleModificar = (titulo: string) => {
    ModificarTarea(tareas, setTareas, titulo);
  };

  return (
    <List sx={{ maxHeight: 400, overflow: 'auto', alignItems: "flex-start"}}>
      {tareas
      .slice()
      .reverse()
      .map((tarea, index) => (
        <ListItem key={index}>
        <Tarea
          key={index}
          titulo={tarea.titulo}
          estado={tarea.estado}
          onCambiarEstado={handleCambiarEstado}
          onEliminar={handleEliminar}
          onModificar={handleModificar}
        />
        </ListItem>
      ))}
    </List>
  );
};
