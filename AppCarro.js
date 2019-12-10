"use strict";
exports.__esModule = true;
var teclado = require("readline-sync");
var carro_1 = require("./carro");
var c1 = new carro_1.Carro(); //declarada a referência e construído o objeto;
var ano = teclado.question("Ano? ");
var placa = teclado.question("Placa?");
c1.setCor("Preto");
c1.setModelo("Gol Quadrado");
c1.setPlaca(placa);
while (ano < 1930 || ano > 2020) {
    ano = teclado.question("Ano?");
}
c1.setAno(ano);
c1.ligar();
c1.andar();
c1.parar();
c1.desligar();
console.log(c1.getInfo());
console.log(c1.getPlaca());
console.log(c1.getCor());
console.log(c1.getModelo());
console.log(c1.getAno());
