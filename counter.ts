let nbr: number = 0;

let inpctrl= document.getElementById("nbr") as HTMLInputElement;

function display(nbr) {
    let inputCtrl = document.getElementById("nbr");
    inputCtrl.value = nbr;
}

function change(amt: number): void {
    nbr += amt;
    display(nbr);
}

function loaded(): void {
    display(nbr);
}

