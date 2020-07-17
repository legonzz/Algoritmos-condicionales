let paquete = +prompt(`Escoja paquete de preferencia:
1 = Paquete (A) premium
2 = Paquete (B) gold
3 = Paquete (C) silver
4 = Paquete (D) standard`);

switch (paquete) {
  case 1:
    console.log("Usted escogió el paquete A");
    break;
  case 2:
    console.log("Usted escogió el paquete B");
    break;
  case 3:
    console.log("Usted escogió el paquete C");
    break;
  case 4:
    console.log("Usted escogió el paquete D");
    break;
}

if (paquete == 1 || paquete == 2 || paquete == 3 || paquete == 4) {
  let dinero = +prompt("Ingrese monto a pagar");
  if (dinero > 50000) {
    console.log(`Usted puede realizar la compra`);
  } else if (paquete == 2 || paquete == 3 || paquete == 4) {
    if (dinero >= 20000) {
      console.log(`Usted puede realizar la compra`);
    } else if (paquete == 3 || paquete == 4) {
      if (dinero > 10000) {
        console.log(`Usted puede realizar la compra`);
      } else if (paquete || 4) {
        if (dinero > 1000) {
          console.log(`Usted puede realizar la compra`);
        } else {
          console.log(
            `Usted no dispone de dinero suficiente, escoja otro paquete`
          );
        }
      } else {
        console.log(
          `Usted no dispone de dinero suficiente, escoja otro paquete`
        );
      }
    } else {
      console.log(`Usted no dispone de dinero suficiente, escoja otro paquete`);
    }
  } else {
    console.log(`Usted no dispone de dinero suficiente, escoja otro paquete`);
  }
} else {
  console.log(`Usted no dispone de dinero suficiente, escoja otro paquete`);
}
