alert('Bienvenido al super! A continuacion puede ver las intrucciones en consola')

  console.log("Para comenzar a agregar productos a su changuito escriba: Agregar() ")

let changuito = [ ]


function Agregar() {
  let agregar = prompt('¿Que producto desea agregar a su changuito?');
  while (agregar !== null) {
      if (agregar !== '') {
          changuito.push(agregar.toUpperCase());
          alert(`${agregar.toUpperCase()} se ha agregado correctamente`);
          agregar = prompt('¿Que otro producto desea agregar a su changuito?. Si no desea seguir agregando productos presione cancelar');
      } else {
          alert('No ingresó ningun producto');
          agregar = prompt('¿Que producto desea agregar a su changuito?');
      }
  }
  console.log("Productos en su changuito:")
    
    let contador = 0
    if (changuito !== null){
        for (i of changuito) {
        contador = contador + 1
        console.log(`${contador} - ${[i]}`)}
    }
    
    console.log("Para agregar más productos escriba: Agregar() ");
    console.log("Para ver una lista de sus productos escriba: Listar()")
    console.log("Para busacr un producto en su carrito escriba: Buscar()")
    console.log("Para borrar un producto escriba: Borrar()")
  }


function Listar() {
    
  let contador = 0
  if (changuito !== null){
      for (i of changuito) {
      contador = contador + 1
      console.log(`${contador} - ${[i]}`)}
  }
  
  console.log("Para agregar más productos escriba: Agregar() ");
    console.log("Para ver una lista de sus productos escriba: Listar()")
    console.log("Para busacr un producto en su carrito escriba: Buscar()")
    console.log("Para borrar un producto escriba: Borrar()")
}


function Buscar() {
  let buscar = (prompt("¿Que producto buscas en tu changuito?")).toUpperCase();
  while (buscar !== null) {
      if (changuito.includes(buscar) === true) {
          alert(`${buscar} se encuentra en su changuito ${(changuito.includes(buscar))}`);
          buscar = (prompt("¿Desea buscar otro producto?")).toUpperCase();
      } else {
          alert('Ese producto no se encuentra en su changuito');
          buscar = (prompt("¿Que producto buscas en tu changuito?")).toUpperCase();
      }
  }
  console.log("Para agregar más productos escriba: Agregar() ");
    console.log("Para ver una lista de sus productos escriba: Listar()")
    console.log("Para busacr un producto en su carrito escriba: Buscar()")
    console.log("Para borrar un producto escriba: Borrar()")
}


function Borrar() {
  let borrar = (prompt("¿Que producto desea eliminar?")).toUpperCase();
  let productoABorrar = changuito.indexOf(borrar)
    if (productoABorrar >= 0  ) {
      changuito.splice(productoABorrar, 1)
      alert(`${borrar} se eliminó correctamente de su changuito!`)
    } else {
      alert("El producto no existe en su carrito")
    }
    console.log("Para agregar más productos escriba: Agregar() ");
    console.log("Para ver una lista de sus productos escriba: Listar()")
    console.log("Para busacr un producto en su carrito escriba: Buscar()")
    console.log("Para borrar un producto escriba: Borrar()")
}
   




// function Filtrar() {
//   let filtrar = (prompt('Filtrar productos por su nombre')).toUpperCase()
//   if (filtrar !== '') {
//     let filtrado = changuito.filter(function () {
//       return producto.includes(filtrar);
//     });
//     alert(`Sus productos con ese nombre son: ${filtrar}`)
//   } else {
//     alert("No poseé productos con esos caracteres")
    
//   }

// }


