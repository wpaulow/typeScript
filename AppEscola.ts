import { Pessoa } from "./Pessoa";
import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

var p:Pessoa;

p = new Pessoa();
p.setNumRegistro(1234);
p.setNome("Genereites de Albuquerque Lima Filho Jr");
p.setEmail("gene@generates.com.br");
p.setTelefone("+55 11 98765-4321");
console.log(p);

var a: Aluno;
a = new Aluno();
a.setNumRegistro(1235);
a.setNome("Isidro de Almeida Botelho");
a.setEmail("isi@isidrocorp.com");
a.setTelefone("+55 11 12345-6789");
a.setCurso("Java Full Stack Galaxy Master");
a.setAnoMatricula(2019);
console.log(a);

var prof: Professor;
prof = new Professor();
prof.setNumRegistro(9874);
prof.setNome("Isidro");
prof.setEmail("isi@isidrocorp.com");
prof.setTelefone("+55 11 98745-4321");
prof.setValorHora(100);
prof.setNumHoras(200);
prof.setAreaFormacao("Ciência da Computação");
console.log(prof);
