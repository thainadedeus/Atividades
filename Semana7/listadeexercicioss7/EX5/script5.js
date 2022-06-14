function adicionar() {
    var nome= document.getElementById('nome').value;
    var nota = document.getElementById('nota').value;
    var nota2 = document.getElementById('nota2').value;

    document.getElementById('vem').innerHTML += nome + " " + nota + " " + nota2 + " ";

    var media = (2*nota + 3*nota2) / 5
    document.getElementById('vem').innerHTML += " A média foi: " + media + " ";

    
}