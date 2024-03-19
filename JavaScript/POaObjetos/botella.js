// Definición de la clase Botella
class Botella {
    constructor(tipo, capacidad, contenido) {
      this.tipo = tipo; // Tipo de líquido que contiene la botella
      this.capacidad = capacidad; // Capacidad total de la botella en mililitros
      this.contenido = contenido; // Cantidad actual de líquido en la botella en mililitros
    }
  
    // Métodos de la clase Botella...
    llenar(cantidad) {
      if (this.contenido + cantidad > this.capacidad) {
        console.log("No se puede llenar la botella, excede su capacidad.");
      } else {
        this.contenido += cantidad;
        console.log(`Se llenaron ${cantidad} ml de ${this.tipo}.`);
      }
    }
  
    vaciar() {
      this.contenido = 0;
      console.log("La botella ha sido vaciada.");
    }
  
    obtenerInformacion() {
      console.log(`Tipo de líquido: ${this.tipo}, Capacidad: ${this.capacidad} ml, Contenido: ${this.contenido} ml`);
    }
  }
  
  // Exportar la clase Botella
  export { Botella };
  