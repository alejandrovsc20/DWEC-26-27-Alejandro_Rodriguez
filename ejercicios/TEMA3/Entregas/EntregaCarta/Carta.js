
class Carta {
    // Constructor por defecto y constructor de copia
    constructor(numero = 1, palo = 'c') {

        // Si recibimos otra carta, hacemos una copia
        if (numero instanceof Carta) {
            this._numero = numero.numero;
            this._palo = numero.palo;
        } else {
            this._numero = 1;
            this._palo = 'c';

            this.numero = numero;
            this.palo = palo;
        }
    }

    // Getters
    get numero() {
        return this._numero;
    }

    get palo() {
        return this._palo;
    }

    // Setters con validacion
    set numero(numero) {
        if (numero >= 1 && numero <= 13 &&
            Number.isInteger(numero)) {
            this._numero = numero;
        } else {
            console.log("Error: el numero debe estar entre 1 y 13.");
        }
    }

    set palo(palo) {
        palo = palo.toLowerCase();

        if (['c', 'p', 'r', 't'].includes(palo)) {
            this._palo = palo;
        } else {
            console.log("Error: palo no valido.");
        }
    }

    // Mostrar la carta
    mostrarCarta() {
        let nombreNumero;
        let nombrePalo;

        switch (this.numero) {
            case 1:
                nombreNumero = "As";
                break;
            case 11:
                nombreNumero = "Jack";
                break;
            case 12:
                nombreNumero = "Reina";
                break;
            case 13:
                nombreNumero = "Rey";
                break;
            default:
                nombreNumero = this.numero;
        }

        switch (this.palo) {
            case 'c':
                nombrePalo = "Corazones";
                break;
            case 'p':
                nombrePalo = "Picas";
                break;
            case 'r':
                nombrePalo = "Rombos";
                break;
            case 't':
                nombrePalo = "Treboles";
                break;
        }

        console.log(`Es el ${nombreNumero} de ${nombrePalo}`);
    }

    // Comparar dos cartas
    comparar(otra) {
        // Primero comparamos los numeros
        if (this.numero > otra.numero) {
            console.log("Gana la carta actual.");
            return 1;
        }

        if (this.numero < otra.numero) {
            console.log("Gana la carta recibida.");
            return -1;
        }

        // Si los numeros son iguales, comparamos los palos
        const prioridad = {
            'c': 1,
            'p': 2,
            'r': 3,
            't': 4
        };

        if (prioridad[this.palo] > prioridad[otra.palo]) {
            console.log("Gana la carta actual.");
            return 1;
        }

        if (prioridad[this.palo] < prioridad[otra.palo]) {
            console.log("Gana la carta recibida.");
            return -1;
        }

        console.log("Las cartas son iguales. Hay empate.");
        return 0;
    }
}

//PRUEBAS 


console.log("=== CONSTRUCTOR POR DEFECTO ===");
let carta1 = new Carta();
carta1.mostrarCarta();

console.log("\n=== CONSTRUCTOR CON PARAMETROS ===");
let carta2 = new Carta(10, 't');
carta2.mostrarCarta();

console.log("\n=== CONSTRUCTOR DE COPIA ===");
let carta3 = new Carta(carta2);
carta3.mostrarCarta();

console.log("\n=== GETTERS ===");
console.log("Numero:", carta2.numero);
console.log("Palo:", carta2.palo);

console.log("\n=== SETTERS ===");
carta1.numero = 12;
carta1.palo = 'r';
carta1.mostrarCarta();

console.log("\n=== COMPARACIONES ===");

// Gana la carta actual por tener mayor numero
let resultado1 = carta1.comparar(carta2);
console.log("Resultado:", resultado1);

// Las cartas son iguales porque carta3 es una copia
let resultado2 = carta2.comparar(carta3);
console.log("Resultado:", resultado2);

// Mismo numero, diferente palo
let carta4 = new Carta(7, 't');
let carta5 = new Carta(7, 'c');

let resultado3 = carta4.comparar(carta5);
console.log("Resultado:", resultado3);

console.log("\n=== VALIDACIONES ===");
carta1.numero = 15;
carta1.palo = 'x';

// Conserva los valores anteriores
carta1.mostrarCarta();
