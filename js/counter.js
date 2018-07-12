"use strict";
var nbr = 0;
var inpctrl = document.getElementById("nbr");
function display(nbr) {
    var inputCtrl = document.getElementById("nbr");
    inputCtrl.value = nbr;
}
function change(amt) {
    nbr += amt;
    display(nbr);
}
function loaded() {
    display(nbr);
}
