
let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

class Contacto{
    constructor(nombre, telefono){
        this.nombre = nombre;
        this.telefono=telefono;
    }
}

function aniadirContacto(nombre, telefono){
    let yaexiste=agenda.find(function(agenda){
        return agenda.nombre===nombre || agenda.telefono===telefono
    })
    if (yaexiste )
    alert("Ya existe un contacto con ese nombre o telefono")
    else if (agenda.length >= 5)
       alert("No se pueden agregar mas contactos")
    else{
        agenda.push(new Contacto(nombre, telefono) )
        alert("Se agregó el contacto a la agenda")
    localStorage.setItem("agenda", JSON.stringify(agenda)); }
    
}

function listarContactos() {
    agenda.forEach(function (Contacto) {
      console.log(`Nombre: ${Contacto.nombre}`);
      console.log(`Telefono: ${Contacto.telefono}`);
      console.log(`========================`);
    });
  }

  function buscarContact(nombre){
      let user=agenda.find(function(agenda){
          return agenda.nombre===nombre
      })
if (user) {
    console.log(`Nombre: ${user.nombre}`);
    console.log(`Telefono: ${user.telefono}`);;
}else{
    console.warn("No se encontró un contacto con ese nombre")
}

  }

  function existeContacto(nombre){
      let existe=agenda.find(function(agenda){
          return agenda.nombre===nombre
      })
      if (existe) {
        console.log(`El contacto ${existe.nombre} ya existe`);
        console.log(`Su numero es ${existe.telefono}`);
    }else{
        console.warn("No existe ese contacto")
    }
  }

