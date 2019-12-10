function geraDivs(... itens: string[]): void {
    for (let i = 0; i < itens.length; i++) {
        console.log(`<div id="div${i+1}">${itens[i]}</div>`);
    }
}

geraDivs("ofhasio", "iofjspaiofj", "ifjpiojfe" , "iojwpff");