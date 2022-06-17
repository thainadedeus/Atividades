function clicar() {
var numero = document.getElementById('numero').value;
document.getElementById('vem').innerHTML = "O número inserido é: " + numero ;

var div1 = numero / 10;
document.getElementById('vem').innerHTML += div1;
    if (div1 >= 10)
    parseInt(div1 / 10) += document.getElementById('vem').innerHTML;
  
}