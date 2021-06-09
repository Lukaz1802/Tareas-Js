let numeroAleatorio = null
let numeroIntroducir = document.getElementById('num');



function playGame(){
    console.log("Comenzó el juego!")
    alert("Se generó el número aleatorio!")
    numeroAleatorioBot();
}

function numeroAleatorioBot() {
    return numeroAleatorio = Math.round(Math.random()*10)
}

function IngresarNumero() {
    if (numeroIntroducir.value == numeroAleatorio)
    alert("GANASTE!")
else if (numeroIntroducir.value > numeroAleatorio)
alert("CASI! El número que introduciste es mayor al numero magico!")
else if (numeroIntroducir.value < numeroAleatorio)
alert("CASI! El número que introduciste es menor al numero magico!")
else {

}
}