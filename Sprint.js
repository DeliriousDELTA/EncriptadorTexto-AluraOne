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
    var MSG = document.getElementById('textoEncriptar').value;
    MSG = MSG.replaceAll('a','ai');
    MSG = MSG.replaceAll('e','enter');
    MSG = MSG.replaceAll('i','imes');
    MSG = MSG.replaceAll('o','ober');
    MSG = MSG.replaceAll('u','ufat');
    document.getElementById("texto-output").innerHTML = MSG;
}

function DesencriptarTxt(){
    
    var MSG = document.getElementById('textoDesencriptar').value;
    MSG = MSG.replaceAll('ai','a');
    MSG = MSG.replaceAll('enter','e');
    MSG = MSG.replaceAll('imes','i');
    MSG = MSG.replaceAll('ober','o');
    MSG = MSG.replaceAll('ufat','u');
    document.getElementById("textOut").innerHTML = MSG;
}
