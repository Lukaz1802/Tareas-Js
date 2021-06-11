let heroes = JSON.parse(localStorage.getItem("heroes")) || [ ]
let mem= 10;

class Heroe{
    constructor(alias,nombre,poder,equipo){
        this.alias = alias
        this.nombre = nombre
        this.poder = poder
        this.equipo = equipo
    }

}
//Agregar heroes a la agenda.

function addHeroe(){
    let alias = document.querySelector("#aliasText");
    let nombre = document.querySelector("#nombreText");
    let poder = document.querySelector("#poderText");
    let equipo = document.querySelector("#equipoText");

    if (!alias.value || !nombre.value || !poder.value || !equipo.value) {
        alert("Faltan datos del heróe");
        alias.focus();
    } else {
        let verify =verifyHeroe(alias.value);
        if (verify) {
            alert("El heróe ya existe en la tabla de heróes");
        } else {
            if (mem > 0) {
                 heroes.push(new Heroe(alias.value.toUpperCase(), nombre.value.toUpperCase(), poder.value.toUpperCase(), equipo.value.toUpperCase()));
                 localStorage.setItem("heroes", JSON.stringify(heroes));
                 mem -= 1
            } else {
                alert("Memoria llena")
            }
            alert("Se agregó el heróe a la tabla")
            updateHeroes()
        }
    }
}

function verifyHeroe(alias){
    let verify = heroes.find(function(heroe){
        return heroe.alias.toLowerCase() === alias.toLowerCase()
    });
    if (verify) {
        return true;
    }else{
        return false;
    }
}



function updateHeroes(){
    document.querySelector('#aliasText').value = "";
    document.querySelector('#nombreText').value = "";
    document.querySelector('#poderText').value = "";
    document.querySelector('#equipoText').value = "";
    heroes = JSON.parse(localStorage.getItem("heroes"));


}

// function cargarTabla(array){
//     document.querySelector("#cuerpoTabla").innerHTML = "",
    
//     array.forEach(function(elemento, index){
//         let fila = document.createElement("tr");
//         fila.classList = "text-center";
//         let datos= `<td>${elemento.alias}</td>
//                     <td>${elemento.nombre}</td>
//                     <td>${elemento.poder}</td>
//                     <td>${elemento.equipo}</td>
//         `;
//         fila.innerHTML = datos;

//         let cuerpo=document.querySelector("#cuerpoTabla");
//         cuerpo.appendChild(fila);
//     });
// }


// cargarTabla(heroes)