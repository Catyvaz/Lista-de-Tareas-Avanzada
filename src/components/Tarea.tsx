import Checkbox from "@mui/material/Checkbox";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import "../styles/Tarea.css";
import type { TareaPropsExtended } from "../Types/Props";

export const Tarea: React.FC<TareaPropsExtended> =({ titulo, estado, onCambiarEstado, onEliminar, onModificar }) => {
  const handleCambiarEstado = () => {
    onCambiarEstado(titulo); // Llama a la función del padre, que seria ListaTareas. Cada que se crea una tarea, tiene sus funciones
  };

  const handleEliminar = () => {
    if (window.confirm(`¿Estás seguro de eliminar la tarea "${titulo}"?`)) {
      onEliminar(titulo); // Llama a la función del padre
    }else{
      return;
    }
  };

  const handleModificar = () => {
    onModificar(titulo); // Llama a la función del padre
  };

  return (
    <div className="cont-tarea">
      <div className="cont-check-titulo">
        <Checkbox
          className="checkbox-tarea"
          size="medium"
          checked={estado}
          onChange={handleCambiarEstado}
        />
        <h3 className={estado ? "titulo-tarea-hecha":"titulo-tarea" }>{titulo}</h3>
      </div>
      <div className="botones-extras">
        <button
          className="btn-tarea-modificar"
          onClick={handleModificar}
        >
          <DriveFileRenameOutlineOutlinedIcon/>
        </button>
        <button 
          className="btn-tarea-eliminar"
          onClick={handleEliminar}
        >
          <DeleteForeverOutlinedIcon />
        </button>
      </div>
    </div>
  );
};