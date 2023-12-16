// for (let i = 0; i < 10; i++){
//     alert(i)
// }

// let numero = parseInt(prompt("Ingrese un numero para la tabla de multiplicar"));

// for ( i = 0; i < 10; i++){
//     let resultado = i * numero;
//     console.log(numero + "x" + i + "=" + resultado);
// }

// let nombre = prompt("Ingrese su nombre : ");

// if (nombre.toLocaleUpperCase === "Yeraf"){
//     alert("Aprobaste");
// }else{
//     alert("No pasó")
// }

// 'yeraf'.toUpperCase()

// for (i = 0; i < 10; i++){
//     let numeroAdivinar = Number(prompt('Adivina el número:'))
//     if( numeroAdivinar == 5){
//         break;
//     }
//     alert("Intento número " + 1 + i)
// } 

// alert("El numero para adivinar es 5")


let preguntas = 5;
let contador = 0;
let racha = 0;
let malas = 0;
let random = Math.round(Math.random()*10);

for ( i = 2; i <= preguntas + 2; i++){
    let respuesta = i * random;

    let respuestaUsuario = prompt("Cuánto es "+ i + "x" + random + "?")
}