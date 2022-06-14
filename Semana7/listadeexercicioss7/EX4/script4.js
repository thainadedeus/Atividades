function vai(){
    var peoples = document.getElementById('quantidade').value;
    var hora = document.getElementById ('hora').value;
    var porcento = (200 - (200 * 0.4 ));
    var porcento2 = (100-(100 * 0.2));

    if(peoples <= 50 && hora=='Diurno'){ 
    document.getElementById('vem').innerHTML = "200 por pessoas:"+ peoples * 200;
    } else if(peoples >= 50 && hora=='Diurno') {
        document.getElementById('vem').innerHTML=" Passagem por pessoa  " + porcento + "" + " Valor total: " + porcento*peoples;

    }
    if(peoples <= 50 && hora=='Noturno'){ 
        document.getElementById('vem').innerHTML = "100 por pessoas:"+ peoples * 100;
    } else if(peoples >= 50 && hora=='Noturno') {
        document.getElementById('vem').innerHTML=" Passagem por pessoa  " + porcento2 + "" + " Valor total: " + porcento2*peoples;}
}