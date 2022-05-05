//comentário em js
function ex1(){
//criando uma mensagem de aviso com alert
alert('SOS');

var v0 = document.getElementById('v0').value;
const g = 10; //aceleração gravitacional 10m/s^2
var h = v0*v0 / (2 * g)

tSubida = v0/g;

document.getElementById('vem').innerHTML = "TEMPO DE SUBIDA = " + tSubida;
document.getElementById('vem').innerHTML += "<br>Altura máxima = " + h + "m";
  
}