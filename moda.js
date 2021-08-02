// const lista = [1, 2, 2, 2, 2, 1, 3, 4, 5, 4, 4, 5, 6]

const calcularModa = (lista) => {
    const listaCount = {}

    lista.map((element) => {
        if (listaCount[element]) {
            listaCount[element] += 1
        } else {
            listaCount[element] = 1
        }
    })

    const listaArray = Object.entries(listaCount).sort((a, b) => {
        return a[1] - b[1]
    })

    const moda = listaArray[listaArray.length - 1][0]

    return moda
}
