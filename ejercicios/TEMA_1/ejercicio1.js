const alumnos = [{ nombre: "Ana", nota: 8.5 },
{ nombre: "Carlos", nota: 4.2 },
{ nombre: "Laura", nota: 9.1 },
{ nombre: "Pedro", nota: 6.7 },
{ nombre: "Marta", nota: 3.8 }];

//Mostrar todos los alumnos.
console.log("---ALUMNOS---")
alumnos.forEach(alumnos => { console.log(alumnos.nombre); })

//Obtener únicamente los aprobados.
console.log("---APROBADOS---");
const aprobados = alumnos.filter(alumnos => alumnos.nota >= 5);
aprobados.forEach(aprobados => { console.log(aprobados.nombre) });

//Obtener únicamente los suspensos.
console.log("---SUSPENSOS---");
const suspensos = alumnos.filter(alumnos => alumnos.nota < 5);
suspensos.forEach(suspensos => { console.log(suspensos.nombre) })
//Calcular la nota media.
const sumaNotas = alumnos.reduce((acumulador, alumno) => {
    return acumulador + alumno.nota;
}, 0);

const media = sumaNotas / alumnos.length;

console.log("---MEDIA---");
console.log(media.toFixed(2));
//Encontrar al alumno con mayor nota.
const notaMax = alumnos.reduce((maxima, alumno)=>{
    if(alumno.nota > maxima.nota){
        return alumno;
    } else{
        return maxima;
    }
});

console.log(notaMax);
//Encontrar al alumno con menor nota.
//Crear un nuevo array con solo los nombres.
//Mostrar cuántos alumnos han aprobado.