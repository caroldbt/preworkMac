/*console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado);
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado);
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado " + areaCuadrado);
console.groupEnd(); */
// Codigo del triangulo

console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("Los lados del triangulo miden " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");
console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");
console.log("El area del triangulo es de: " + areaTriangulo + "cm2");
console.groupEnd();

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}