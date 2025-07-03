/*
    1.Comprueba si un elemento existe dentro de un array. Devuelve true o false.
    2.Suma todos los enteros de un array y devuelve el resultado.
    3.Calcula y devuelve el promedio de los valores en un array.
    4.Devuelve el número más grande de un array de enteros.
*/

var datos=[20,55,60,18]

// ejercicio 1
function comprobar(array,elemento)
{
    for (let i=0;i<array.lenght;i++)
    { 
        if (array[i]===elemento)
            return true
    }
    return false
}
console.log(comprobar(datos,46))

// ejercicio 2
function sumar_elementos(array)
{
    let total=0; //let: a variable solo vive en la funcion, var: la variable queda mas disponible
    for (let i=0; i<array.length;i++){
        total=total+array[i]
    }
    return total;
}
console.log(sumar_elementos(datos))

// ejercicio 3
function promedio(array)
{
    let total=0;
    let promedio=0;
    for (let i=0; i<array.length;i++){
        total=total+array[i]
        promedio=total/(i+1)
    }
    return promedio;
}
console.log(promedio(datos))

// ejercicio 3 - otro
function promedio_2(array)
{
    if (array.lenght===0)
    {
        return"sin datos"
    }
    const suma=array.reduce((acum,num)=>acum+num,0)
    return suma/array.length;
}
console.log(promedio_2(datos))

/*
// ejercicio 4
function maximo(array)
{
    
}
console.log(maximo(datos))

*/