/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var pri;
    var seg;
    var suma;
    
    pri= document.getElementById("numeroUno").value;
    seg= document.getElementById("numeroDos").value;

    suma= parseInt(pri) + parseInt(seg);
    alert ("su suma es: " + suma)

}

function restar()
{
    
    var ter;
    var cuar;
    var resta;
    
    ter= document.getElementById("numeroUno").value;
    cuar= document.getElementById("numeroDos").value;

    resta= parseInt(ter) - parseInt(cuar);
    alert ("su suma es: " + resta)


}

function multiplicar()
{ 

    
}

function dividir()
{
    
    
}

