document.addEventListener("DOMContentLoaded", () => {

    const seccionDerecha = document.getElementById("seccionDerecha");

    encriptarTexto = () => {
        let textAreaEncriptar = document.getElementById("textAreaEncriptar");
        let mensaje = textAreaEncriptar.value;

        //Verifica que la cadena no contenga numeros o mayúsculas
        if (!contieneNumero(mensaje) && !contieneMayusculas(mensaje) && contieneAcentos(mensaje)) { 
            let mensajeEncriptado = encriptar(mensaje);
            removerContenidoTextAreaEncriptar();
            removerContenidoResultados();
            agregarContenidoResultado(mensajeEncriptado);
            establecerEventoABotonCopiar();
            restablecerPlaceholder();
        }else if(mensaje !== ""){
            notificarValoresInvalidos();
        }
        return;
    }

    desencriptarTexto = () => {
        let textAreaEncriptar = document.getElementById("textAreaEncriptar");
        let mensaje = textAreaEncriptar.value;

        //Verifica que la cadena no contenga numeros o mayúsculas
        if (!contieneNumero(mensaje) && !contieneMayusculas(mensaje) && contieneAcentos(mensaje)) { 
            let mensajeDesencriptado = desencriptar(mensaje);
            removerContenidoTextAreaEncriptar();
            removerContenidoResultados();
            agregarContenidoResultado(mensajeDesencriptado);
            establecerEventoABotonCopiar();
            restablecerPlaceholder();
        }else if(mensaje !== ""){
            notificarValoresInvalidos();
        }
        return;
    }

    removerContenidoResultados = () => {
        //Limpia el contenido inicial de la sección de resultados

        seccionDerecha.innerHTML = "";
        return;
    }

    removerContenidoTextAreaEncriptar = () => {
        //Limpia el textarea de datos a encriptar

        textAreaEncriptar.value = "";
        return;
    }

    agregarContenidoResultado = (mensajeEncriptado) => {
        //Crea los objetos HTML de manera dinamica para mostrar los resultados

        const seccionResultados = document.createElement("section");
        seccionResultados.classList.add("seccionResultados");

        const textAreaResultado = document.createElement("textarea");
        textAreaResultado.value = mensajeEncriptado;
        textAreaResultado.setAttribute("readonly", "readonly");
        textAreaResultado.id = "textAResultados"

        const btnCopiar = document.createElement("button");
        btnCopiar.id = "btnCopiar";

        seccionResultados.appendChild(textAreaResultado);
        seccionResultados.appendChild(btnCopiar);

        btnCopiar.textContent = "Copiar";
        seccionDerecha.appendChild(seccionResultados);
        return;
    }


    copiarTexto = () => {
        //Copia el resultado en el portapapeles
        
        const textAreaResultado = document.getElementById("textAResultados");
        navigator.clipboard.writeText(textAreaResultado.value)
            .then(() => {
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        return;
    }

    establecerEventoABotonCopiar = () => {
        //Establece el evento al botón de copiar a portapapeles

        btnCopiar.onclick = copiarTexto;
        return;
    }

    notificarValoresInvalidos = () => {
        //Modifica el placeholder del textarea para notificar al usuario
        //que ha ingresado valores incorrectos

        let textAreaEncriptar = document.getElementById("textAreaEncriptar");
        textAreaEncriptar.value = ""
        textAreaEncriptar.placeholder = "Solo letras minúsculas y sin acentos"
        return;
    }

    restablecerPlaceholder = ()=>{
        //Modifica el placeholder del textarea para incitar al usuario
        //a seguir encriptando

        let textAreaEncriptar = document.getElementById("textAreaEncriptar");
        textAreaEncriptar.value = ""
        textAreaEncriptar.placeholder = "Ingrese el texto aquí"
        return;
    }

});