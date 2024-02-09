function imprimirHolaMundoAsyncrono(callback) {
    console.log('Imrimiendo Hola Mundo...')
    setTimeout(()=> {
        callback('Hola Mundo')
    },2000)
}

imprimirHolaMundoAsyncrono((mensaje)=>{
    console.log(mensaje)
})
