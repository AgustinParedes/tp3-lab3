import { useState } from 'react';
import "./Ejercicio4.css"

const Ejercicio4 = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [altura, setAltura] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensajes] = useState('');
  const [colorMensaje, setColorMensaje] = useState('rojo');

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!nombre || nombre.length > 50) {
      setMensajes('El campo del nombre debe tener contenido y tener un máximo de 50 caracteres.');
      setColorMensaje('rojo');
      return;
    }

    if (!apellido || apellido.length > 50) {
      setMensajes('El campo del apellido debe tener contenido y tener un máximo de 50 caracteres.');
      setColorMensaje('rojo');
      return;
    }

    const edadNumero = parseInt(edad);
    if (isNaN(edadNumero) || edadNumero < 0 || edadNumero < 18 || edadNumero > 100) {
      setMensajes('La edad no puede ser negativa, debe ser mayor (+18) o menor a 100 años.');
      setColorMensaje('rojo');
      return;
    }

    const alturaNumero = parseInt(altura);
    if (isNaN(alturaNumero) || alturaNumero < 0 || alturaNumero > 230) {
      setMensajes('La altura no puede ser negativa y no puede ser mayor a 230 cm.');
      setColorMensaje('rojo');
      return;
    }

    if (!email || !email.includes('@')) {
      setMensajes('El correo electrónico no puede estar vacío y debe incluir el "@"');
      setColorMensaje('rojo');
      return;
    }

    setMensajes('Todas las validaciones se completaron correctamente.');
    setColorMensaje('verde');
  };

  return (
    <div className="contenedor">
      <h1>Formulario de Validación</h1>
      <form onSubmit={manejarEnvio}>
        <div className='cuadro'>
          <label>Nombre:</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='cuadro'>
          <label>Apellido:</label>
          <input
            id="apellido"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className='cuadro'>
          <label>Edad:</label>
          <input
            id="edad"
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className='cuadro'>
          <label>Altura (cm):</label>
          <input
            id="altura"
            type="number"
            value={altura}  
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        <div className='cuadro'>
          <label>Correo Electrónico:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p className={colorMensaje}>{mensaje}</p>
    </div>
  );
};


export default Ejercicio4;