import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// Props que recibe el componente Tarea
interface TareaProps {
  id: string;
  texto: string;
  completada: boolean;
  completarTarea: (id: string) => void;
  eliminarTarea: (id: string) => void;
}

function Tarea({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea
}: TareaProps) {
  
  // Función para manejar el clic en completar tarea
  const handleCompletarTarea = (): void => {
    completarTarea(id);
  };

  // Función para manejar el clic en eliminar tarea
  const handleEliminarTarea = (): void => {
    eliminarTarea(id);
  };

  return (
    <div 
      className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}
    >
      <div
        className="tarea-texto"
        onClick={handleCompletarTarea}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCompletarTarea();
          }
        }}
        aria-label={`Marcar tarea "${texto}" como ${completada ? 'pendiente' : 'completada'}`}
      >
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={handleEliminarTarea}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleEliminarTarea();
          }
        }}
        aria-label={`Eliminar tarea "${texto}"`}
      >
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
}

export default Tarea;