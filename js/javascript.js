// Adivinar el número

var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let maxIntentos = 10;

function adivinarNumero() {
    var intento = parseInt(prompt("Ingrese un número (entre 1 a 100): "));
    intentos++;

    if (intento === numeroAleatorio) {
        alert("Adivinaste el número en " + intentos+ " intentos")
    } else if (intento < numeroAleatorio) {
        alert("El Numero es mayor. Intenta de nuevo.");
        if (intentos < maxIntentos) {
            adivinarNumero();
        }else{
            alert("Has alcanzado el máximo deintentos. El Número era: " + numeroAleatorio);
        }
    } else {
        alert("El número es menor. Intenta de nuevo.");
        if (intentos < maxIntentos) {
            adivinarNumero();
        } else {
            alert("Has alcanzado el maximo de intentos. El número era: " + numeroAleatorio);
        }
    }
}

adivinarNumero();