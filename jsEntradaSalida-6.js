/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var uno
var dos
var suma

uno= document.getElementById("numerUno");
dos= document.getElementById("numeroDos");

suma= parseInt(uno) + parseInt(dos);

alert ("el resultado es: " + suma)

}

