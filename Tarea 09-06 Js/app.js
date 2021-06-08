let numeroAleatorio = null
let numeroIntroducir = document.getElementById('.num');



function playGame(){
    console.log("Comenzó el juego!")
    alert("Se generó el número aleatorio!")
    numeroAleatorioBot();
}

function numeroAleatorioBot() {
    return numeroAleatorio = Math.round(Math.random()*10)
}

function IngresarNumero() {
    if (numeroIntroducir===numeroAleatorio) {
        alert("GANASTE")
    }else{
        alert("PERDISTE!")
    }
}
