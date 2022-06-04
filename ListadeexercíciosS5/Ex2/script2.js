function opera() {
    var produto = document.getElementById('produto').value;
    var preco = document.getElementById('preco').value;
    var nota100 = parseInt(document.getElementById('preco').value / 100);
    document.getElementById('chama').innerHTML += nota100 + "notas de 100";
    var resto100 = parseInt(document.getElementById('preco').value % 100);
    if (resto100>=50){
    var nota50 = parseInt(resto100 / 50 );
    document.getElementById('chama').innerHTML += nota50 + "notas de 50";} 
    else {
    document.getElementById('chama').innerHTML += "Não é possível liberar mais notas de 50";}
    var resto50 = (parseInt(resto100 / 50 ).value % 50);
    if (resto50>=20){
    var nota20 = parseInt(resto50 / 20);
    document.getElementById('chama').innerHTML += nota20 + "notas de 20";} else {
        document.getElementById('chama').innerHTML += " Não é possível liberar mais notas de 20";}
        var resto20 = (parseInt(resto50 / 20 ).value % 20);
    if(resto20>= 10){
        var nota10 = parseInt(resto20/10);
        document.getElementById('chama').innerHTML += nota10 + "notas de 10";
    } else {
    document.getElementById('chama').innerHTML += " Não é possível liberar mais notas de 10";}
}
