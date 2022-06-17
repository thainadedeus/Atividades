function clicar() {
var numero = document.getElementById('numero').value;
document.getElementById('vem').innerHTML = "O número inserido é: " + numero + " " ;

var div1 = parseInt(numero / 10);
var resto1 = numero % 10;
document.getElementById('primeiradiv').innerHTML = "O seu número inserido dividido por 10: " + div1 + " Com resto " + " " + resto1;

var div2 = parseInt(div1 / 10);
if (div2 < 0 && div2 == 0) {
    document.getElementById('segundadiv').innerHTML = "Não é possível dividir novamente";
} else {
var resto2 = div1 % 10;
document.getElementById('segundadiv').innerHTML = "O seu número inserido dividido por 10 (1): " + div2 + " Com resto: " + " " + resto2;
}
var div3 =  parseInt(div2 / 10);
if (div3 < 0 && div3 == 0) {
    document.getElementById('terceiradiv').innerHTML = "Não é possível dividir novamente";
} else {
var resto3 = div2 % 10;
document.getElementById('terceiradiv').innerHTML = "O seu número inserido dividido por 10 (2): " + div3 + " Com resto: " + " " + resto3;
}
document.getElementById('resultado').innerHTML = "soma dos dígitos " + eval(resto1 + resto2 + resto3)
} 
// else {
    // document.getElementById('primeiradiv').innerHTML = "Não é possivel dividir novamente"}





