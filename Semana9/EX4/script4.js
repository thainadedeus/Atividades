function clique() {
    var n = parseInt(document.getElementById('N').value);
    var t1 = 1;
    var t2 = 1;
    for(cont=1;cont<=n; cont++){
        if(cont == 1 || cont == 2){
        document.getElementById('tela').innerHTML =  "O número correspondente na sequeência de Fibonacci é: " + " " + "1";
    }else{
        tn= eval(t1+t2);
        document.getElementById('tela').innerHTML= "O número correspondente na sequência de Fibonacci é: " + " " + tn;

        t1=t2;
        t2=tn;

    }
}
}