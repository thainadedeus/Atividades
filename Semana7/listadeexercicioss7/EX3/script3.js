
    document.getElementById("form1").onsubmit = function() {
        let fone = document.getElementById('form1').elements;
         document.getElementById('resultado').innerHTML =  "O número do telefone é: " + fone['tel'].value;
        return false;
        
 }
 