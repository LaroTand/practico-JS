// const lista = [500, 400, 900, 100, 4000000]

const calcularMedia = (lista) => {
    let sumaLista = 0

    for (let number of lista) {
        sumaLista += number
    }

    const promedioLista1 = sumaLista / lista.length

    return promedioLista1
}

const esPar = (number) => {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

const calcularMediana = (lista) => {

    // Ordenamos la lista
    lista.sort((a, b) => a-b)

    let mediana
    const mitadLista = parseInt(lista.length / 2)

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista]
        const elemento2 = lista[mitadLista - 1]

        const promedioMediana = calcularMedia([elemento1, elemento2])

        mediana = promedioMediana

        return mediana
    } else {
        mediana = lista[mitadLista]

        return mediana
    }
}
