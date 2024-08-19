const textArea = document.querySelector(".text-area" );
const mensaje = document.querySelector(".mensaje" );
const img = document.getElementById('imagen');
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptador(){
    const textoEncriptado = encriptador(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    img.style.display = "none"
}

function encriptador(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}
function btndesencriptador(){
    const textodesencriptador = desencriptador(textArea.value)
    mensaje.value = textodesencriptador
    textArea.value = "";

   
}

function desencriptador(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return stringDesencriptada
    
}
function copiarTexto() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); 
    document.execCommand('copy');
    
}

// function actualizarImagen() {

//     img.style.display = "block"
//    var imagen = document.getElementById('imagen');
   
// }

