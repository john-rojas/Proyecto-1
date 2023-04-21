// Función para convertir un número en letras
function convertirNumeroEnPalabras(numero) {
    var unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    var decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    var especiales = ['', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    var miles = ['', 'mil', 'dos mil', 'tres mil', 'cuatro mil', 'cinco mil', 'seis mil', 'siete mil', 'ocho mil', 'nueve mil'];

    var palabras = '';
    var digitos = numero.toString().split('');

    while (digitos.length < 6) {
        digitos.unshift('0');
    }

    if (digitos[0] !== '0') {
        palabras += unidades[digitos[0]] + ' cientos ';
    }

    if (digitos[1] === '1') {
        palabras += especiales[digitos[2]] + ' ';
    } else if (digitos[1] !== '0') {
        palabras += decenas[digitos[1]] + ' ';
    }

    if (digitos[2] !== '0' && digitos[1] !== '1') {
        palabras += unidades[digitos[2]] + ' ';
    }

    if (digitos[3] !== '0') {
        palabras += miles[digitos[3]] + ' ';
    }

    if (digitos[4] !== '0' && digitos[4] !== '1') {
        palabras += decenas[digitos[4]] + ' ';
    }

    if (digitos[4] === '1') {
        palabras += especiales[digitos[5]] + ' ';
    } else if (digitos[5] !== '0') {
        palabras += unidades[digitos[5]] + ' ';
    }

    return palabras.trim();
}

// Generar número aleatorio
var numeroAleatorio = Math.round(Math.random() * 999999);

// Convertir número a letras
var numeroEnLetras = convertirNumeroEnPalabras(numeroAleatorio);

// Establecer contenido del cuadro de texto
var cuadroTexto = document.getElementById("numero-en-letras");
cuadroTexto.innerHTML =  numeroEnLetras;
console.log(numeroAleatorio);

// Mostrar número aleatorio y su forma escrita en la consola y en una ventana emergente
console.log(numeroAleatorio + ': ' + numeroEnLetras);

function CapturarIngreso(){
    var ingreso = document.getElementById("entrada").value;
    if (numeroAleatorio == ingreso){
        alert('¡Bien hecho! El número ingresado es correcto!');
    }else{
        alert('¡Ha ocurrido un error! El número ingresado no es correcto!');
    }
}
