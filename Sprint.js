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
    for(i=0;i==MSG.length;i++){
        if (MSG[i]=="a"){
            MSG[i]="ai"
        }else
        if (MSG[i]=="e"){
            MSG[i]="enter"
        }else
        if (MSG[i]=="i"){
            MSG[i]="imes"
        }else
        if (MSG[i]=="o"){
            MSG[i]="ober"
        }else
        if (MSG[i]=="u"){
            MSG[i]="ufat"
        }
    }
    document.getElementById("textOut").innerHTML = MSG
}

function DesencriptarTxt(){
    
			// Obtener el valor del input
			var textoInput = document.getElementById("texto-input").value;

			// Modificar el texto con HTML
			var textoModificado = "<b>" + textoInput + "</b>";

			// Mostrar el texto modificado
			document.getElementById("texto-output").innerHTML = textoModificado;

}
