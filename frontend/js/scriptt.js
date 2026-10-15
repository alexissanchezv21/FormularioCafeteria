const parametros=new URLSearchParams(window.location.search);

const valcliente=parametros.get('cliente');
const valcorreo=parametros.get('correo');
const valproducto=parametros.get('producto');
const valcantidad=parametros.get('cantidad');
const valtamanio=parametros.get('tamanio');
const valllevar=parametros.get('llevar');
const valobservacion=parametros.get('observaciones') || parametros.get('observacion');

document.getElementById('cliente').textContent = valcliente;
document.getElementById('correo').textContent = valcorreo;
document.getElementById('producto').textContent = valproducto;
document.getElementById('cantidad').textContent = valcantidad;
document.getElementById('tamanio').textContent = valtamanio;
document.getElementById('llevar').textContent = valllevar;
document.getElementById('observacion').textContent = valobservacion;