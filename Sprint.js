/*  a = ai
    e = enter
    i = imes
    o = ober
    u = ufat

    solo letras minusculas
    sin caracteres especiales
    debe ser ida y vuelta 
    El usuario debe de escoger si
*/

function EncriptarTxt(){
    var MSG = document.getElementById('texto').value;
    MSG = MSG.replaceAll('a','ai');
    MSG = MSG.replaceAll('e','enter');
    MSG = MSG.replaceAll('i','imes');
    MSG = MSG.replaceAll('o','ober');
    MSG = MSG.replaceAll('u','ufat');
    document.getElementById("textOut").innerHTML = MSG;
}

function DesencriptarTxt(){
    
			// Obtener el valor del input
			var textoInput = document.getElementById("texto-input").value;

			// Modificar el texto con HTML
			var textoModificado = "<b>" + textoInput + "</b>";

			// Mostrar el texto modificado
			document.getElementById("texto-output").innerHTML = textoModificado;

}
