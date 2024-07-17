
//Contiene los metodos de encriptación y desencriptación


//Mapea las vocales para su intercambio y viceversa
const mapaEncriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const mapaDesencriptacion = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
};
//Mapea las vocales para su intercambio y viceversa

function encriptar(mensaje) {
    return mensaje.replace(/[eioua]/g, match => mapaEncriptacion[match]);
}

function desencriptar(mensaje) {
    return mensaje.replace(/enter|imes|ai|ober|ufat/g, match => mapaDesencriptacion[match]);
}