"use strict";

//Traemos lo valores ingresasdos por el usuario en el DOM
const d = document;
let billtesDeCien = d.getElementById("de-cien-billete"),
    billetesDeCincuenta = d.getElementById("de-cincuenta-billete"),
    billtesDeVeinte = d.getElementById("de-veinte"),
    billetesDeDiez = d.getElementById("de-diez"),
    billetesDeCinco = d.getElementById("de-cinco"),
    billetesDeDos = d.getElementById("de-dos"),
    billetesDeUno = d.getElementById("de-uno"),
    monedasDeMil = d.getElementById("de-mil"),
    monedasDeQuinientos = d.getElementById("de-quinientos"),
    monedasDeDoscientos = d.getElementById("de-doscientos"),
    monedasDeCien = d.getElementById("de-cien-moneda"),
    monedasDeCincuenta = d.getElementById("de-cincuenta-moneda"),
    dineroEnCaja = d.getElementById("dinero-en-caja");


//Traemos los botones
const borrar = d.getElementById("borrar"),
    contarDinero = d.getElementById("calcular-total"),
    salir = d.getElementById("salir");

console.log(contarDinero);

console.log(billtesDeCien.value);

//Configuramos el boton de hacer el CONTEO
let valores = [];
function hacerConteo() {
    //Validacion para cuando se ingresa un valor negativo manual
    if (billtesDeCien.value < 0) {
        return alert("Has insertado valores negativos en los billetes de 100");
    }
    if (billetesDeCincuenta.value < 0) {
        return alert("Has insertado valores negativos en los billetes de 50");
    }
    if (billtesDeVeinte.value < 0) {
        return alert("Has insertado valores negativos en los billetes de 20");
    }
    if (billetesDeDiez.value < 0) {
        return alert("Has insertado valores negativos en los billetes de 10");
    }
    if (billetesDeCinco.value < 0) {
        return alert("Has insertado valores negativos en los billetes de 5");
    }
    if (billetesDeDos.value < 0) {
        return alert("Has insertado valores negativos en los billetes de 2");
    }
    if (billetesDeUno.value < 0) {
        return alert("Has insertado valores negativos en los billetes de 1");
    }
    if (monedasDeMil.value < 0) {
        return alert("Has insertado valores negativos en las monedas de mil");
    }
    if (monedasDeQuinientos.value < 0) {
        return alert("Has insertado valores negativos en las monedas de 500");
    }
    if (monedasDeDoscientos.value < 0) {
        return alert("Has insertado valores negativos en las monedas de 200");
    }
    if (monedasDeCien.value < 0) {
        return alert("Has insertado valores negativos en las monedas de 100");
    }
    if (monedasDeCincuenta.value < 0) {
        return alert("Has insertado valores negativos en las monedas de 50");
    }

    // Validacion cuando se ha insertado cantidad de billestes
    if (billtesDeCien.value > 0) {
        valores.push(billtesDeCien.value * 100000);
    }
    if (billetesDeCincuenta.value > 0) {
        valores.push(billetesDeCincuenta.value * 50000);
    }
    if (billtesDeVeinte.value > 0) {
        valores.push(billtesDeVeinte.value * 20000);
    }
    if (billetesDeDiez.value > 0) {
        valores.push(billetesDeDiez.value * 10000);
    }
    if (billetesDeCinco.value > 0) {
        valores.push(billetesDeCinco.value * 5000);
    }
    if (billetesDeDos.value > 0) {
        valores.push(billetesDeDos.value * 2000);
    }
    if (billetesDeUno.value > 0) {
        valores.push(billetesDeUno.value * 1000);
    }
    if (monedasDeMil.value > 0) {
        valores.push(monedasDeMil.value * 1000);
    }
    if (monedasDeQuinientos.value > 0) {
        valores.push(monedasDeQuinientos.value * 500);
    }
    if (monedasDeDoscientos.value > 0) {
        valores.push(monedasDeDoscientos.value * 200);
    }
    if (monedasDeCien.value > 0) {
        valores.push(monedasDeCien.value * 100);
    }
    if (monedasDeCincuenta.value > 0) {
        valores.push(monedasDeCincuenta.value * 50);
    }
    let total = valores.reduce((a, b) => a + b, 0);
    const formatterPeso = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    dineroEnCaja.textContent = formatterPeso.format(total);
    contarDinero.disabled = false;
    valores = [];
}


contarDinero.addEventListener("click", hacerConteo);

//Boton de borrar configurado
borrar.addEventListener("click", function () {
    billtesDeCien.value = "";
    billetesDeCincuenta.value = "";
    billtesDeVeinte.value = "";
    billetesDeDiez.value = "";
    billetesDeCinco.value = "";
    billetesDeDos.value = "";
    billetesDeUno.value = "";
    monedasDeMil.value = "";
    monedasDeQuinientos.value = "";
    monedasDeDoscientos.value = "";
    monedasDeCien.value = "";
    monedasDeCincuenta.value = "";
    dineroEnCaja.textContent = "$ 0";
    valores = [];
    contarDinero.disabled = false;
});

salir.addEventListener("click", function(){
    window.close();
});