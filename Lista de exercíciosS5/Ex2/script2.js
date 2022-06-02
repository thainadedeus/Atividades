function opera() {
    var produto = document.getElementById('produto').value;
    var preco = document.getElementById('preco').value;
    var nota100,nota50;
    var nota100 = parseInt(document.getElementById('preco').value / 100);
    document.getElementById('chama').innerHTML += nota100 + "notas de 100<br>";

    var resto100 = parseInt(document.getElementById('preco').value % 100);
    console.log(resto100);
    if(parseInt(resto100 / 50 )>=50)
    var nota50 = parseInt(resto100 / 50 );
    document.getElementById('chama').innerHTML += nota50;
}
