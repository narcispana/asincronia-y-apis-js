fetch ('https://rickandmortyapi.com/api/character')
.then((response)=>response.json())
.then((data)=> {
    const personajesVivos = data.results.filter((personaje)=>
        personaje.status == 'Alive')
    console.log('Personajes vivos', personajesVivos)
})
