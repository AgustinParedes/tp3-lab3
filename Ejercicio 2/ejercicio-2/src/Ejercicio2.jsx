//2- Escribir un programa de Vite con React que permita calcular el IMC de una persona. Luego de
//realizar el cálculo, mostrar un mensaje con las siguientes características:
//• Si IMC < 18.5 mostrar un mensaje en tono amarillo indicando que se trata un nivel bajo.
//• Si IMC está entre 18.5 y 24.9 mostrar un mensaje en tono verde indicando que se trata de un
//nivel normal.
//• Si IMC está entre 25 – 29.9 mostrar un mensaje en tono naranja indicando que se trata de un
//nivel de sobrepeso.
//• Si IMC es mayor o igual a 30 mostrar un mensaje en tono rojo indicando que se trata de un
//nivel de obesidad.

import { useState } from 'react';
import "./Ejercicio2.css"

export default function Ejercicio2() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const [color, setColor] = useState('');
  
    const calcularImc = () => {
      if (!peso || !altura) {
        alert('Por favor ingrese peso y altura');
        return;
      }
  
      const alturaEnMetros = altura / 100;
      const valorImc = peso / (alturaEnMetros * alturaEnMetros);
      setImc(valorImc.toFixed(2));
  
      if (valorImc < 18.5) {
        setMensaje('Nivel bajo');
        setColor('yellow');
      } else if (valorImc >= 18.5 && valorImc <= 24.9) {
        setMensaje('Nivel normal');
        setColor('green');
      } else if (valorImc >= 25 && valorImc <= 29.9) {
        setMensaje('Nivel de sobrepeso');
        setColor('orangered');
      } else if (valorImc >= 30) {
        setMensaje('Nivel de obesidad');
        setColor('red');
      }
    };
  
    return (
      <div className="botones">
        <h1>Calculadora de IMC</h1>
        <div className="contenedor-entradas">
        Peso (kg)
          <input
            type="number"
            placeholder="Ingrese su peso"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />Altura (cm)
          <input
            type="number"
            placeholder="Ingrese su altura"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
          <button onClick={calcularImc}>Calcular IMC</button>
        </div>
        {imc && (
          <div style={{ color: color }}>
            <p>Tu IMC es: {imc}</p>
            <p>{mensaje}</p>
          </div>
        )}
      </div>
    );
  }