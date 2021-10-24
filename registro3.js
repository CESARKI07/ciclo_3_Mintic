var args = [];
var array1 = [];

function buscarDominio(){
    const reg = new RegExp(/upb.edu.co/);
    let objeto = {
        'nombre': document.getElementById('campoNombre').value,
        'usuario': document.getElementById('campoUsuario').value,
        'direccion': document.getElementById('campoDireccion').value,
        'contrasena': document.getElementById('campoContrasena').value,
        'correo': document.getElementById('campoCorreo').value,
        'confirmacioncorreo': document.getElementById('campoConfirmacionCorreo').value,
        'telefono': document.getElementById('campoTelefono').value,       
    }
    array1.push(objeto);
    if(reg.test(objeto.correo)){
        args.push(objeto)
    }
    return args;
}

function retornarCuenta(args){
    var contador = 0;    
    var reg = new RegExp(/a/)
    var reg1 = new RegExp(/(0|4)$/)
    for (i=0; i<args.length; i++){
        
        if(reg.test(args[i].nombre)){
            if(reg1.test(args[i].telefono)){
                contador = contador+1;
            }
        }
    }
    return contador;
}
module.exports.buscarDominio = buscarDominio;
module.exports.retornarCuenta = retornarCuenta;