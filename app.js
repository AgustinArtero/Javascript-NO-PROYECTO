function bienvenida () {
    alert("Te estabamos esperando " + nombre + "! Pulsa en aceptar para ingresar a la Tienda de menús!");
}

function compraPrincipal() {
    productoUno = prompt("Seleccione su comida principal \n 1 = Hamburguesa simple \n 2 = Hamburguesa con Cheddar \n 3 = Hamburguesa Triple Cheddar \n 4 = Empanadas de carne simples \n 5 = Saltear plato principal");
        if (producto === 1) {
            alert("Elegiste Hamburguesa simple")
            sumaUno = hamburguesaSola * 0.64;
        }
        else if (producto === 2) {
            alert("Elegiste Hamburguesa con Cheddar")
            sumaUno = hamburguesaWCheddar * 0.64;
        }
        else if (producto === 3) {
            alert("Elegiste Hamburguesa Triple Cheddar")
            sumaUno = hamburguesaTripleCheddar * 0.64;
        }
        else if (producto === 4) {
            alert("Elegiste Empanadas de carne")
            sumaUno = empanadaCarne * 0.64;
        }
        else if (producto === 5) {
            alert("Saltear plato principal")
            sumaUno = sumaUno;
        }

        let opcion = Number(prompt("Seleccione segun su deseo: \n 1 = Plato para acompañar \n 2 =  Bebidas"))
    if (opcion === 1) {
        compraSecundaria();
    } 
    else if (opcion === 2) {
        compraBebidas(); 
    }
    else if (opcion !== "1", "2") 
    alert("El numero ingresado es erroneo.");

}
   // opcion = Number(prompt("Seleccione una opcion para continuar: \n 1 = Seguir con mi compra \n 2 = Pedir la cuenta \n 3 = Cancelar"));


       

    function compraSecundaria() {
    productoDos = Number(prompt("Seleccione su comida principal \n 1 = Papas fritas \n 2 = Papas fritas Cheddar \n 3 = Ensalada comun (Lechuga, cebolla y tomate) \n 4 = Ensalada completa (Lechuga, tomate, cebolla, zanahoria y palta) \n 5 = Saltear a 'Bebidas'"));
        if (producto === 1) {
            alert("Elegiste Papas fritas")
            sumaDos = papasFritas * 0.64;
        }
        else if (producto === 2) {
            alert("Elegiste Papas fritas Cheddar")
            sumaDos = papasWCheddar * 0.64;
        }
        else if (producto === 3) {
            alert("Ensalada comun (Lechuga, cebolla y tomate)")
            sumaDos = ensaladaComun * 0.64;
        }
        else if (producto === 4) {
            alert("Ensalada completa (Lechuga, tomate, cebolla, zanahoria y palta)")
            sumaDos = ensaladaCompleta * 0.64;
        }
        else if (producto === 5) {
            alert("Siguiente paso")
            sumaDos = sumaDos;
        }

    opcion = prompt("Seleccione una opcion para continuar: \n 1 = Seguir con mi compra \n 2 = Pedir la cuenta \n 3 = Cancelar");
        
        compraBebidas ();
}

function compraBebidas() {
    productoTres = prompt("Seleccione su comida principal \n 1 = Cerveza \n 2 = CocaCola \n 3 = Sprite \n 4 = Agua \n 5 = No deseo bebida");
        if (producto === 1) {
            alert("Elegiste Cerveza")
            sumaDos = cerveza * 0.64;
        }
        else if (producto === 2) {
            alert("Elegiste CocaCola")
            sumaDos = cocacola * 0.64;
        }
        else if (producto === 3) {
            alert("Elegiste Sprite")
            sumaDos = sprite * 0.64;
        }
        else if (producto === 4) {
            alert("Elegiste Agua")
            sumaDos = agua * 0.64;
        }
        else if (producto === 5) {
            alert("No seleccionaste bebida")
            sumaDos =  sumaTres;
        }

    opcion = prompt("Seleccione una opcion para continuar: \n 1 = Seguir con mi compra \n 2 = Pedir la cuenta \n 3 = Cancelar");
        
        finalizarCompra();
}

function finalizarCompra() {
    total = sumaUno + sumaDos + sumaTres;
    alert("El monto total del pedido es " + total);

}





let nombre = prompt("Ingrese su nombre por favor");
bienvenida();

let opcion = Number(prompt("Seleccione segun su deseo: \n 1 = Plato principal \n 2 = Plato para acompañar \n 3 =  Bebidas"))
    if (opcion === 1) {
        compraPrincipal();
    } 
    else if (opcion === 2) {
        compraSecundaria(); 
    }
    else if (opcion === 3) { 
        compraBebidas();
    }
    else if (opcion !== "1", "2", "3") 
    alert("El numero ingresado es erroneo.");


let productoUno;
let productoDos;
let productoTres;

let sumaUno = 0;
let sumaDos = 0;
let sumaTres = 0;

let total = 0;

let hamburguesaSola = 400;
let hamburguesaWCheddar = 590;
let hamburguesaTripleCheddar = 800;
let empanadaCarne = 160;

let papasFritas = 250;
let papasWCheddar = 350; 
let ensaladaComun = 350;
let ensaladaCompleta = 450;

let cerveza = 300;
let cocacola = 200;
let sprite = 200;
let agua = 100; 
