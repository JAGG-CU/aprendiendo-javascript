// ============================================
// MIS PRIMERAS VARIABLES EN JAVASCRIPT
// ============================================

// 1. Variables con let (pueden cambiar)
let nombre = "Tu nombre";
let edad = 25;
let ciudad = "La Habana";  // o donde vivas

// 2. Variables con const (no pueden cambiar)
const pais = "Cuba";
const PI = 3.1416;

// 3. Tipos de datos
let esEstudiante = true;        // boolean
let lenguajes = ["HTML", "CSS", "JavaScript"];  // array
let persona = {                  // objeto
    nombre: nombre,
    edad: edad,
    pais: pais
};

// 4. Mostrar en consola
console.log("Hola, soy " + nombre);
console.log("Tengo " + edad + " años");
console.log("Vivo en " + ciudad + ", " + pais);
console.log("Estoy aprendiendo:", lenguajes);
console.log("Datos de persona:", persona);

// 5. Template strings (forma moderna, con comillas invertidas ``)
console.log(`Me llamo ${nombre} y tengo ${edad} años.`);

// ============================================
// CALCULADORA DE IMC
// ============================================

// 1. Obtener referencias a los elementos del HTML
const pesoInput = document.getElementById('peso');
const alturaInput = document.getElementById('altura');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoDiv = document.getElementById('resultado');

// 2. Función que calcula el IMC
function calcularIMC(peso, altura) {
    // Fórmula: peso / (altura * altura)
    const imc = peso / (altura * altura);
    return imc;
}

// 3. Función que interpreta el resultado (qué significa)
function interpretarIMC(imc) {
    if (imc < 18.5) {
        return "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal ✅";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso ⚠️";
    } else {
        return "Obesidad ❌";
    }
}

// 4. Función principal que se ejecuta cuando hacen clic
function manejarCalculo() {
    // Obtener los valores de los inputs
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);
    
    // Validar que los valores sean correctos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = "❌ Por favor, ingresa valores válidos (peso > 0 y altura > 0)";
        return;  // Salir de la función si hay error
    }
    
    // Calcular el IMC
    const imc = calcularIMC(peso, altura);
    
    // Interpretar el resultado
    const interpretacion = interpretarIMC(imc);
    
    // Mostrar el resultado en pantalla (con 2 decimales)
    resultadoDiv.innerHTML = `
        <strong>Tu IMC es: ${imc.toFixed(2)}</strong><br>
        Clasificación: ${interpretacion}
    `;
    
    // Mostrar también en consola (para que veas cómo debuggear)
    console.log(`Peso: ${peso}kg, Altura: ${altura}m, IMC: ${imc.toFixed(2)}, Clasificación: ${interpretacion}`);
}

// 5. Conectar el botón con la función (cuando hagan clic)
calcularBtn.addEventListener('click', manejarCalculo);

// Mensaje de confirmación en consola
console.log("✅ Calculadora de IMC cargada correctamente");
console.log("ℹ️ Abre index.html en el navegador y pruébala");