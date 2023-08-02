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
    dineroEnCaja = d.getElementById("dinero-en-caja"),
    vales = d.getElementById('vales'),
    sistema = d.getElementById('sistema'),
    balance = d.getElementById('balance');


//Traemos los botones
const borrar = d.getElementById("borrar"),
    contarDinero = d.getElementById("calcular-total");

//console.log(contarDinero);

//console.log(billtesDeCien.value);


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
    });

    contarDinero.disabled = false;
    valores = [];
    //vales.value = formatterPeso.format(vales.value);
    const cajaClean = dineroEnCaja.textContent.split(/[$.]/).join('').trim();
    const valesClean = vales.value.split(/[$.]/).join('').trim();
    const sistemaClean = sistema.value.split(/[$.]/).join('').trim();
    const totalClean = total.toString().split(/[$.]/).join('').trim();

    let cuadre = (parseInt(valesClean) + parseInt(totalClean) - parseInt(sistemaClean));

    balance.textContent = cuadre;
    if(cuadre < 0) {
        balance.style.color = 'red';
    } else {
        balance.style.color = 'yellow';
    }
    let balanceClean = balance.textContent.split(/[$.]/).join('').trim();

    dineroEnCaja.textContent = formatterPeso.format(total);
    vales.value = formatterPeso.format(valesClean)
    sistema.value = formatterPeso.format(sistemaClean);
    balance.textContent = formatterPeso.format(balanceClean);
    //console.log(valesClean);
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
    dineroEnCaja.textContent = "0";
    balance.textContent = "0";
    vales.value = "0";
    sistema.value = "0";
    valores = [];
    contarDinero.disabled = false;
});

function validarInput(event) {
    const input = event.target;
    const valor = input.value;

    // Reemplazamos cualquier caracter no numérico por una cadena vacía.
    input.value = valor.replace(/\D/g, '');
}
