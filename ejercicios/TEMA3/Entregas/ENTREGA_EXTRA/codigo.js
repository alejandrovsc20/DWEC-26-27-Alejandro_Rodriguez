
/* EXCEPCIONES */

class GolesNegativosError extends Error {}
class DorsalNegativoError extends Error {}
class JugadorRepetidoError extends Error {}

/* CLASE JUGADOR */

class Jugador {
    constructor(dorsal, nombre) {
        this.setDorsal(dorsal);
        this.setNombre(nombre);
        this.estadisticas = new Map();
    }

    // Getters
    getDorsal() {
        return this.dorsal;
    }

    getNombre() {
        return this.nombre;
    }

    // Setters
    setDorsal(dorsal) {
        if (dorsal < 0) {
            throw new DorsalNegativoError("El dorsal no puede ser negativo");
        }

        this.dorsal = dorsal;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    // Añadir goles de un partido
    anadirGolesPorPartido(partido, goles) {
        if (partido < 0 || goles < 0) {
            throw new GolesNegativosError(
                "El partido y los goles no pueden ser negativos"
            );
        }

        this.estadisticas.set(partido, goles);
    }

    // Obtener goles de un partido
    obtenerGoles(partido) {
        if (partido < 0) {
            throw new GolesNegativosError(
                "El partido no puede ser negativo"
            );
        }

        return this.estadisticas.get(partido) ?? 0;
    }

    mostrarJugador() {
        console.log("Dorsal: " + this.dorsal);
        console.log("Nombre: " + this.nombre);

        for (const [partido, goles] of this.estadisticas) {
            console.log("Partido " + partido + ": " + goles + " goles");
        }
    }
}

/* CLASE EQUIPO */

class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
        this.jugadores = [];
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    anadirJugador(jugador) {
        for (const j of this.jugadores) {
            if (j === jugador || j.getDorsal() === jugador.getDorsal()) {
                throw new JugadorRepetidoError(
                    "Jugador repetido o dorsal ocupado"
                );
            }
        }

        this.jugadores.push(jugador);
    }

    borrarJugador(jugador) {
        const posicion = this.jugadores.indexOf(jugador);

        if (posicion !== -1) {
            this.jugadores.splice(posicion, 1);
        }
    }

    mostrarEquipo() {
        console.log("\nEquipo: " + this.nombre);

        for (const jugador of this.jugadores) {
            jugador.mostrarJugador();
            console.log("----------------");
        }
    }
}

/* PRUEBAS */

// Creamos dos equipos
const madrid = new Equipo("Real Madrid");
const barcelona = new Equipo("FC Barcelona");

// Creamos jugadores
const benzema = new Jugador(9, "Karim Benzema");
const modric = new Jugador(10, "Luka Modric");
const lewandowski = new Jugador(9, "Robert Lewandowski");

// Añadimos estadísticas
benzema.anadirGolesPorPartido(1, 1);
benzema.anadirGolesPorPartido(2, 3);
benzema.anadirGolesPorPartido(3, 2);
benzema.anadirGolesPorPartido(4, 0);
benzema.anadirGolesPorPartido(5, 2);

modric.anadirGolesPorPartido(1, 0);
modric.anadirGolesPorPartido(2, 1);

lewandowski.anadirGolesPorPartido(1, 2);
lewandowski.anadirGolesPorPartido(2, 1);

// Añadimos jugadores a sus equipos
madrid.anadirJugador(benzema);
madrid.anadirJugador(modric);
barcelona.anadirJugador(lewandowski);

// Mostramos los equipos
madrid.mostrarEquipo();
barcelona.mostrarEquipo();

// Consultamos los goles
console.log("Goles de Benzema en el partido 2: "
    + benzema.obtenerGoles(2));

// Probamos las excepciones
try {
    const jugador = new Jugador(-1, "Jugador incorrecto");
} catch (error) {
    console.log("Error: " + error.message);
}

try {
    benzema.anadirGolesPorPartido(6, -2);
} catch (error) {
    console.log("Error: " + error.message);
}

try {
    madrid.anadirJugador(benzema);
} catch (error) {
    console.log("Error: " + error.message);
}
