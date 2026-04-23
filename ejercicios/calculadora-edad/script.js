const annoInput = document.getElementById('annoInput');
const errorMsg = document.getElementById('errorMsg');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultadoDiv');

const fechaActual = new Date();
const anioActual = fechaActual.getFullYear();

function calcularEdad(){
    const valor = annoInput.value.trim();

    if (valor == ""){
        resultadoDiv.innerHTML = '❌ Por favor, ingresa un año de nacimiento';
        return;
    }

    const anio = Number(valor);

    if (isNaN(anio)){
        resultadoDiv.innerHTML = '❌ Debes ingresar un número (ej: 1990)';
        return;
    }

    if (!Number.isInteger(anio)) {
        resultadoDiv.innerHTML = '❌ Usa un año sin decimales (ej: 1990, no 1990.5)';
        return;
    }

    if (anio < 0) {
        resultadoDiv.innerHTML = '❌ El año no puede ser negativo';
        return;
    }

    if (anio > anioActual) {
        resultadoDiv.innerHTML = '❌ Aún no has nacido (el año no puede ser futuro)';
        return;
    }

    const edad = anioActual - anio;

    if (edad > 120) {
        resultadoDiv.innerHTML = `❌ ¿Eres inmortal? ${edad} años es demasiado. Verifica tu año.`;
        return;
    }

    resultadoDiv.innerHTML = `✅ Tienes aproximadamente ${edad} años (o los cumplirás este año)`;

    if (anio === anioActual) {
        resultadoDiv.innerHTML = `🍼 ¡Bienvenido al mundo! Tienes 0 años.`;
    }
}

calcularBtn.addEventListener('click', calcularEdad);