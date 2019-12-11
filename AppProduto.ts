import {Produto} from "./Produto";

var p1 : Produto = new Produto(1, "bola", "bola", 20.00, 30, "https://images-americanas.b2w.io/produtos/01/00/oferta/59453/0/59453009_1GG.jpg");

var p2 : Produto = new Produto(2, "pão", "pão francês", 0.90, 1000, "https://massamadreblog.com.br/wp-content/uploads/2018/04/160790-tudo-que-voce-precisa-saber-sobre-pao-frances.jpg");

console.log(p1.getInfo());
console.log("");
console.log(p2); // só assim gera um .json das informações

