let numero1 = prompt(`Ingrese un número`);
let numero2 = prompt(`Ingrese un segundo número`);

if(numero1 > numero2){
    console.log(parseInt(numero1)+parseInt(numero2))
}else if(numero1 < numero2){
    console.log(parseInt(numero2) - parseInt(numero1))
}else{
    (numero1 === numero2)
    console.log(numero1 * numero2)
}
