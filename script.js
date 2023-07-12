var seguirAgregando = true; // Variable para controlar si se deben agregar más ambientes

var nombre = prompt("Ingrese su nombre:");

// Array para almacenar los detalles de los ambientes
var ambientes = [];
var totalLitrosPintura = 0; // Variable para almacenar la cuenta total de litros de pintura

while (seguirAgregando) {
  var ambiente = prompt("Ingrese el nombre del ambiente a pintar:");
  var metrosCuadrados = parseFloat(prompt("Ingrese la cantidad de metros cuadrados a pintar:"));
  var manos = parseInt(prompt("Ingrese la cantidad de manos a aplicar:"));

  var litrosPintura = 0.11 * metrosCuadrados * manos;

  // Agrega los detalles del ambiente al array
  ambientes.push({
    nombre: ambiente,
    litrosPintura: litrosPintura
  });

  totalLitrosPintura += litrosPintura; // Actualiza la cuenta total de litros de pintura

  var respuesta = prompt("¿Desea agregar otro ambiente? (s/n)");
  if (respuesta.toLowerCase() !== "s") {
    seguirAgregando = false; // El bucle se detiene si la respuesta no es "s"
  }
}

// Genera el mensaje de salida con los detalles de cada ambiente y la cuenta total de litros de pintura
var mensaje = "Hola, " + nombre + ". Aquí está el resumen de los ambientes:\n\n";
for (var i = 0; i < ambientes.length; i++) {
  var ambiente = ambientes[i];
  mensaje += "Ambiente: " + ambiente.nombre + "\n";
  mensaje += "Litros de pintura necesarios: " + ambiente.litrosPintura.toFixed(2) + " litro(s)\n\n";
}
mensaje += "Cuenta total de litros de pintura: " + totalLitrosPintura.toFixed(2) + " litro(s)";

// Muestra el resultado en la consola y en una ventana emergente
console.log(mensaje);
alert(mensaje);
