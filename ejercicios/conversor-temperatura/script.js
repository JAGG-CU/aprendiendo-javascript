// ============================================
// CONVERSOR DE TEMPERATURAS
// ============================================

// Elementos del DOM
const temperaturaInput = document.getElementById('temperatura');
const aFahrenheitBtn = document.getElementById('aFahrenheit');
const aCelsiusBtn = document.getElementById('aCelsius');
const resultadoDiv = document.getElementById('resultado');
const errorDiv = document.getElementById('errorMsg');

// Funciones de conversión (puras, sin lógica de UI)
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Función para validar y obtener el número ingresado
function obtenerTemperaturaValida() {
    const valor = temperaturaInput.value.trim();
    
    if (valor === '') {
        errorDiv.style.display = 'block';
        return null;
    }
    
    const numero = parseFloat(valor);
    
    if (isNaN(numero)) {
        errorDiv.style.display = 'block';
        return null;
    }
    
    errorDiv.style.display = 'none';
    return numero;
}

// Función para mostrar el resultado en pantalla
function mostrarResultado(original, convertida, unidadOriginal, unidadConvertida, emoji) {
    resultadoDiv.innerHTML = `
        <div>${original}° ${unidadOriginal} =</div>
        <div class="temperatura-resultado">${convertida.toFixed(2)}° ${unidadConvertida}</div>
        <div style="font-size: 14px; margin-top: 10px;">${emoji}</div>
    `;
}

// Manejador: convertir a Fahrenheit
function manejarCelsiusAFahrenheit() {
    const celsius = obtenerTemperaturaValida();
    
    if (celsius === null) {
        resultadoDiv.innerHTML = '❌ Corrige el error antes de continuar';
        return;
    }
    
    const fahrenheit = celsiusToFahrenheit(celsius);
    mostrarResultado(celsius, fahrenheit, 'C', 'F', '🔥');
    
    // También en consola para depuración
    console.log(`Convertido: ${celsius}°C = ${fahrenheit.toFixed(2)}°F`);
}

// Manejador: convertir a Celsius
function manejarFahrenheitACelsius() {
    const fahrenheit = obtenerTemperaturaValida();
    
    if (fahrenheit === null) {
        resultadoDiv.innerHTML = '❌ Corrige el error antes de continuar';
        return;
    }
    
    const celsius = fahrenheitToCelsius(fahrenheit);
    mostrarResultado(fahrenheit, celsius, 'F', 'C', '❄️');
    
    console.log(`Convertido: ${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
}

// Eventos
aFahrenheitBtn.addEventListener('click', manejarCelsiusAFahrenheit);
aCelsiusBtn.addEventListener('click', manejarFahrenheitACelsius);

// Bonus: presionar Enter en el input activa la conversión más probable
temperaturaInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        manejarCelsiusAFahrenheit();
    }
});

console.log('✅ Conversor de temperaturas cargado correctamente');