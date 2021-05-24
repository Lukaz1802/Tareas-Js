let persona = {
Nombre: "Lucas",
Edad: 21,
DNI: 42444931,
Domicilio: "Av. Independencia. San Miguel de Tucuman",
Hijos: 0,
Profesión: "Estudiante",
saludar:function( ) {
    alert(`${this.Nombre} te saluda!`)
},
listar:function(){
    for (let propiedad in persona){
        console.log(`${propiedad}: ${persona[propiedad]}`)
    }
}




}