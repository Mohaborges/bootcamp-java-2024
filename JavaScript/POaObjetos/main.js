// Importar la clase Botella
import { Botella } from './botella.js';

// Crear una instancia de la clase Botella
let botellaDeAgua = new Botella("Agua", 500, 250);

// Usar métodos del objeto Botella
botellaDeAgua.obtenerInformacion(); // Imprimir información de la botella
botellaDeAgua.llenar(300); // Llenar la botella con 300 ml de agua
botellaDeAgua.obtenerInformacion(); // Imprimir información actualizada de la botella
botellaDeAgua.vaciar(); // Vaciar la botella
botellaDeAgua.obtenerInformacion(); // Imprimir información actualizada de la botella
