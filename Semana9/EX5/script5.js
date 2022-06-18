function clicar(){
  var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
  var soma = []
  
  
   for(cont = n1; cont < n2; cont++){
    soma += cont ;
    document.getElementById('tela').innerHTML = " O intervalo é: " + soma; }
   }