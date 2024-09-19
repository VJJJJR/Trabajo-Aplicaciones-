
//Ejercicio 4:
//Primer paso: Definir las interfaces Empleado y Persona

interface Empleado {
  cargo: string;
  salario: number;
}

interface Persona {
  nombre: string;
  edad: number;
  empleado: Empleado;
}
// Segundo Paso: Crear un objeto de persona que implemente las interfaces

const persona: Persona = {
  nombre: 'Carlos',
  edad: 28,
  empleado: {
    cargo: 'Desarrollador',
    salario: 3000
  }
};
// Tercer paso: Usar destructuración para extraer nombre y empleo


const { nombre, empleado: { cargo } } = persona;

//imprimimos en consola 
console.log(`Nombre: ${nombre}`);
console.log(`Cargo: ${cargo}`);

// También imprimimos en la vista
document.addEventListener('DOMContentLoaded', () => {
  const appDiv = document.querySelector<HTMLDivElement>('#app')!;
  appDiv.innerHTML += `
    <p>Nombre: ${nombre}</p>
    <p>Cargo: ${cargo}</p>
  `;
});