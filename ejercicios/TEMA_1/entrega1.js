function tiempo(año, mes, dia, hora, minutos, segundos) {
    if (año === 0, mes === 0, dia === 0, hora === 0, minutos === 0, segundos === 0) {
        const ahora = new Date();
        this.año = ahora.getFullYear();
        this.mes = ahora.getMonth();
        this.dia = ahora.getDay();
        this.hora = ahora.getHours();
        this.minutos = ahora.getMinutes();
        this.segundos = ahora.getSeconds();
    } else {
        const fecha = new Date(año, mes - 1, dia, hora, minutos, segundos);
        this.año = fecha.getFullYear();
        this.mes = fecha.getMonth() + 1;
        this.dia = fecha.getDay();
        this.hora = fecha.getHours();
        this.minutos = fecha.getMinutes();
        this.segundos = fecha.getSeconds();
    }

    //Getters y setters
    //AÑO
    function getAño() {
        return this.año;
    }
    function setAño(año) {
        this.año = año;
    }

    //MES
    function getMes() {
        return this.mes;
    }
    function setMes(mes) {
        this.mes = mes;
    }

    //DIA
    function getDia() {
        return this.dia;
    }
    function setDia(dia) {
        this.dia = dia;
    }

    //HORA
    function getHora() {
        return this.hora;
    }
    function setHora(hora) {
        this.hora = hora;
    }

    //MINUTOS
    function getMinutos() {
        return this.minutos;
    }
    function setMinutos(minutos) {
        this.minutos = minutos;
    }

    //SEGUNDOS
    function getSegundos() {
        return this.segundos;
    }
    function setSegundos(segundos) {
        this.segundos = segundos;
    }

    // --- MÉTODOS DE FORMATO ---
    Tiempo.prototype.getFechaCompleta = function () {
        const d = String(this.dia).padStart(2, '0');
        const m = String(this.mes).padStart(2, '0');
        return `${d}/${m}/${this.año}`;
    };

    Tiempo.prototype.getHoraCompleta = function () {
        const h = String(this.hora).padStart(2, '0');
        const m = String(this.minuto).padStart(2, '0');
        const s = String(this.segundo).padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    // --- MÉTODOS DE LÓGICA Y COMPARACIÓN ---
    Tiempo.prototype.esBisiesto = function () {
        return (this.año % 4 === 0 && this.año % 100 !== 0) || (this.año % 400 === 0);
    };

    // Método auxiliar privado para convertir a Date nativo y facilitar comparaciones
    Tiempo.prototype._aDateNativo = function () {
        return new Date(this.año, this.mes - 1, this.dia, this.hora, this.minuto, this.segundo);
    };

    Tiempo.prototype.esMayor = function (otroTiempo) {
        return this._aDateNativo().getTime() > otroTiempo._aDateNativo().getTime();
    };

    Tiempo.prototype.esMenor = function (otroTiempo) {
        return this._aDateNativo().getTime() < otroTiempo._aDateNativo().getTime();
    };

    Tiempo.prototype.esIgual = function (otroTiempo) {
        return this._aDateNativo().getTime() === otroTiempo._aDateNativo().getTime();
    };

    Tiempo.prototype.sumaHora = function (otroTiempo) {
        const fechaTemp = this._aDateNativo();

        // Sumamos horas, minutos y segundos. Date() se encarga de reajustar los días si nos pasamos de las 24h
        fechaTemp.setHours(fechaTemp.getHours() + otroTiempo.getHora());
        fechaTemp.setMinutes(fechaTemp.getMinutes() + otroTiempo.getMinuto());
        fechaTemp.setSeconds(fechaTemp.getSeconds() + otroTiempo.getSegundo());

        // Actualizamos las propiedades del objeto actual
        this.año = fechaTemp.getFullYear();
        this.mes = fechaTemp.getMonth() + 1;
        this.dia = fechaTemp.getDate();
        this.hora = fechaTemp.getHours();
        this.minuto = fechaTemp.getMinutes();
        this.segundo = fechaTemp.getSeconds();
    };

    //EJEMPLOS:
    console.log("--- Creación de Objetos ---");
    const tiempoActual = new Tiempo(0, 0, 0, 0, 0, 0);
    console.log("Tiempo actual (0s):", tiempoActual.getFechaCompleta(), tiempoActual.getHoraCompleta());

    const tiempo1 = new Tiempo(2024, 2, 28, 22, 30, 0); // 28 de Febrero de 2024 (Bisiesto) a las 22:30:00
    const tiempo2 = new Tiempo(2023, 5, 15, 10, 15, 30); // 15 de Mayo de 2023 a las 10:15:30

    console.log("\n--- Formatos ---");
    console.log("Tiempo 1 - Fecha:", tiempo1.getFechaCompleta());
    console.log("Tiempo 1 - Hora:", tiempo1.getHoraCompleta());

    console.log("\n--- Comprobación de Bisiesto ---");
    console.log("¿El año", tiempo1.getAño(), "es bisiesto?:", tiempo1.esBisiesto());
    console.log("¿El año", tiempo2.getAño(), "es bisiesto?:", tiempo2.esBisiesto());

    console.log("\n--- Comparaciones ---");
    console.log("¿Tiempo 1 es mayor que Tiempo 2?:", tiempo1.esMayor(tiempo2));
    console.log("¿Tiempo 1 es menor que Tiempo 2?:", tiempo1.esMenor(tiempo2));
    console.log("¿Tiempo 1 es igual que Tiempo 2?:", tiempo1.esIgual(tiempo2));

    console.log("\n--- Suma de Horas ---");
    console.log("Estado inicial Tiempo 1:", tiempo1.getFechaCompleta(), tiempo1.getHoraCompleta());

    // Creamos un tiempo pequeño solo para sumarle su hora (2 horas, 45 minutos)
    const tiempoASumar = new Tiempo(2000, 1, 1, 2, 45, 0);
    console.log("Sumando 2 horas y 45 minutos...");

    tiempo1.sumaHora(tiempoASumar);
    // Como eran las 22:30 y sumamos 2:45, pasará la medianoche y avanzará al 29 de febrero
    console.log("Nuevo estado Tiempo 1:", tiempo1.getFechaCompleta(), tiempo1.getHoraCompleta());
}