const numeroInput = document.getElementById('numeroInput');
const verificarBtn = document.getElementById('verificarBtn');
const resultadoParImpar = document.getElementById('resultadoParImpar');

function verificarParImpar() {
    const numero = parseFloat(numeroInput.value);
    
    // Validar que sea un número válido
    if (isNaN(numero)) {
        resultadoParImpar.innerHTML = "❌ Por favor, ingresa un número válido";
        return;
    }    

    if(numero % 2 === 0) {
        resultadoParImpar.innerHTML=`✅ El número ${numero} es **PAR**`;
        console.log(`${numero} es par (resto: ${numero % 2})`);
    } else{
        resultadoParImpar.innerHTML=`🔴 El número ${numero} es **IMPAR**`;
        console.log(`${numero} es par (resto: ${numero % 2})`);
    }

}

verificarBtn.addEventListener('click', verificarParImpar);
