import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import "../Estilos/Tarea.css";
import type { TareaProps } from "../Types/Props";
import { EliminarTarea } from "./Metodos";
import tareasData from "../ListaTareas.json";

export function Tarea({ titulo, estado }: TareaProps) {
  const [checked, setChecked] = React.useState(estado);
  const [tareas, setTareas] = useState(tareasData.tareas);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="cont-tarea">
      <div className="cont-check-titulo">
        <Checkbox
          className="checkbox-tarea"
          size="medium"
          checked={checked}
          onChange={handleChange}
        />
        <h3 className="titulo-tarea">{titulo}</h3>
      </div>
      <div className="botones-extras">
        <button
          className="btn-tarea-modificar"
        >
          <DriveFileRenameOutlineOutlinedIcon/>
        </button>
        <button 
          className="btn-tarea-eliminar"
          onClick={() => EliminarTarea(tareas, setTareas, titulo)}
        >
          <DeleteForeverOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
