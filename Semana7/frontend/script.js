//comentário em js
function linha(){
//$('vem').html("Acrescentar");
document.getElementById('vem').innerHTML += document.getElementById('texto').value;
}
function TestGET(){
    var url = "https://jsonplaceholder.typicode.com/todos/1";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    $(getResDiv).append("<br />" + xhttp.responseText);
    $(getResDiv).append("<br />" + xhttp.responseText.title);
    //console.log(xhttp.responseText);
}