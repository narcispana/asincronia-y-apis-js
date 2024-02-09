const miPromise = new Promise((resolve) => {
  setTimeout(()=> {
    resolve('Hola mundo')
  }, 3000)
})

miPromise.then((resultado)=> {
  console.log(resultado)
})
