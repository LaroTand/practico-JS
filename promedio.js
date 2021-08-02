const lista1 = [100, 200, 300, 500]


const calcularMedia = (lista) => {

    let sumaLista = 0

    for (let number of lista) {
        sumaLista += number
    }
    
    const promedioLista1 = sumaLista / lista.length

    return promedioLista1
}