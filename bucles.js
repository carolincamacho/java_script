//declarar
function miFuncion()
{
    return "x"
}
// llamar o invocar
console.log(miFuncion())
//funcion con parametros
function sumar (a,b)
{
    return a+b
}
console.log(sumar(8,10))

//combinar
function validar(edad){
    if (edad>18)
        return "puede ingresar"
}
console.log(validar(17))

//BUCLES
var estudiantes=["andres","luisa","carlos"]

for(let i=0;i<estudiantes.length;i++){
    console.log(i)
    console.log(estudiantes[i])
}