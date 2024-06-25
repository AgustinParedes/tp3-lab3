import { useState, useEffect } from 'react'
import "./Ejercicio5.css"

const Ejercicio5 = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [tareas, setTareas] = useState({});
  const [cargandoTareas, setCargandoTareas] = useState({});

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())                    //extraer usuarios
      .then(data => setUsuarios(data));
  }, []);

  // ver tareas, si no hay tareas no ver nada
  const verTareas = (userId) => {
    if (tareas[userId]) {
      return;
    }

    setCargandoTareas({ ...cargandoTareas, [userId]: true });
    
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then(response => response.json())
      .then(data => {
        setTareas({ ...tareas, [userId]: data });
        setCargandoTareas({ ...cargandoTareas, [userId]: false });
      });
  };

  return (
    <div className="contenedor">
      <h1>Lista de Usuarios</h1>
      <ul className="lista-usuarios">
        {usuarios.map(usuario => (
          <li key={usuario.id} className="usuario">
            <p><strong>ID:</strong> {usuario.id}</p>
            <p><strong>Nombre:</strong> {usuario.name}</p>
            <p><strong>Nombre de Usuario:</strong> {usuario.username}</p>
            <p><strong>Email:</strong> {usuario.email}</p>
            <p><strong>Sitio Web:</strong> {usuario.website}</p>
            <button onClick={() => verTareas(usuario.id)}>
              Ver tareas
            </button>
            {cargandoTareas[usuario.id] && <p>Cargando tareas...</p>}
            {tareas[usuario.id] && (
              <ul className="lista-tareas">
                {tareas[usuario.id].map(tarea => (
                  <li key={tarea.id} className={`tarea ${tarea.completed ? 'completada' : 'pendiente'}`}>
                    {tarea.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ejercicio5;