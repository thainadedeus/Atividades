function clicar() {
    var palavra1 = document.getElementById('texto1').value;
    var palavra2 = document.getElementById('texto2').value;
    var palavra3 = document.getElementById('texto3').value;
    var palavras =  [palavra1, palavra2, palavra3];
    palavras.sort (); 

    document.getElementById('tela').innerHTML = "As palavras inseridas são: " + palavra1 + ", " + palavra2 + ", " + palavra3;
    document.getElementById('tela2').innerHTML = "As palavras inseridas são em ordem alfabética: " + palavras;
}