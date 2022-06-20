var hor = 9;
var min = 59;
var seg = 50;
var interval;
var disparo = false;

function iniciar() {
    if (disparo == false) {
        relogio();
        interval = setInterval(relogio, 1000);
    }

    disparo = true;
}
function parar() {
    if (hor == 10) {
        zerar();
    }
    clearInterval(interval);
    disparo = false;
}
function zerar() {
    clearInterval(interval);
    seg = 0;
    min = 0;
    hor = 0;
    document.getElementById('relogio').innerText = '00:00:00';
    disparo = false;
}
function relogio() {
    seg++;
    if (seg >= 59) {
        min++;
        seg = 0;
        if (min >= 59) {
            hor++;
            min = 0;
            if (hor >= 10) {


                clearInterval(interval);

            }

        }
    }
    document.getElementById('relogio').innerText = doisDigitos(hor) + ":" + doisDigitos(min) + ":" + doisDigitos(seg);
}
function doisDigitos(digit) {
    if (digit < 10) {
        return '0' + digit;
    } else {
        return digit;
    }
}