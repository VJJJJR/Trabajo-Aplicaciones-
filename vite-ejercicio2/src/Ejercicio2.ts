
// Ejercicio 2 
// Primer paso: Definimos las interfaces
interface Habilidad {
  nombre: string;
  // Su nivel de habilidad del 1 al 10
  nivel: number; 
}

interface Empleado {
  nombre: string;
  edad: number;
  habilidades: Habilidad[];
}

interface Proyecto {
  nombre: string;
  presupuesto: number;
  empleados: Empleado[];
}

// Segundo paso: Creamos datos ficticios para los empleados y proyectos
const empleado1: Empleado = {
  nombre: 'Maria',
  edad: 35,
  habilidades: [
    { nombre: 'Programacion', nivel: 7 },
    { nombre: 'Java', nivel: 9 }
  ]
};

const empleado2: Empleado = {
  nombre: 'Luis',
  edad: 25,
  habilidades: [
    { nombre: 'Programacion', nivel: 7 },
    { nombre: 'Python', nivel: 8 }
  ]
};

const empleado3: Empleado = {
  nombre: 'Juan',
  edad: 28,
  habilidades: [
    { nombre: 'Programacion', nivel: 7 },
    { nombre: 'C++', nivel: 9 }
  ]
};

const proyecto: Proyecto = {
  nombre: 'Desarrollo de una aplicación web',
  presupuesto: 700000,
  empleados: [empleado1, empleado2, empleado3]
};

const proyecto2: Proyecto = {
  nombre: 'Desarrollo de una aplicación de escritorio',
  presupuesto: 450000,
  empleados: [empleado1, empleado2]
};

// Tercer paso: Usamos destructuración para extraer información de los empleados y proyectos
function imprimirProyecto(proyecto: Proyecto) {
  const { nombre: proyectoNombre, presupuesto, empleados } = proyecto;

  const resultado = document.createElement('div');
  resultado.innerHTML = `
    <h2>Proyecto: ${proyectoNombre}</h2>
    <p>Presupuesto: $${presupuesto}</p>
    ${empleados.map(({ nombre, habilidades }) => `
      <div>
        <strong>Empleado: ${nombre}</strong>
        <ul>
          ${habilidades.map(({ nombre: habilidadNombre, nivel }) => `
            <li>Habilidad: ${habilidadNombre}, Nivel: ${nivel}</li>
          `).join('')}
        </ul>
      </div>
    `).join('')}
  `;
  
  document.body.appendChild(resultado);
}

// Imprimimos los proyectos
imprimirProyecto(proyecto);
imprimirProyecto(proyecto2);
