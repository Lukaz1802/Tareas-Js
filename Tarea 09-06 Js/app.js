let numeroAleatorio = null
let introducir = document.getElementById('num'); 



function playGame(){
    console.log("Comenzó el juego!")
    alert("Se generó el número aleatorio!")
    numeroAleatorioBot();
}

function numeroAleatorioBot() {
    return numeroAleatorio = Math.round(Math.random()*10)
}

function IngresarNumero() {
    if (introducir===numeroAleatorio) {
        alert("GANASTE")
    }else{
        alert("PERDISTE!")
    }
}
