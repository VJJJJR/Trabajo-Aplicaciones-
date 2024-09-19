
//Ejercicio 1: 
// Primer paso: Definimos la interfaz vehículo con sus respectivos métodos y propiedades

export interface Vehiculo {
  marca: string;
  modelo: string;
  año: number;

  encender(): void;
  apagar(): void;
}

//Segundo paso: Creamos un objeto llamado auto que implemente la interfaz Vehiculo
const auto: Vehiculo = {
  marca: 'Nissan',
  modelo: 'March',
  año: 2023,

  encender() {
    console.log(`El vehículo ${this.marca} ${this.modelo} ha sido encendido.`);
  },

  apagar() {
    console.log(`El vehículo ${this.marca} ${this.modelo} ha sido apagado.`);
  }
};

// Probamos los métodos 
auto.encender();
auto.apagar();

// Tercer paso: Definimos una función para recibir un arreglo de vehículos y los imprimimos
export function imprimirVehiculos(vehiculos: Vehiculo[]): void {
  vehiculos.forEach(({ marca, modelo, año }) => {
    console.log(`Marca: ${marca}, Modelo: ${modelo}, Año: ${año}`);
  });
}

// Creamos un arreglo de vehículos
export const vehiculos: Vehiculo[] = [
  auto,
  {
    marca: 'Ford',
    modelo: 'Fiesta',
    año: 2014,
    encender() { console.log(`El vehículo ${this.marca} ${this.modelo} ha sido encendido.`); },
    apagar() { console.log(`El vehículo ${this.marca} ${this.modelo} ha sido apagado.`); }
  }
];


// Llamamos a la funcion imprmir vehiculos  en el archivo main.ts para observarlo en vite

