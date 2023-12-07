// Adivinar el número

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let maxIntentos = 10;

function adivinarNumero() {
    while (intentos < maxIntentos) {
        let intento = parseInt(prompt("Ingrese un número (entre 1 a 100): "));
        intentos++;

        if (intento === numeroAleatorio) {
            alert("Adivinaste el número en " + intentos + " intentos");
            return;
        } else if (intento < numeroAleatorio) {
            alert("El número es mayor. Intenta de nuevo.");
        } else {
            alert("El número es menor. Intenta de nuevo.");
        }
    }
    
    alert("Has alcanzado el máximo de intentos. El número era: " + numeroAleatorio);
}

adivinarNumero();