function opera() {
    var produto = document.getElementById('produto').value;
    var preco = document.getElementById('preco').value;
    var nota100 = parseInt(document.getElementById('preco').value / 100);
    document.getElementById('chama').innerHTML += nota100;

    var resto100 = parseInt(document.getElementById('preco').value % 100);
    var nota50 = parseInt(resto100 / 50 );
    document.getElementById('chama').innerHTML += nota50;
}
