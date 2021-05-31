class Productos {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimedatos() {
       document.write(`Código: ${this.codigo} <br> Producto: ${this.nombre} <br> Precio: ${this.precio}`);
    }
}

let producto1 = new Productos("01", "Zapato", "$15.000");
let producto2 = new Productos("02", "Remera", "$3.000");
let producto3 = new Productos("03", "Vaquero", "$7.000");


