function tiempo(año, mes, dia, hora, minutos, segundos){
    if (año === 0, mes === 0, dia === 0, hora === 0, minutos === 0, segundos === 0){
        const ahora = new Date();
        this.año = ahora.getFullYear();
        this.mes = ahora.getMonth();
        this.dia = ahora.getDay();
        this.hora = ahora.getHours();
        this.minutos = ahora.getMinutes();
        this.segundos = ahora.getSeconds();
    } else{
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
    function getAño(){
        return this.año;
    }
    function setAño(año){
        this.año = año;
    }

    //MES
    function getMes(){
        return this.mes;
    }
    function setMes(mes){
        this.mes = mes;
    }

    //DIA
    function getDia(){
        return this.dia;
    }
    function setDia(dia){
        this.dia = dia;
    }

    //HORA
    function getHora(){
        return this.hora;
    }
    function setHora(hora){
        this.hora = hora;
    }

    //MINUTOS
    function getMinutos(){
        return this.minutos;
    }
    function setMinutos(minutos){
        this.minutos = minutos;
    }
    
    //SEGUNDOS
    function getSegundos(){
        return this.segundos;
    }
    function setSegundos(segundos){
        this.segundos = segundos;
    }
}