// let edad = 30;

// if (edad < 18) {
//     alert("No eres mayor de edad");
// } else if (edad <= 30) {
//     alert("Estas en los mejores años")
// } else if (edad <= 55){
//     alert("No sabes lo que es Tok Tok")
// } else if (edad <= 70){
//     alert("Ya estas mayor")
// } else {
//     alert("Fin de las lineas")
// }


let edadPersona = Number(prompt("Cuál es tu edad :"));

if (edadPersona >= 18 ){
    alert("Puedes ingresar a la fiesta");

    let efectivo = Number(prompt("Cuánto tienes de dinero ? :"));

    if (efectivo < 1000){
        alert("No te alzanza para nada :(")
    } else if(efectivo >= 1000 && efectivo < 4999){
        alert("Con tu monto de " + efectivo + " Puedes comprar Tragos de sabores");
    } else if ( efectivo >= 5000 && efectivo < 9999){
        alert("Con tu monto de " + efectivo + " Puedes comprar Tragos con Vodka");
    } else {(efectivo >= 10000)
        alert("Puedes comprar lo que quieras")
    }

} else {
    if (edadPersona <= 0){
         alert("Ingresar numeros positivos")
    } else if(isNaN(edadPersona)) {
        alert("No ingresar String")
    } else {
        alert("No puedes ingresar por ser menor de edad :(");
    }
}