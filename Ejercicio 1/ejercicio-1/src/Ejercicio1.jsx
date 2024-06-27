//1- Realice en Vite con React una pagina con tres botones llamados ‘izquierdo’, ‘centro’ y ‘derecho’.
//Inicialmente solamente el botón ‘izquierdo’ esta habilitado. Al presionar el botón ‘izquierdo’, se
//deshabilita a si mismo y luego habilita al botón ‘centro’. Luego al presionar el botón ‘centro’, se
//deshabilita a si mismo y luego habilita al botón ‘derecho’. Por último, al presionar el botón
//‘derecho’, se deshabilita a si mismo y luego habilita al botón ‘izquierdo’. Todo esto permite que
//solo un botón este habilitado al mismo tiempo.//

import { useState } from 'react'
import "./Ejercicio1.css"

export default function Ejercicio1() {

  const [setButton, setEnabledButton] = useState('izquierdo');

  const handleButtonClick = (button) => {
    if (button === 'izquierdo') {
      setEnabledButton('centro');
    } else if (button === 'centro') {
      setEnabledButton('derecho');
    } else if (button === 'derecho') {
      setEnabledButton('izquierdo');
    }
  };

  return (
    <div className='botones'>
      <button
        disabled={setButton !== 'izquierdo'}
        onClick={() => handleButtonClick('izquierdo')}
      >
        Izquierdo
      </button>
      <button
        disabled={setButton !== 'centro'}
        onClick={() => handleButtonClick('centro')}
      >
        Centro
      </button>
      <button
        disabled={setButton !== 'derecho'}
        onClick={() => handleButtonClick('derecho')}
      >
        Derecho
      </button>
    </div>
  );

}