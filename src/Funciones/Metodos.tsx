export function AgregarTarea(titulo: string, tareas: any[], setTareas: any, setTitulo: any) {
  if (titulo.trim() !== "") {
    setTareas([...tareas, { titulo: titulo, estado: false }]);
    setTitulo("");
    alert("Tarea agregada exitosamente.");
  } else {
    alert("Por favor, ingresa un título para la tarea.");
  }
}

export function EliminarTarea(tareas: any[], setTareas: any, titulo: string) {
    for (let i = 0; i < tareas.length; i++){
        if(tareas[i].titulo === titulo){
            delete tareas[i];
            setTareas(tareas.filter((tarea) => tarea !== null));
            alert("Tarea eliminada exitosamente.");
        }
    }
}