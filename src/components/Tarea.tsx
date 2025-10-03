import Checkbox from "@mui/material/Checkbox";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "../styles/Tarea.css";
import type { TareaPropsExtended } from "../interface/Props";

export const Tarea: React.FC<TareaPropsExtended> =({ titulo, estado, onCambiarEstado, onEliminar, onModificar }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(titulo);

  const handleCambiarEstado = () => {
    onCambiarEstado(titulo); // Llama a la función del padre, que seria ListaTareas. Cada que se crea una tarea, tiene sus funciones
  };

  const handleEliminar = () => {
    setOpenDeleteDialog(true);
  };

  const handleConfirmarEliminar = () => {
    onEliminar(titulo);
    setOpenDeleteDialog(false);
  };

  const handleCancelarEliminar = () => {
    setOpenDeleteDialog(false);
  };

  const handleModificar = () => {
    setNuevoTitulo(titulo);
    setOpenEditDialog(true);
  };

  const handleConfirmarModificar = () => {
    onModificar(titulo, nuevoTitulo);
    setOpenEditDialog(false);
  };

  const handleCancelarModificar = () => {
    setNuevoTitulo(titulo);
    setOpenEditDialog(false);
  };

  return (
    <>
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

      <Dialog
        open={openDeleteDialog}
        onClose={handleCancelarEliminar}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          Confirmar eliminación
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            ¿Estás seguro de eliminar la tarea "{titulo}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelarEliminar} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmarEliminar} color="error" autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openEditDialog}
        onClose={handleCancelarModificar}
        aria-labelledby="edit-dialog-title"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="edit-dialog-title">
          Modificar tarea
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingresa el nuevo título para la tarea:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="nuevo-titulo"
            label="Título de la tarea"
            type="text"
            fullWidth
            variant="outlined"
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelarModificar} color="primary">
            Cancelar
          </Button>
          <Button 
            onClick={handleConfirmarModificar} 
            color="primary" 
            variant="contained"
            disabled={!nuevoTitulo.trim()}
            autoFocus
          >
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};