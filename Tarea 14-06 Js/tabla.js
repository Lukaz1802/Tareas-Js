heroes = JSON.parse(localStorage.getItem("heroes"));

function cargarTabla(array){
    document.querySelector("#cuerpoTabla").innerHTML = "",
    
    array.forEach(function(elemento, index){
        let fila = document.createElement("tr");
        fila.classList = "text-center";
        let datos= `<td>${elemento.alias}</td>
                    <td>${elemento.nombre}</td>
                    <td>${elemento.poder}</td>
                    <td>${elemento.equipo}</td>
        `;
        fila.innerHTML = datos;

        let cuerpo=document.querySelector("#cuerpoTabla");
        cuerpo.appendChild(fila);
    });
}


cargarTabla(heroes)