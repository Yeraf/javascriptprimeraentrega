

// let estudiante = false;

// if (estudiante) {
//     alert("aprobado")
// }else{
//     alert("Estudia más")
// }

const numeroGanador = 30;

let numeroUsuario = Number(prompt("Escribe tu numero de boleto"));

if (numeroGanador == numeroUsuario){
    alert("Felicidades ganaste la loteria")

    let nombreUsuario = prompt("Ingresa tu nombre :");
    let passWord = prompt("Ingresa una contraseña :");

    if(nombreUsuario == 'Yeraf' & passWord == '123'){
        alert("Puedes Ingresar")
    }else{( nombreUsuario != 'Yeraf')
        alert("Digite una contraseña correcta")
    }

}else{
    alert("Sigue Participando");
}