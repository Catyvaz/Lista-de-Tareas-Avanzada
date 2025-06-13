
import type { TareaProps } from "../Types/Props";

export function AgregarTarea(
  titulo: string,
  tareas: TareaProps[],
  setTareas: React.Dispatch<React.SetStateAction<TareaProps[]>>,
  setTitulo: React.Dispatch<React.SetStateAction<string>>
) {
  if (titulo.trim() !== "") {
    const nuevaTarea: TareaProps = {
      titulo: titulo,
      estado: false,
    };
    setTareas([...tareas, nuevaTarea]);
    setTitulo("");
    alert("Tarea agregada exitosamente.");
  } else {
    alert("Por favor, ingresa un título para la tarea.");
  }
}

export function EliminarTarea(
  tareas: TareaProps[],
  setTareas: React.Dispatch<React.SetStateAction<TareaProps[]>>,
  titulo: string
) {
  const nuevasTareas = tareas.filter((tarea) => tarea.titulo !== titulo);
  setTareas(nuevasTareas);
  alert("Tarea eliminada exitosamente.");
}

export function CambiarEstadoTarea(
  tareas: TareaProps[],
  setTareas: React.Dispatch<React.SetStateAction<TareaProps[]>>,
  titulo: string
) {
  const nuevasTareas = tareas.map((tarea) =>
    tarea.titulo === titulo ? { ...tarea, estado: !tarea.estado } : tarea
  );
  setTareas(nuevasTareas);
}
