//Constructor por defecto
//Constructor con parametros
function Cuenta(nombre = "", numeroCuenta = "", tipoInteres = 0, saldo = 0){
    this.nombre = nombre;
    this.numeroCuenta = numeroCuenta;
    this.tipoInteres = tipoInteres;
    this.saldo = saldo;
}
//Constructor copia
function copyCuenta(CuentaOriginal){
    return new Cuenta(
        CuentaOriginal.nombre,
        CuentaOriginal.numeroCuenta,
        CuentaOriginal.tipoInteres,
        CuentaOriginal.saldo
    );
}
function getNombre(){
    return this.nombre;
}
function setNombre(newNombre){
    this.nombre = newNombre;
}
function getNumeroCuenta(){
    return this.numeroCuenta;
}
function setNumeroCuenta(newNumeroCuenta){
    this.numeroCuenta = newNumeroCuenta;
}
function getTipoInteres(){
    return this.tipoInteres;
}
function setTipoInteres(newTipoInteres){
    this.tipoInteres = newTipoInteres;
}
function getSaldo(){
    return this.saldo;
}
function setSaldo(newSaldo){
    this.saldo = newSaldo;
}
const CuentaCorriente = {
    nombre: "",
    numeroCuenta,
    tipoInteres,
    saldo
}
function ingreso (cuenta,aumento){
    (aumento <= 0) ? "El aumento no puede ser nulo o negativo" : cuenta.saldo += aumento;
}

function transferencia (cuenta1, cuenta2, importe){
    (importe <= 0) ? "El importe de la transferencia no puede ser nulo o negativo" :
    cuenta1.saldo -= importe;
    cuenta2.saldo += importe;
}

var cuenta1 = new Cuenta("jandro", "129858", 15,12000);
var cuenta2 = new Cuenta("Pepe","123876875",12,14500);
var cuenta3 = new Cuenta("Perro","741322182", 17,850);

const Banco = [cuenta1, cuenta2, cuenta3];

