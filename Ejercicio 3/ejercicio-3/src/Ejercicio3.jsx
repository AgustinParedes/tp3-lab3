//3- Realizar una pagina en Vite con React con listas desplegables <select> que permitan modificar la
//dirección, justificado y alineado de tres <div> contenidos dentro de otro <div> empleando
//‘flexbox’. Tener en cuenta que este ejercicio se resolvió en clase en Javascript

import { useState } from 'react';
import './Ejercicio3.css';

const Ejercicio3 = () => {
  
  const [direccion, setDireccion] = useState('');
  const [justificado, setJustificado] = useState('');
  const [alineado, setAlineado] = useState('');

  
  const cambioDireccion = (e) => {
    setDireccion(e.target.value);
  };

  const cambioJustificado = (e) => {
    setJustificado(e.target.value);
  };

  const cambioAlineado = (e) => {
    setAlineado(e.target.value);
  };

  return (
    <div className="contenedor">
      <div className="controles">
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <select id="direccion" value={direccion} onChange={cambioDireccion}>
            <option value="row">Fila</option>
            <option value="row-reverse">Fila Invertida</option>
            <option value="column">Columna</option>
            <option value="column-reverse">Columna Invertida</option>
          </select>
        </div>
        <div>
          <label htmlFor="justificado">Justificado:</label>
          <select id="justificado" value={justificado} onChange={cambioJustificado}>
            <option value="flex-start">Inicio</option>
            <option value="flex-end">Fin</option>
            <option value="center">Centro</option>
            <option value="space-between">Espacio Entre</option>
            <option value="space-around">Espacio Alrededor</option>
          </select>
        </div>
        <div>
          <label htmlFor="alineado">Alineado:</label>
          <select id="alineado" value={alineado} onChange={cambioAlineado}>
            <option value="flex-start">Inicio</option>
            <option value="flex-end">Fin</option>
            <option value="center">Centro</option>
            <option value="baseline">Línea Base</option>
          </select>
        </div>
      </div>

      <div className="contenedor-flex" style={{flexDirection: direccion, justifyContent: justificado, alignItems: alineado}}>
        <div className='caja'>Caja 1</div>
        <div className='caja'>Caja 2</div>
        <div className='caja'>Caja 3</div>
      </div>
    </div>
  );
};

export default Ejercicio3;