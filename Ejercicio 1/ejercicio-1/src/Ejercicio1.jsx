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