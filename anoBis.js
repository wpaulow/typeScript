//checaAno(2012);
function checaAno(ano) {
    var biSex = false;
    if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
        biSex = true;
    }
    else {
        biSex = false;
    }
    return biSex;
}
mostra(checaAno(2012));
function mostra(boolBiSex) {
    if (boolBiSex == true) {
        console.log("Ano bissexto");
    }
    else {
        console.log("Ano não bissexto");
    }
}
