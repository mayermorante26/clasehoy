/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var suel;
    var resul;
    var porc
    porc= 1.10;
  

    suel= document.getElementById("sueldo").value;
    resul= document.getElementById("resultado").value;

     resul= parseInt(suel) * porc;

    document.getElementById("resultado").value= resul;

    




	
}
