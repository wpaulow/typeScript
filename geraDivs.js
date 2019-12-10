function geraDivs() {
    var itens = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        itens[_i] = arguments[_i];
    }
    for (var i = 0; i < itens.length; i++) {
        console.log("<div id=\"div" + (i + 1) + "\">" + itens[i] + "</div>");
    }
}
geraDivs("ofhasio", "iofjspaiofj", "ifjpiojfe", "iojwpff");
