export class Produto {

    private _codigo: number;

    private _nome: string;

    private _detalhes: string;

    private _preco: number;

    private _estoque: number;

    private _linkFoto: string;

    private info : string;


    public constructor(_cod: number, _nom: string, _det: string, _pre: number, _est: number, _link: string) {
        this._codigo = _cod;
        this._nome = _nom;
        this._detalhes = _det;
        this._preco = _pre;
        this._estoque = _est;
        this._linkFoto = _link;
    }

    public getCodigo(): number {
        return this._codigo;
    }
    public setCodigo(_cod: number) {
        this._codigo = _cod;
    }

    public getNome(): string {
        return this._nome;
    }
    public setNome(_nom: string) {
        this._nome = _nom;
    }

    public getDetalhes(): string {
        return this._detalhes;
    }
    public setDetalhes(_det: string) {
        this._detalhes = _det;
    }

    public getPreco(): number {
        return this._preco;
    }
    public setPreco(_pre: number) {
        this._preco = _pre;
    }

    public getEstoque(): number {
        return this._estoque;
    }
    public setEstoque(_est: number) {
        this._estoque = _est;
    }

    public getLinkFoto(): string {
        return this._linkFoto;
    }
    public setLinkFoto(_link: string) {
        this._linkFoto = _link;
    }
    
    public getInfo(): string {
        this.info = `PRODUTO: ${this._codigo} / ${this._nome} / ${this._detalhes} / ${this._preco} / ${this._estoque} / ${this._linkFoto}`;
        return this.info;
    }

}