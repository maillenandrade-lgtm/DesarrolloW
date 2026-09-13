let saldoActual = 1000;
const textoSaldo = document.getElementById('saldoUsuario');
const mensajeExito = document.getElementById('mensajeExito');

document.getElementById('formDeposito').addEventListener('submit', function(e) {
    e.preventDefault(); 
    let monto = parseInt(document.getElementById('deposito').value);
    saldoActual += monto; 
    textoSaldo.innerText = saldoActual; 
    document.getElementById('deposito').value = ''; 
    mostrarMensaje("¡Depósito de " + monto + " fichas exitoso!");
});

document.getElementById('formRetiro').addEventListener('submit', function(e) {
    e.preventDefault();
    let monto = parseInt(document.getElementById('retiro').value);
    
    if (monto > saldoActual) {
        alert("Error: No tienes suficientes fichas para retirar esa cantidad.");
    } else {
        saldoActual -= monto; 
        textoSaldo.innerText = saldoActual; 
        document.getElementById('retiro').value = ''; 
        mostrarMensaje("¡Retiro de " + monto + " fichas exitoso!");
    }
});

function mostrarMensaje(texto) {
    mensajeExito.innerText = texto;
    mensajeExito.classList.remove('d-none');
    setTimeout(() => {
        mensajeExito.classList.add('d-none');
    }, 3000); 
}
