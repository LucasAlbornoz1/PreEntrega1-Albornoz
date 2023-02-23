function datosCliente () {
    let nombreYapellido = prompt ("Ingrese su Nombre y Apellido")
    let dni = prompt ("Ingrese su DNI")
    return datosFinal = (nombreYapellido + " " + dni)
}
function seleccionDeProd () {
    let sumaCarrito = 0;
    let seguirSumando = true;
    while (seguirSumando){
        let productoSeleccion = parseInt(prompt("Seleccione una cerveza 1:Amber 2:Bohemian 3:Weisse"))
    
    switch (productoSeleccion) {
        case 1: 
            sumaCarrito = sumaCarrito+350
        break;
        case 2: 
            sumaCarrito = sumaCarrito+450
        break;
        case 3: 
            sumaCarrito = sumaCarrito+350
        break;
        default:
            alert ("Seleccionaste una cerveza sin stock")
        break;
     
    }  
    alert ("Gracias tu Subtotal es " + sumaCarrito) 
    
    let seleccionSeguirSumando =  parseInt(prompt ("Quiere seguir sumando articulos? 1:Si 2:No"))
    if(seleccionSeguirSumando !==1){
        seguirSumando = false;
         
    }
    
}

}
window.addEventListener('load', function(){
    datosCliente ()
    seleccionDeProd ()
    alert ("Gracias por tu compra " + datosFinal) 
})
