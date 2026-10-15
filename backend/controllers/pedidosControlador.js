const pedidoModel = require('../Models/pedidoModel');

async function registrarPedido(req, res) {
    try{
        const cliente = req.body.nombre;
        const correo = req.body.correoElec;
        const producto = req.body.productos;
        const cantidad = Number(req.body.cantidad);
        const tamanio = req.body.tamanio;
        const llevar = req.body.llevar || 'No';
        const observaciones = req.body.observacion || '';
        
        const fechaObj = new Date();
        const fecha_registro = fechaObj.toISOString().slice(0, 19).replace('T', ' ');

        if (typeof cliente !== 'string' || !cliente.trim() || 
            typeof correo !== 'string' || !correo.trim() || 
            typeof tamanio !== 'string' || !tamanio.trim() || 
            typeof producto !== 'string' || !producto.trim() || 
            !Number.isInteger(cantidad) || cantidad < 1 || 
            typeof observaciones !== 'string' || 
            typeof llevar !== 'string' || !llevar.trim() ||
            !fecha_registro)
            {
            return res.status(400).send('Datos del pedido son invalidos');
            }

        const id=await pedidoModel.registrarPedido(
            cliente.trim(),
            correo.trim(),
            producto.trim(),
            cantidad,
            tamanio.trim(),
            llevar.trim(),
            observaciones,
            fecha_registro
        );
        
        const parametros = new URLSearchParams({
            id:id,
            cliente:cliente.trim(),
            correo:correo.trim(),
            producto: producto.trim(),
            cantidad: cantidad,
            tamanio:tamanio.trim(),
            llevar:llevar.trim(),
            observaciones: observaciones,
            fecha_registro:fecha_registro

        });
        res.redirect('/resumen.html?' + parametros.toString());
    } catch (error){
        console.error('Error al registrar pedido:', error);
        res.status(500).send('Error al guardar el pedido');
    }

}

    module.exports = {
        registrarPedido
    }