// ============================================
// VALIDADOR DE CONTRASEÑA
// CSS DINÁMICO SEGÚN RESULTADO
// ============================================

const contrasenaInput = document.getElementById('contrasena');
const resultadoDiv = document.getElementById('resultado');
const barraFill = document.getElementById('barraFill');

// Elementos de requisitos
const reqLongitud = document.getElementById('reqLongitud');
const reqNumeros = document.getElementById('reqNumeros');
const reqMayuscula = document.getElementById('reqMayuscula');

// Función para validar la contraseña
function validarContrasena(contrasena) {
    // Validación 1: campo vacío
    if (contrasena === '') {
        return { nivel: 'error', mensaje: '❌ Ingresa una contraseña' };
    }
    
    // Validación 2: muy corta
    if (contrasena.length < 6) {
        return { nivel: 'debil', mensaje: '⚠️ Demasiado corta (mínimo 6 caracteres)' };
    }
    
    // Verificar requisitos
    const tieneNumero = /[0-9]/.test(contrasena);
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    
    // Determinar nivel
    if (contrasena.length >= 10 && (tieneNumero || tieneMayuscula)) {
        return { nivel: 'fuerte', mensaje: '✅ Contraseña fuerte' };
    } else if (contrasena.length >= 8 || (tieneNumero && tieneMayuscula)) {
        return { nivel: 'media', mensaje: '⚠️ Contraseña media (puede mejorar)' };
    } else {
        return { nivel: 'debil', mensaje: '🔴 Contraseña débil (usa números y mayúsculas)' };
    }
}

// Función para actualizar los requisitos en tiempo real
function actualizarRequisitos(contrasena) {
    // Longitud
    if (contrasena.length >= 6) {
        reqLongitud.className = 'cumplido';
        reqLongitud.innerHTML = '✅ Mínimo 6 caracteres';
    } else {
        reqLongitud.className = 'no-cumplido';
        reqLongitud.innerHTML = '❌ Mínimo 6 caracteres';
    }
    
    // Tiene número
    const tieneNumero = /[0-9]/.test(contrasena);
    if (tieneNumero) {
        reqNumeros.className = 'cumplido';
        reqNumeros.innerHTML = '✅ Al menos un número';
    } else {
        reqNumeros.className = 'no-cumplido';
        reqNumeros.innerHTML = '❌ Al menos un número';
    }
    
    // Tiene mayúscula
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    if (tieneMayuscula) {
        reqMayuscula.className = 'cumplido';
        reqMayuscula.innerHTML = '✅ Al menos una mayúscula';
    } else {
        reqMayuscula.className = 'no-cumplido';
        reqMayuscula.innerHTML = '❌ Al menos una mayúscula';
    }
}

// Función principal (se ejecuta cada vez que escriben)
function evaluarContrasena() {
    const contrasena = contrasenaInput.value;
    
    // Actualizar checklist de requisitos (siempre)
    actualizarRequisitos(contrasena);
    
    // Validar la contraseña
    const resultado = validarContrasena(contrasena);
    
    // CAMBIAR CSS SEGÚN EL RESULTADO
    // 1. Quitar todas las clases existentes
    resultadoDiv.classList.remove('debil', 'media', 'fuerte', 'error');
    barraFill.classList.remove('debil', 'media', 'fuerte');
    
    // 2. Añadir la clase según el nivel
    resultadoDiv.classList.add(resultado.nivel);
    barraFill.classList.add(resultado.nivel);
    
    // 3. Cambiar el texto del resultado
    resultadoDiv.innerHTML = resultado.mensaje;
    
    // 4. Bonus: cambiar el borde del input
    const input = contrasenaInput;
    switch(resultado.nivel) {
        case 'debil':
            input.style.borderColor = '#c62828';
            break;
        case 'media':
            input.style.borderColor = '#f57c00';
            break;
        case 'fuerte':
            input.style.borderColor = '#2e7d32';
            break;
        default:
            input.style.borderColor = '#ddd';
    }
}

// Eventos: mientras escriben y cuando pierde el foco
contrasenaInput.addEventListener('input', evaluarContrasena);
contrasenaInput.addEventListener('blur', evaluarContrasena);

console.log('✅ Validador de contraseña cargado');