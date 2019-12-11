"use strict";
exports.__esModule = true;
var Produto = /** @class */ (function () {
    function Produto(_cod, _nom, _det, _pre, _est, _link) {
        this._codigo = _cod;
        this._nome = _nom;
        this._detalhes = _det;
        this._preco = _pre;
        this._estoque = _est;
        this._linkFoto = _link;
    }
    Produto.prototype.getCodigo = function () {
        return this._codigo;
    };
    Produto.prototype.setCodigo = function (_cod) {
        this._codigo = _cod;
    };
    Produto.prototype.getNome = function () {
        return this._nome;
    };
    Produto.prototype.setNome = function (_nom) {
        this._nome = _nom;
    };
    Produto.prototype.getDetalhes = function () {
        return this._detalhes;
    };
    Produto.prototype.setDetalhes = function (_det) {
        this._detalhes = _det;
    };
    Produto.prototype.getPreco = function () {
        return this._preco;
    };
    Produto.prototype.setPreco = function (_pre) {
        this._preco = _pre;
    };
    Produto.prototype.getEstoque = function () {
        return this._estoque;
    };
    Produto.prototype.setEstoque = function (_est) {
        this._estoque = _est;
    };
    Produto.prototype.getLinkFoto = function () {
        return this._linkFoto;
    };
    Produto.prototype.setLinkFoto = function (_link) {
        this._linkFoto = _link;
    };
    Produto.prototype.getInfo = function () {
        this.info = "PRODUTO: " + this._codigo + " / " + this._nome + " / " + this._detalhes + " / " + this._preco + " / " + this._estoque + " / " + this._linkFoto;
        return this.info;
    };
    return Produto;
}());
exports.Produto = Produto;
