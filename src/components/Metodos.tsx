import type { TareaProps } from "../interface/Props";

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

export function ModificarTarea(
  tareas: TareaProps[],
  setTareas: React.Dispatch<React.SetStateAction<TareaProps[]>>,
  titulo: string
) {
  const nuevoTitulo = prompt("Ingresa el nuevo título:", titulo);
  if (nuevoTitulo && nuevoTitulo.trim() !== "") {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.titulo === titulo ? { ...tarea, titulo: nuevoTitulo.trim().replace(/\s+/g, " ") } : tarea
    );  //en esta linea tomo el valor y le saco los espacios de más
    setTareas(nuevasTareas);
  } else if (nuevoTitulo && nuevoTitulo.trim() === titulo) {
    alert("El nuevo título es igual al anterior.");
  } else if (!nuevoTitulo || nuevoTitulo.trim() === "") {
    return
  }
}

export function CambiarEstadoTarea(
  tareas: TareaProps[],
  setTareas: React.Dispatch<React.SetStateAction<TareaProps[]>>,
  titulo: string
) {
  console.log(titulo, tareas);
  const nuevosEstados = tareas.map((tarea) =>
    tarea.titulo === titulo ? { ...tarea, estado: !tarea.estado } : tarea
  );
  console.log(nuevosEstados);
  setTareas(nuevosEstados);
}
