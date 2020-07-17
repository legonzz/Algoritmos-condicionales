//EJERCICIO 3.2

//Realice un algoritmo para determinar el sueldo semanal de un trabajador
//con base en las horas trabajadas y el pago por hora, considerando
//que después de las 40 horas cada hora se considera como
//excedente y se paga el doble. Construya el diagrama de flujo, el
//pseudocódigo y el diagrama N/S.

let horas = +prompt("¿Cuántas horas trabajo esta semana?");
let pagoHora = +prompt("Indicar su sueldo por hora")
let sueldo = 0;

if (horas <= 40){
    sueldo = pagoHora * horas;
    console.log(`Su sueldo es de: ${(pagoHora * horas) }`);
} else{
    console.log(`Su sueldo más las horas extras es de: ${ pagoHora * horas + 2 *(horas - 40)}`);
}
//////////////////////////

if (alcohol>0 && edad >= 40 ){
    console.log(`Recargo por tomar alcohol: ${recargoalcohol = 1200 * 5/100}`);
    console.log(`Recargo por edad :${1200 * 20/100 + planA}`);
}else{
    console.log(`No bebe`);
    console.log(`Recargo por vivir: ${1200 * 10/100 + (planA)}`);
}
//////////////////////
if (poliza >= 1200){
    console.log(`Recargo por tomar alcohol: ${alcohol=1200 * 5/100}`);
    console.log(`Recargo por usar lentes: ${lentes = 1200 * 5/100}`);
    console.log(`Recargo por enfermedad: ${enfermedad = 1200 * 5/100 }`);
    console.log(`Recargo por edad ${edad = 1200 *20/100}`);
    console.log(`Precio Total: ${lentes + alcohol + enfermedad + edad + planA}`);
} else{
    console.log(`Precio Total más impuesto a la vida: ${1200 *10/100 + (planA)}`);
    console.log(`Recargo por`);
}

