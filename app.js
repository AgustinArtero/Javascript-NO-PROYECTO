// Variables declaradas 

let nombre = prompt("Ingrese su nombre por favor");
bienvenida();

let productoUno;
let productoDos;
let productoTres;

let sumaUno = 0;
let sumaDos = 0;
let sumaTres = 0;

//let total = sumaUno + sumaDos + sumaTres;

const hamburguesaSola = 400;
const hamburguesaWCheddar = 590;
const hamburguesaTripleCheddar = 800;
const empanadaCarne = 160;

const papasFritas = 250;
const papasWCheddar = 350; 
const ensaladaComun = 350;
const ensaladaCompleta = 450;

const cerveza = 300;
const cocacola = 200;
const sprite = 200;
const agua = 100; 

let opcion = Number(prompt("Seleccione segun su deseo: \n 1 = Plato principal \n 2 = Plato para acompañar \n 3 =  Bebidas \n 4 = Cancelar"))
    while (opcion !== 4) {
        if (opcion === 1){
        compraPrincipal();
    } 
        if (opcion == 2) {
        compraSecundaria(); 
    }
        if (opcion == 3) { 
        compraBebidas();
        }
        if (opcion == 1 || 2 || 3) {
            alert("El numero ingresado es incorrecto")
            opcion = 4;
        } 
}

// functions

function finalizarCompra() {
    let total = sumaTres + sumaDos + sumaUno
    alert("El monto total del pedido es $" + total * .64);
    alert("Gracias por su compra!");
}

function bienvenida () {
    alert("Te estabamos esperando " + nombre + "! Pulsa en aceptar para ingresar a la Tienda de menús!");
}

function compraPrincipal() {
    productoUno = prompt("Seleccione su comida principal \n 1 = Hamburguesa simple \n 2 = Hamburguesa con Cheddar \n 3 = Hamburguesa Triple Cheddar \n 4 = Empanadas de carne simples \n 5 = Saltear plato principal");
    while (productoUno <= 6) {
        if (productoUno == 1) {
            console.log("Elegiste Hamburguesa simple")
            console.log(sumaUno = hamburguesaSola);
        }
        else if (productoUno == 2) {
            console.log("Elegiste Hamburguesa con Cheddar")
            console.log(sumaUno = hamburguesaWCheddar);
        }
        else if (productoUno == 3) {
            console.log("Elegiste Hamburguesa Triple Cheddar")
            console.log(sumaUno = hamburguesaTripleCheddar);
        }
        else if (productoUno == 4) {
            console.log("Elegiste Empanadas de carne")
            console.log(sumaUno = empanadaCarne);
        }
        else if (productoUno == 5) {
            alert("Saltear plato principal")
            console.log(sumaUno = 0);
            compraSecundaria();
        }
        else if (productoUno <= 6){
            alert("El numero ingresado es incorrecto")
            productoUno = 7;
        }
        

     option = Number(prompt("Seleccione una opcion para continuar: \n 1 = Seguir con mi compra \n 2 = Pedir la cuenta \n 3 = Cancelar"))
      if (option == 1){
        compraSecundaria();
      }
      else if (option == 2) {
        finalizarCompra(); 
      }
      break;
    }

}

       

    function compraSecundaria() {
    productoDos = Number(prompt("Seleccione su comida secundaria \n 1 = Papas fritas \n 2 = Papas fritas Cheddar \n 3 = Ensalada comun (Lechuga, cebolla y tomate) \n 4 = Ensalada completa (Lechuga, tomate, cebolla, zanahoria y palta) \n 5 = Saltear a 'Bebidas'"));
        if (productoDos == 1) { 
            console.log("Elegiste Papas fritas")
            console.log(sumaDos = papasFritas);
        }
        else if (productoDos == 2) {
            console.log("Elegiste Papas fritas Cheddar")
            console.log(sumaDos = papasWCheddar);
        }
        else if (productoDos == 3) {
            console.log("Ensalada comun (Lechuga, cebolla y tomate)")
            console.log(sumaDos = ensaladaComun);
        }
        else if (productoDos == 4) {
            console.log("Ensalada completa (Lechuga, tomate, cebolla, zanahoria y palta)")
            console.log(sumaDos = ensaladaCompleta);
        }
        else if (productoDos == 5) {
            alert("No quiere bebida")
            finalizarCompra();
            console.log(sumaDos = 0);
        }
        else if (productoDos !== 1 || 2 || 3 || 4 || 5){
            alert("El numero ingresado es incorrecto")
        }

        let option = Number(prompt("Seleccione una opcion para continuar: \n 1 = Seguir con mi compra \n 2 = Pedir la cuenta \n 3 = Cancelar"))
            if (option == 1)
            compraBebidas();
             else if (option == 2)
            finalizarCompra();
    }


function compraBebidas() {
    productoTres = prompt("Seleccione su bebida \n 1 = Cerveza \n 2 = CocaCola \n 3 = Sprite \n 4 = Agua \n 5 = No deseo bebida");
        if (productoTres == 1) {
            console.log("Elegiste Cerveza")
            sumaTres = cerveza;
        }
        else if (productoTres == 2) {
            console.log("Elegiste CocaCola")
            sumaTres = cocacola;
        }
        else if (productoTres == 3) {
            console.log("Elegiste Sprite")
            sumaTres = sprite;
        }
        else if (productoTres == 4) {
            console.logert("Elegiste Agua")
            sumaTres = agua;
        }
        else if (productoTres == 5) {
            console.log("No seleccionaste bebida")
            sumaTres =  0;
        }
        
        let option = Number(prompt("Seleccione una opcion para continuar: \n 1 = Pedir la cuenta \n 2 = Cancelar"))
        if (option == 1)
        finalizarCompra();
}
