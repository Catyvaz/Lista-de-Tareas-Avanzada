import { type ListaTareasProps } from "../Types/Props";
import { Tarea } from "./Tarea";
import { EliminarTarea, CambiarEstadoTarea } from "./Metodos";
import React from "react";

interface listaT extends ListaTareasProps {
  setTareas: React.Dispatch<React.SetStateAction<ListaTareasProps["tareas"]>>;
}
export const ListaTareas: React.FC<listaT> = ({ tareas, setTareas }) => {
  const handleCambiarEstado = (titulo: string) => {
    CambiarEstadoTarea(tareas, setTareas, titulo);
  };

  const handleEliminar = (titulo: string) => {
    EliminarTarea(tareas, setTareas, titulo);
  };

  const handleModificar = (titulo: string) => {
    const nuevoTitulo = prompt("Ingresa el nuevo título:", titulo);
    if (nuevoTitulo && nuevoTitulo.trim() !== "") {
      const nuevasTareas = tareas.map((tarea) =>
        tarea.titulo === titulo
          ? { ...tarea, titulo: nuevoTitulo.trim() }
          : tarea
      );
      setTareas(nuevasTareas);
    } else if (nuevoTitulo && nuevoTitulo.trim() === titulo) {
      alert("El nuevo título es igual al anterior.");
    } else if (!nuevoTitulo || nuevoTitulo.trim() === "") {
      return; // No hacer nada si está vacío{
    }
  };

  return tareas
    .slice()
    .reverse()
    .map((tarea, index) => (
      <Tarea
        key={index}
        titulo={tarea.titulo}
        estado={tarea.estado}
        onCambiarEstado={handleCambiarEstado}
        onEliminar={handleEliminar}
        onModificar={handleModificar}
      />
    ));
};
