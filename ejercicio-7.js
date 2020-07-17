let tiempo = +prompt("Ingresar años trabajando con nosotros");
let bono = 0;


console.log(`Cantidad de tiempo trabajando = ${1}`);
console.log(`Cantidad recibida por el bono de tiempo = ${100}`);


if (tiempo <= 5) {
    bono = tiempo * 100;
} else if(tiempo > 5){
    bono = 1000;
}
console.log(`Usted recibirá un bono de ${bono} por ${tiempo} años de trabajo`);


