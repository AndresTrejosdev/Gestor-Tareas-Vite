
import { useState, type ChangeEvent, type FormEvent } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

// Interfaz para definir la estructura de una tarea
interface TareaInterface {
  id: string;
  texto: string;
  completada: boolean;
}

// Props que recibe el componente TareaFormulario
interface TareaFormularioProps {
  onSubmit: (tarea: TareaInterface) => void;
}

function TareaFormulario({ onSubmit }: TareaFormularioProps) {
  const [input, setInput] = useState<string>('');

  const manejarCambio = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    const tareaNueva: TareaInterface = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    
    onSubmit(tareaNueva);
    setInput(''); // Limpiar el input después de enviar
  };

  return (
    <form
      className="tarea-formulario"
      onSubmit={manejarEnvio}
    >
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        value={input}
        onChange={manejarCambio}
      />
      <button className="tarea-boton" type="submit">
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;