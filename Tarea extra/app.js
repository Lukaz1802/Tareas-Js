let nombre = prompt('Bienvenido alumno! a continuación para conocerte mejor por favor ingresá los datos que vamos a pedirte. Ingrese su nombre');

let primeraLetra = nombre.substr(0,1)

let edad = prompt('Ingrese su edad');

let actividad = prompt('¿Cuál es tu actividad o pasatiempo favorito?');

let deporte = prompt('¿Cuál es tu deporte favorito?');

console.log(`Nombre del alumno: ${primeraLetra.toUpperCase() + nombre.substr(1)}`)
console.log(`Edad: ${edad}`);
console.log(`Actividad o pasatiempo favorito: ${actividad}`);
console.log(`Deporte favorito: ${deporte}`);