"use strict";
var dias = 0;
var horas = 23;
var minutos = 59;
var segundos = 57;
function cronometro() {
    document.querySelector("#box-dias").innerHTML = dias.toString();
    document.querySelector("#box-horas").innerHTML = horas.toString();
    document.querySelector("#box-minutos").innerHTML = minutos.toString();
    document.querySelector("#box-segundos").innerHTML = segundos.toString();
    if (segundos >= 59) {
        segundos = -1;
        if (minutos >= 59) {
            minutos = -1;
            if (horas >= 23) {
                horas = -1;
                dias++;
            }
            horas++;
            //console.log("h: " + horas);
        }
        minutos++;
        //console.log("m: " + minutos);
    }
    //console.log("s: " + segundos);
    segundos++;
}
window.onload = function () {
    setInterval(cronometro, 1000);
};
