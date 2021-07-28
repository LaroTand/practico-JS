
// Codigo del cuadrado
console.group("Cuadrado")

const perimetroCuadrado = (lado) => lado * 4

const areaCuadrado = (lado) => lado ** 2

console.groupEnd()


// Codigo del Triangulo
console.group("Triangulo")

const perimetroTriangulo = (lado1, lado2, base) => parseInt(lado1) + parseInt(lado2) + parseInt(base)

const areaTriangulo = (base, altura) => (base * altura) / 2

console.groupEnd()


// Codigo del Triangulo Isosceles
console.group("Triangulo Isosceles")

const perimetroTrianguloIso = (lado1, base) => (parseInt(lado1)*2) + parseInt(base)

const alturaTrianguloIso = (lado1, base) => Math.sqrt(((lado1**2)-(base**2 / 4)))

const areaTrianguloIso = (lado1, base) => (base * alturaTrianguloIso(lado1,base)) / 2

console.groupEnd()


// Codigo del Circulo
console.group("Circulo")

    // Diametro
const diametroCirculo = (radio) => radio * 2

    // PI
const PI = Math.PI

    // Circunferencia
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI

    // Area
const areaCirculo = radio => PI * radio ** 2

console.groupEnd()


// ------------- Conexion con el HTML -------------------


    // Cuadrado
function calcPerimetroCuadrado() {
    const $input = document.getElementById('InputCuadrado')
    const value = $input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcAreaCuadrado() {
    const $input = document.getElementById('InputCuadrado')
    const value = $input.value
    const area = areaCuadrado(value)
    alert(area)
}


    // Triangulo
function calcPerimetroTriangulo() {
    const value1 = document.getElementById('InputTriangulo1').value
    const value2 = document.getElementById('InputTriangulo2').value
    const value3 = document.getElementById('BaseTriangulo').value
    const perimetro = perimetroTriangulo(value1, value2, value3)
    alert(perimetro)
}

function calcAreaTriangulo() {
    const value1 = document.getElementById('BaseTriangulo').value
    const value2 = document.getElementById('AlturaTriangulo').value
    const area = areaTriangulo(value1,value2)
    alert(area)
}


    // Triangulo Isosceles
function calcPerimetroTrianguloIso(){
    const lado1 = document.getElementById('InputTrianguloIso').value
    const base = document.getElementById('BaseTrianguloIso').value
    const perimetro = perimetroTrianguloIso(lado1,base)
    alert(perimetro)
}

function calcAreaTrianguloIso(){
    const lado1 = document.getElementById('InputTrianguloIso').value
    const base = document.getElementById('BaseTrianguloIso').value
    const area = areaTrianguloIso(lado1,base)
    alert(area)
}    


    // Circulo
function calcPerimetroCirculo(){
    const radio =  document.getElementById('RadioCirculo').value
    const perimetro = perimetroCirculo(radio)
    alert(perimetro)
}

function calcAreaCirculo(){
    const radio =  document.getElementById('RadioCirculo').value
    const area = areaCirculo(radio)
    alert(area)
}