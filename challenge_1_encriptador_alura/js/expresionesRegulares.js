
// Expresiones regulares para validar campos

function contieneNumero(cadena){
    return /\d/.test(cadena);
}

function contieneMayusculas(cadena){
    return /[A-Z]/.test(cadena);
}

function contieneAcentos(cadena){
    return /^[^áéíóúÁÉÍÓÚñÑüÜ]+$/.test(cadena);
}