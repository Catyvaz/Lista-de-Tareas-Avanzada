import { type ListaTareasProps } from "../interface/Props";
import { Tarea } from "./Tarea";
import { EliminarTarea, CambiarEstadoTarea, ModificarTarea } from "./Metodos";
import React from "react";
import { List, ListItem } from "@mui/material";

//SetStateAction, define el tipo de valor que se le pasa al setter, y aca lo que hace es permitir que se pase una lista nueva o una función que retorna una lista.

export const ListaTareas: React.FC<ListaTareasProps> = ({ tareas, listaCompleta, setTareas }) => {
  const handleCambiarEstado = (titulo: string) => {
    CambiarEstadoTarea(listaCompleta, setTareas, titulo);
  };

  const handleEliminar = (titulo: string) => {
    EliminarTarea(listaCompleta, setTareas, titulo);
  };

  const handleModificar = (titulo: string) => {
    ModificarTarea(listaCompleta, setTareas, titulo);
  };

  return (
    <List sx={{ maxHeight: 400, overflow: 'auto', alignItems: "flex-start"}}>
      {tareas
      .slice()
      .reverse()
      .map((tarea, index) => (
        <ListItem key={index}>
        <Tarea
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
