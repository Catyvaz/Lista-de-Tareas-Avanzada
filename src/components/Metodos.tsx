import type { TareaProps } from "../interface/Props";
import { Bounce, toast } from "react-toastify";

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
    toast.success("Tarea agregada exitosamente.", {
      position: "top-center",
      autoClose: 996,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  } else {
    toast.warn("Por favor, ingresa un título para la tarea.", {
      position: "top-center",
      autoClose: 996,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
}

export function EliminarTarea(
  tareas: TareaProps[],
  setTareas: React.Dispatch<React.SetStateAction<TareaProps[]>>,
  titulo: string
) {
  const nuevasTareas = tareas.filter((tarea) => tarea.titulo !== titulo);
  setTareas(nuevasTareas);
  toast.success("Tarea eliminada exitosamente.", {
    position: "top-center",
    autoClose: 996,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
}

export function ModificarTarea(
  tareas: TareaProps[],
  setTareas: React.Dispatch<React.SetStateAction<TareaProps[]>>,
  titulo: string,
  nuevoTitulo: string
) {
  if (nuevoTitulo && nuevoTitulo.trim() !== "") {
    if (nuevoTitulo.trim() === titulo.trim()) {
      toast.warn("El nuevo título es igual al anterior.", {
        position: "top-center",
        autoClose: 996,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    const nuevasTareas = tareas.map((tarea) =>
      tarea.titulo === titulo
        ? { ...tarea, titulo: nuevoTitulo.trim().replace(/\s+/g, " ") }
        : tarea
    ); //en esta linea tomo el valor y le saco los espacios de más
    setTareas(nuevasTareas);
    toast.success("Tarea modificada exitosamente.", {
      position: "top-center",
      autoClose: 996,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }
}

export function CambiarEstadoTarea(
  tareas: TareaProps[],
  setTareas: React.Dispatch<React.SetStateAction<TareaProps[]>>,
  titulo: string
) {
  const nuevosEstados = tareas.map((tarea) =>
    tarea.titulo === titulo ? { ...tarea, estado: !tarea.estado } : tarea
  );
  setTareas(nuevosEstados);
}
