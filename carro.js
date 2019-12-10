"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.ligar = function () {
        console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " LIGOU");
        this.ligado = true;
    };
    Carro.prototype.desligar = function () {
        console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " DESLIGOU");
        this.ligado = false;
    };
    Carro.prototype.andar = function () {
        if (this.ligado) { //não precisa comparar == true aqui, pq é só se for true msm que entra na condicação
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " t\u00E1 andando...");
        }
        else {
            console.log("Ligue o carro primeiro.");
        }
    };
    Carro.prototype.parar = function () {
        if (this.ligado == true) {
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " acabou de parar.");
        }
        else {
            console.log("Ligue o carro primeiro.");
        }
    };
    Carro.prototype.getInfo = function () {
        var info;
        info = "CARRO: " + this.modelo + " / " + this.ano + " / " + this.placa + " / " + this.cor + " / " + this.ligado;
        return info;
    };
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (novaPlaca) {
        if (novaPlaca.indexOf("-") == 1) {
            var placaSeparada = novaPlaca.split("-");
            var nPlaca = void 0;
            if (placaSeparada[0].length == 3) {
                placaSeparada[0].toLocaleUpperCase;
            }
            nPlaca = parseInt(placaSeparada[1]);
            if (typeof nPlaca == "number") {
                novaPlaca = placaSeparada[0] + "-" + nPlaca;
            }
        }
        this.placa = novaPlaca;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (novaCor) {
        this.cor = novaCor;
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (novoModelo) {
        this.modelo = novoModelo;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (novoAno) {
        if (novoAno < 1930 || novoAno > 2020) {
            console.log("Informe um ano válido.");
        }
        else {
            this.ano = novoAno;
        }
    };
    return Carro;
}());
exports.Carro = Carro;
