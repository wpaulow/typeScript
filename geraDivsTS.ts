//function addDivs ('valorA' , 'valorB', 'valorC', 'valorD', 'valorE');

var div : number = 0;
var result : string;
function addDivs (... parametros : string []) : void {
    for (let i = 0; i < parametros.length; i++){
        div++;

        console.log(`<div id="div"` + div + `">${parametros[i-1]}</div>`);

        /*var tarefaDOM = document.createElement("div");
        tarefaDOM.setAttribute("id","div"+div);
        tarefaDOM.innerHTML = parametros[i-1];
    
        document.getElementById("resultado").appendChild(tarefaDOM);*/
    }
}

