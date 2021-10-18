function validar_telefono(string){    
    telefono = string;    
    const reg = new RegExp(/^\d{7,10}$/);
    if(reg.test(telefono)){
        return true;
    } else{
        return false;
    };
}

function validar_direccion(string){
    direccion = string;
    const reg = new RegExp(/^(Carrera|Transversal|Circular|Calle).*#/)
    if(direccion.length>=7 && direccion.length<=30){
        if(reg.test(direccion) ){  
            return true;
        }
        else{
            return false;
        }
    } else{
        return false;
    }
}

module.exports.validar_telefono = validar_telefono;
module.exports.validar_direccion = validar_direccion;