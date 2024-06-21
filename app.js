document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const ingresoNumero = document.getElementById('ingresoNumero').value;
    const numero = parseInt(ingresoNumero);//parseo el valor 

    if (isNaN(numero) || numero <= 0) {
        alert('Por favor, ingrese un número válido mayor a cero');
        return;
    }

    const fibSeries = creaFibonacci(numero);
    document.getElementById('result').innerText = fibSeries.join(', ');
});

function creaFibonacci(n) {
    let serieFibonacci = [];
    let a = 0, b = 1;

    if (n >= 1) serieFibonacci.push(a);
    if (n >= 2) serieFibonacci.push(b);

    for (let i = 3; i <= n; i++) {
        let next = a + b;
        serieFibonacci.push(next);
        a = b;
        b = next;
    }
    console.log(serieFibonacci);
    return serieFibonacci;
}
