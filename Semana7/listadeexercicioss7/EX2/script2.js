function trocou() {
    var prim = document.getElementById('pri').value;
    var segu = document.getElementById('seg').value;
   var myArray = [ prim, segu];
   myArray.reverse();
document.getElementById('vem').innerhtml += myArray;

}