let numero1 = parseInt(prompt(`Ingrese un número`));
let numero2 = parseInt(prompt(`Ingrese un segundo número`));
let operacion = prompt(`¿Que operación desea realizar? (+, -, *, /)`);

if (isNaN(numero1, numero2)) {
    numero1 = 0
    numero2 = 0
} else {

}

switch (operacion) {
    case '+': 
        console.log(parseInt(numero1) + parseInt(numero2))
        
        break;
        case '-': 
        console.log(parseInt(numero1) - parseInt(numero2))
        
        break;
        case '*': 
        console.log(parseInt(numero1) * parseInt(numero2))
        
        break;
        case '/': 
        console.log(parseInt(numero1) / parseInt(numero2))
        
        break;
        
    default:
    console.error('No existe esa operación')
        break;
}