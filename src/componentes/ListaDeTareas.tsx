import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario.tsx';
import Tarea from './Tarea.tsx';
import '../hojas-de-estilo/ListaDeTareas.css';

// Definir la interfaz para el tipo Tarea
interface TareaInterface {
  id: string;
  texto: string;
  completada: boolean;
}

// Definir las props que recibe TareaFormulario
interface TareaFormularioProps {
  onSubmit: (tarea: TareaInterface) => void;
}

// Definir las props que recibe el componente Tarea
interface TareaProps {
  id: string;
  texto: string;
  completada: boolean;
  completarTarea: (id: string) => void;
  eliminarTarea: (id: string) => void;
}

function ListaDeTareas() {
  const [tareas, setTareas] = useState<TareaInterface[]>([]);

  const agregarTarea = (tarea: TareaInterface): void => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas: TareaInterface[] = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id: string): void => {
    const tareasActualizadas: TareaInterface[] = tareas.filter(
      (tarea) => tarea.id !== id
    );
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id: string): void => {
    const tareasActualizadas: TareaInterface[] = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;