import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa{
    
    private valorHora: number;
    private numHoras: number;
    private areaFormacao : string;

    public setValorHora(_valorHora: number): void{
        this.valorHora = _valorHora;
    }
    public getCurso(): number{
        return this.valorHora;
    }
    public setNumHoras(_numHoras : number): void{
        this.numHoras = _numHoras;
    }
    public getNumHoras(): number{
        return this.numHoras;
    }
    public setAreaFormacao(_areaFormacao : string): void{
        this.areaFormacao = _areaFormacao;
    }
    public getAreaFormacao(): string{
        return this.areaFormacao;
    }

}