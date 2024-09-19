import './style.css' 
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { empleado } from './Ejercicio3.ts'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <div id="empleado"></div>
      <div id="carros-vendidos"></div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  `;

  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

  // Mostramos el nombre del empleado en consola
  const { nombre, carrosVendidos } = empleado;
  console.log(`Empleado: ${nombre}`); 
 
  const empleadoDiv = document.createElement('h2');
  empleadoDiv.textContent = `Empleado: ${nombre}`;
   // Mostramos el nombre del empleado en la vista
  document.getElementById('empleado')!.appendChild(empleadoDiv);
  
  // Mostramos los carros vendidos
  const carrosVendidosDiv = document.getElementById('carros-vendidos')!;
  carrosVendidos.forEach(({ marca, modelo, motor: { tipo } }) => {
    const infoCarro = document.createElement('p');
    infoCarro.textContent = `Marca: ${marca}, Modelo: ${modelo}, Tipo de motor: ${tipo}`;
    // Mostramos los carros vendidos en la vista
    carrosVendidosDiv.appendChild(infoCarro);
  });
});