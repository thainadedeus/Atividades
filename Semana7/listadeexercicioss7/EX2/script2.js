function trocou() {
    var prim = document.getElementById('pri').value;
    var segu = document.getElementById('seg').value;
    document.getElementById('pri').value = segu;
    document.getElementById('seg').value = prim;
   var myArray = [ prim, segu];
   myArray.reverse();
document.getElementById('vem').innerhtml += myArray;

}