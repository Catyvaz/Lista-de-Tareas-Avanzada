export interface TareaProps {
  titulo: string;
  estado: boolean;
}

export interface TareaPropsExtended extends TareaProps {
  onCambiarEstado: (titulo:string) => void;
  onEliminar: (titulo:string) => void;
  onModificar: (titulo: string) => void;
}

export interface ListaTareasProps {
  tareas: TareaProps[];
  listaCompleta: TareaProps[];
  FiltrarTareas: (estado: boolean) => TareaProps[];
  setTareas: React.Dispatch<React.SetStateAction<ListaTareasProps["tareas"]>>;
}
