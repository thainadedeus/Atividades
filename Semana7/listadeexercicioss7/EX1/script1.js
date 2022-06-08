
    function soma() {
    var dado = document.getElementById('quantidade').value;
    var result = parseInt(dado) + parseInt(1) ;

    document.getElementById('vem').innerHTML=  result; 
}

    function tira() {
    var dado = document.getElementById('quantidade').value;
    var menos =  parseInt(dado) - parseInt(1) 
    document.getElementById('vem').innerHTML +=  menos ;
}