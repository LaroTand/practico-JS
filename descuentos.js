// Cupones
const coupons = [
    ["descuento", 50],
    ["cirGOD", 9],
    ["TheCakeIsALie", 15],
    ["ZUN", 45],
]

// Función para comprobar los cupones
const checkCoupon = (code) => {
    for (let i of coupons) {
        if (code === i[0]) {
            // Cupón Aceptado
            return i[1]
        }
    }
    // Cupón Inexistente
    return 0
}

// Funcion para calcular el precio a pagar de un descuento
const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajeConDescuento = 1 - descuento / 100
    const precioConDescuento = precio * porcentajeConDescuento

    return precioConDescuento
}

function onClickButtonDiscount() {
    const $inputPrice = document.getElementById("InputPrice")
    const priceValue = $inputPrice.value

    const $inputDiscount = document.getElementById("InputDiscount")
    const discountValue = $inputDiscount.value

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue).toFixed()

    const $inputCoupon = document.getElementById("InputCoupon")
    const codeCoupon = $inputCoupon.value

    console.log(codeCoupon)

    // Comprobar cupon
    const discountCoupon = checkCoupon(codeCoupon)

    const precioConCupon = calcularPrecioConDescuento(precioConDescuento, discountCoupon).toFixed()

    const $resultP = document.getElementById("ResultP")
    $resultP.innerText = `El precio con descuento son: $${precioConCupon}`
}
