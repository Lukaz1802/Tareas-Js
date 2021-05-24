let peliculas =[ {
    Título: "Iron Man: El hombre de hierro",
    Género: "Acción/Aventura",
    Anio: 2008,
    Sinopsis: "Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo."
},
{
    Título: "El Increíble Hulk de Marvel Studios",
    Género: "Acción/Aventura",
    Anio: 2008,
    Sinopsis: "Bruce Banner recorre el mundo en busca de un antídoto para librarse de su alter ego. Además tendrá que hacer frente a Emil, un nuevo enemigo, lo que convertirá a Nueva York en el escenario de la última batalla entre las dos criaturas más poderosas.",
},

{

    Título: "Iron Man 2",
    Género: "Acción/Aventura",
    Anio: 2010,
    Sinopsis:"Con el mundo ahora consciente de que él es Iron Man, el millonario inventor Tony Stark debe forjar nuevas alianzas y confrontar a un enemigo nuevo y poderoso."
},
{
    Título: "Thor",
    Género: "Acción/Fantasía",
    Anio: 2011,
    Sinopsis: "Tras desatar una antigua guerra, el codicioso guerrero Thor es desterrado a la Tierra por su padre para que viva entre los hombres y descubra así el verdadero sentido de la humildad. Allí, sin sus poderes, Thor deberá enfrentarse a las fuerzas más oscuras que su mayor enemigo le enviará desde Asgard." 
},
{


    Título: "Capitán América: el primer vengador",
    Género: "Acción/Aventura ",
    Anio: 2011,
    Sinopsis: "Tras tres meses de someterse a un programa de entrenamiento físico y táctico, encomiendan a Steve Rogers su primera misión como Capitán América. Armado con un escudo indestructible, emprende la guerra contra la perversa organización HYDRA.",
},

{


    Título: "The Avengers: los Vengadores",
    Género: "Aventura/Acción",
    Anio: 2012,
    Sinopsis: "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial.",
},
]

function listar() {
    let pelis = prompt("Ingrese una de las siguientes peliculas para saber más: \n 1 : Iron Man. \n 2 : El Increíble Hulk.\n 3 : Iron Man 2.\n 4 : Thor. \n 5 : Capitan America.\n 6 : Los Vengadores ")
    switch (pelis) {
        case "1":
        case "Iron Man" :
            for (let i in peliculas[0])
                console.log(`${[i]} : ${peliculas[0][i]}`)
            break;
            case "2":
            case "El Increíble Hulk ":
            for (let i in peliculas[0])
                console.log(`${[i]} : ${peliculas[1][i]}`)
            break;
            case "3":
            case "Iron Man 2":
            for (let i in peliculas[0])
                console.log(`${[i]} : ${peliculas[2][i]}`)
            break;
            case "4":
            case "Thor":
            for (let i in peliculas[0])
                console.log(`${[i]} : ${peliculas[3][i]}`)
            break;
            case "5":
            case "Capitan America":
            for (let i in peliculas[0])
                console.log(`${[i]} : ${peliculas[4][i]}`)
            break;
            case "6":
            case "Los Vengadores":
            for (let i in peliculas[0])
                console.log(`${[i]} : ${peliculas[5][i]}`)
            break;
    
        default:
            alert("No se ingreso ninguna pelicula de la lista");
            break;
    }

}




