const aplicaDescuento = new Promise(function(resolve, reject){
    const descuento = false;
    if(descuento){
        resolve('Descuento Aplicado');
    }else{
        reject('No se puede aplicar el descuento');

    }
});

aplicaDescuento.then(function(resultado){
    console.log(resultado);
}).catch(function(error){
    console.log(error);
});