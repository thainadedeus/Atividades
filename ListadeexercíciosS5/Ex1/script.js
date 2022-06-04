function operacao() {
    var primeiro  = document.getElementById('primeiro').value;
    var segundo   = document.getElementById('segundo').value;
    var operacoes = document.getElementById('operacoes').value;
    var tipo      = ['+', '-','*', '/', '//','%'];
    var resultado =  primeiro + tipo[operacoes] + segundo;

    
    document.getElementById('tela').innerHTML = "Operação realizada = " + eval(resultado);
 

}
