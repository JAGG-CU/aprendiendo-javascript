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