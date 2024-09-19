
// Ejercicio 3: 
// Primer paso: Definimos las interfaces

interface Motor {
  tipo: string;
  cilindrada: number;
}

interface Carro {
  marca: string;
  modelo: string;
  año: number;
  motor: Motor;
}

interface Empleado {
  nombre: string;
  carrosVendidos: Carro[];
}
// Segundo paso: Creamos un objeto empleado con varios carros vendidos

export const empleado: Empleado = {
  nombre: 'Luisa',
  carrosVendidos: [
    {
      marca: 'Ford',
      modelo: 'Fusion',
      año: 2018,
      motor: { tipo: 'Gasolina', cilindrada: 2000 }
    },
    {
      marca: 'Mazda',
      modelo: 'Cx5',
      año: 2018,
      motor: { tipo: 'Gasolina', cilindrada: 2000 }
    }
  ]
};
// Tercer paso: Usamos destructuración para extraer la marca, modelo y tipo de motor de los carros vendidos

empleado.carrosVendidos.forEach(({ marca, modelo, motor: { tipo } }) => {
  console.log(`Marca: ${marca}, Modelo: ${modelo}, Tipo de motor: ${tipo}`);
});