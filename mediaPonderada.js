const notas = [
    {
        course: "English",
        note: 10,
        credits: 2,
    },
    {
        course: "Quimica",
        note: 7,
        credits: 3,
    },
    {
        course: "Historia",
        note: 8,
        credits: 1,
    },
    {
        course: "Computacion",
        note: 10,
        credits: 4,
    },
]

let sumaNotasConCreditos = 0
let sumaCreditos = 0

for (let i of notas) {
    sumaNotasConCreditos += i.note * i.credits
    sumaCreditos += i.credits
}

const mediaPonderada = sumaNotasConCreditos / sumaCreditos