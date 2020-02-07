/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var divi;
    var divis;
    var division;
    
    div= document.getElementById("numeroDividendo").value;
    divis= document.getElementById("numeroDivisor").value;

    division= parseInt(divi) / parseInt(divis);
    alert ("su suma es: " + division)

}
