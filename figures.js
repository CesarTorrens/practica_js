// codigo del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(num) {
    return num * 4
}

function areaCuadrado(num) {
    return num * num
}
console.groupEnd()

console.group("Triangulos")
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base
}

function areaTriangulo (base, altura ) {
    return (base * altura) / 2
}

console.groupEnd()

// Circulos
console.group("Circulos")
function diametroCirculo (radio) {
    return radio * 2
}

const PI = Math.PI

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio)
    return diametro  * PI
}

function areaCirculo (radio) {
    return (radio * radio) * PI
}
console.groupEnd()


// Interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(`El perimetro de tu cuadrado es de ${perimetro}`)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const area = areaCuadrado(value)
    alert(`El area de tu cuadrado es de ${area}`)
}

function calcularPerimetroTriangulo() {
    const inputSideA = document.getElementById("InputSideA")
    const inputSideB = document.getElementById("InputSideB")
    const inputBase = document.getElementById("InputBase")
    const valueSideA = Number(inputSideA.value)
    const valueSideB = Number(inputSideB.value)
    const valueBase= Number(inputBase.value )   
    const perimetro = perimetroTriangulo(valueSideA, valueSideB, valueBase )
    alert(`El perimetro de tu Triangulo es de ${perimetro}`)
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputBase")
    const inputAltura = document.getElementById("InputAltura")
    const valueBase = Number(inputBase.value)
    const valueAltura = Number(inputAltura.value)
    const area = areaTriangulo(valueBase, valueAltura)
    alert(`El area de tu cuadrado es de ${area}`)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = Number(input.value)
    const perimetro = perimetroCirculo(value)
    alert(`El perimetro de tu cuadrado es de ${perimetro}`)
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = Number(input.value)
    const area = areaCirculo(value)
    alert(`El area de tu cuadrado es de ${area}`)
}

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo")
    const value = Number(input.value)
    const diametro = diametroCirculo(value)
    alert(`El area de tu cuadrado es de ${diametro}`)
}