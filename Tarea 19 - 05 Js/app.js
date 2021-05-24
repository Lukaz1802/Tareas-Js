// Ciudades
// ----------------------------------
// Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
// cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las 
// siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
// Añade en última posición la ciudad de París.



let ciudades = [ ]

  let agregar = prompt('¿Que ciudades quieres agregar?');
  while (agregar !== null && agregar!=="0") {
      if (agregar !== "") {
          ciudades.push(agregar.toUpperCase());
          alert(`${agregar.toUpperCase()} se ha agregado correctamente`);
          agregar = prompt('¿Que otras ciudades quiere agregar?');
      } else {
        alert('No ingresó ninguna ciudad');
        agregar = prompt('¿Que ciudades desea agregar?');

      } 
      }
  console.log(`${ciudades}`)
  console.log(`Ciudades agregadas:${ciudades.length}`);
  
  let ciudades1 = ciudades.slice(1,2)
  let ciudades2 = ciudades.slice(0, 1);  
  let ciudades3 = ciudades.slice(2, 3);
  let ciudades4 = ciudades.slice(-1);
  

  document.write(`Primera ciudad: ${ciudades2}<br>`)
  document.write(`Tercera ciudad: ${ciudades3}<br>`)
  document.write(`Última ciudad: ${ciudades4}<br>`)

ciudades.push('Paris')
console.log(ciudades)

document.write(`Segunda ciudad: ${ciudades1}<br>`)

ciudades1.splice(1,2,"Barcelona")

document.write(`Segunda ciudad reemplazada: Barcelona`)


  




