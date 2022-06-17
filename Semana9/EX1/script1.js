function clicar() {
    var number = document.getElementById('tres').value;
    if(number % 2 === 0)
        document.getElementById('vem').innerHTML = "O número é par"; else if (number % 2 != 0)
    document.getElementById('vem').innerHTML = "O número é ímpar";
}