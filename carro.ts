export class Carro {
    private placa : string;
    private cor : string;
    private modelo : string;
    private ano : number;
    private ligado : boolean;

    public ligar() : void {
        console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} LIGOU`);
        this.ligado = true;
    }

    public desligar() : void {
        console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} DESLIGOU`);
        this.ligado = false;
    }
    
    public andar() : void {
        if(this.ligado){ //não precisa comparar == true aqui, pq é só se for true msm que entra na condicação
            console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} tá andando...`);
        } else {
            console.log(`Ligue o carro primeiro.`);
        }
    }

    public parar() : void {
        if(this.ligado == true) {
            console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} acabou de parar.`);
        } else {
            console.log(`Ligue o carro primeiro.`);
        }
    }

    public getInfo(): string {
        var info: string;
        info = `CARRO: ${this.modelo} / ${this.ano} / ${this.placa} / ${this.cor} / ${this.ligado}`;
        return info;
    }

    public getPlaca():string {
        return this.placa;
    }

    public setPlaca(novaPlaca: string): void {
        if (novaPlaca.indexOf("-") == 3 ){
            let placaSeparada = novaPlaca.split("-"); //placaSeparada vira array graças ao split
            let nPlaca : number;

            if(placaSeparada[0].length == 3) {
                placaSeparada[0].toUpperCase();
            }
            nPlaca = parseInt(placaSeparada[1]);
             
            if(typeof nPlaca == "number") {
                novaPlaca = placaSeparada[0] + "-" + nPlaca;
            }
        } else if (novaPlaca.indexOf("-") == -1) {
            let strPlaca : string = novaPlaca.substring(0,3);
            let numPlaca : string = novaPlaca.substring(3,7);
            novaPlaca = strPlaca.toUpperCase() + "-" + numPlaca;
        }
        
        this.placa = novaPlaca;
    }
    
    public getCor():string {
        return this.cor;
    }

    public setCor(novaCor: string): void {
        this.cor = novaCor;
    }

    public getModelo():string {
        return this.modelo;
    }

    public setModelo(novoModelo: string): void {
        this.modelo = novoModelo;
    }

    public getAno():number {
        return this.ano;
    }

    public setAno(novoAno: number): void {
        if(novoAno < 1930 || novoAno > 2020){
            console.log("Informe um ano válido.");
        }else {
            this.ano = novoAno;
        }
    }
}

