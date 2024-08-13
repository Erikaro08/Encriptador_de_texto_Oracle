document.addEventListener("DOMContentLoaded", function () {

    const texto = document.querySelector(".text-area");
    const respuesta = document.querySelector(".mensaje");
    const btnCopiar = document.querySelector(".btn-copiar");
    const img = document.querySelector('.imagen');
    const parrafo = document.querySelector(".contenedor-parrafo")

    function btnEncriptar(){
        const textoEncriptado = encriptar(texto.value);
        respuesta.value = textoEncriptado;
        texto.value = "";
        /*respuesta.style.backgroundImage = "none";*/
        mostrarResultado();
    }

    function encriptar(stringEncriptada){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i=0; i<matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }
        }
        return stringEncriptada;
    }

    function btnDesencriptar(){
        const textoEncriptado = desencriptar(texto.value)
        respuesta.value = textoEncriptado;
        texto.value = "";
        mostrarResultado();
    }

    function desencriptar(stringDesencriptar){
        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptar = stringDesencriptar.toLowerCase();

        for(let i=0; i<matrizCodigo.length; i++){
            if(stringDesencriptar.includes(matrizCodigo[i][1])){
                stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }
        }
        return stringDesencriptar;
    }

    function mostrarResultado() {
        respuesta.style.display = 'block';
        btnCopiar.style.display = 'block';
        img.style.display='none';
        parrafo.style.display = 'none';
        autoResize(respuesta);
    }

    function autoResize(textarea) {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
    }

    function copiarText() {
        let contenedorTexto = document.querySelector('.mensaje');
        let botonCopiar = document.querySelector('.btn-copiar');

        navigator.clipboard.writeText(contenedorTexto.value).then(() => {
            botonCopiar.textContent = 'Copiado';
            setTimeout(() => botonCopiar.textContent = 'Copiar', 1000); 
        })
    }

document.querySelector("button[onclick='btnEncriptar()']").addEventListener("click", btnEncriptar);
document.querySelector("button[onclick='btnDesencriptar()']").addEventListener("click", btnDesencriptar);
document.querySelector(".btn-copiar").addEventListener('click', copiarText);
autoResize(respuesta);
});
