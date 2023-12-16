class Ahorcado {
    constructor(palabra) {
      this.palabra = palabra.toUpperCase();
      this.letrasCorrectas = new Set();
      this.letrasIncorrectas = new Set();
      this.intentosFallidos = 0;
    }
  
    mostrarEstado() {
      let estadoPalabra = '';
      for (const letra of this.palabra) {
        if (this.letrasCorrectas.has(letra)) {
          estadoPalabra += letra;
        } else {
          estadoPalabra += ' _ ';
        }
      }
      return estadoPalabra;
    }
  
    adivinar(letra) {
      letra = letra.toUpperCase();
      if (this.palabra.includes(letra)) {
        this.letrasCorrectas.add(letra);
      } else {
        this.letrasIncorrectas.add(letra);
        this.intentosFallidos++;
      }
    }
  
    jugar() {
      while (!this.juegoTerminado()) {
        const letra = prompt(`Palabra: ${this.mostrarEstado()}\nIntentos fallidos: ${this.intentosFallidos}\n\nIngresa una letra:`);
        if (letra.length !== 1 || !/^[a-zA-Z]+$/.test(letra)) {
          alert('Por favor, ingresa una sola letra.');
          continue;
        }
        this.adivinar(letra);
      }
  
      if (this.letrasCorrectas.size === this.palabra.length) {
        alert(`¡Felicidades! Has adivinado la palabra: ${this.palabra}`);
      } else {
        alert(`¡Oh no! Has perdido. La palabra era: ${this.palabra}`);
      }
    }
  
    juegoTerminado() {
      const intentosMaximos = 6;
      return (
        this.intentosFallidos >= intentosMaximos ||
        this.letrasCorrectas.size === this.palabra.length
      );
    }
  }
  
  function jugarAhorcado() {
    const palabraSecreta = prompt('Ingresa la palabra para jugar al ahorcado:');
    const juego = new Ahorcado(palabraSecreta);
    juego.jugar();
  }
  
  jugarAhorcado();