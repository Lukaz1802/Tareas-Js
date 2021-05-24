function LanzarDados(){
    let dado1 = (Math.round(Math.random() * 4) +1);
    let dado2 = (Math.round(Math.random() * 4) +1);
    let resultado = dado1 + dado2
     
    console.log(`Dado 1 = ${dado1}`) 
    console.log(`Dado 2 = ${dado2}`)
    console.log(`El resultado de la suma de ambos es: ${resultado}`)
  
  }

  let vecesLanzar = 50
  for(i=1;i<=vecesLanzar;i++){         
    LanzarDados()
  
  // let repetido = resultado.filter(numero => numero === 5);
  // console.log(repetido)
  

  }




