//function addDivs ('valorA' , 'valorB', 'valorC', 'valorD', 'valorE');
var div = 0;
var result;
function addDivs() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    for (var i = 0; i < parametros.length; i++) {
        div++;
        console.log("<div id=\"div\"" + div + ("\">" + parametros[i - 1] + "</div>"));
        /*var tarefaDOM = document.createElement("div");
        tarefaDOM.setAttribute("id","div"+div);
        tarefaDOM.innerHTML = parametros[i-1];
    
        document.getElementById("resultado").appendChild(tarefaDOM);*/
    }
}
