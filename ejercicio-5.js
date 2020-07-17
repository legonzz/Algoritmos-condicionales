let antiguedad = +prompt("¿Cuántos años lleva trabajando con nosotros?");
let sueldo = +prompt("Cuánto gana mensualmente?");
let bonoTiempo;
let bonoSueldo;

if(antiguedad > 2 && antiguedad < 5){
    bonoTiempo = sueldo * 20/100;
    /* console.log(`El bono que corresponde es de: ${sueldo * 20/100}`); */
} else{
    bonoTiempo = sueldo * 30/100;
    /* console.log(`El bono que corresponde es de: ${sueldo * 30/100}`); */
}

if(sueldo < 1000){
    bonoSueldo = sueldo * 25/100;
    /* console.log(`El bono que corresponde es de: ${sueldo * 25/100}`); */
} else if(sueldo > 1000 && sueldo < 3500){
    bonoSueldo = sueldo *15/100
    /* console.log(`El bono que corresponde es de: ${sueldo * 15/100}`); */
} else if(sueldo > 3500){
    bonoSueldo = sueldo * 10/100;
    /* console.log(`El bono que corresponde es de: ${sueldo * 10/100}`); */
}

if(bonoTiempo > bonoSueldo){
    console.log(`El bono mensual que le corresponde es: ${bonoTiempo}`);
} else {
    console.log(`El bono mensual que le corresponde es: ${bonoSueldo}`);
}





