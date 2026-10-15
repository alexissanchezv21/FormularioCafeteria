document.addEventListener('DOMContentLoaded', () => {
    
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(evento) {

        const nombre = document.getElementById('nombre').value.trim();
        const producto = document.getElementById('produc').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);
        
        const tamanioSeleccionado = document.querySelector('input[name="tamanio"]:checked');

        if (nombre === "") {
            alert("Por favor, ingresa tu nombre para el pedido.");
            return;
        }

        if (producto === "") {
            alert("Por favor, selecciona el producto que deseas ordenar.");
            return;
        }

        if (isNaN(cantidad) || cantidad < 1) {
            alert("Por favor, ingresa una cantidad válida (mínimo 1 bebida).");
            return;
        }

        if (!tamanioSeleccionado) {
            alert("Por favor, selecciona un tamaño para tu bebida.");
            return;
        }

        formulario.submit();
    });

});