/*
    if
    else if
    else
*/

var x=2
//debe estar en llaves
if(x===2)
{
    console.log("cumple")
}

if(x===3)
{
    console.log("primera salida")
}
else if (x==="2")
{
    console.log("primera salida")
}
else if (x===2)
{
    console.log("tercera salida")
}
else
{
    console.log("no contrado")
}


/*OPERADORES LOGICOS
    &&  ||
*/

if (100>10 && 10==100)
{ console.log("doble condicion ok")
}

if (100>10 || 10==100)
{ console.log("condicion or ok")
}

if (true)
{console.log("siempre es verdadero")}

// uso de switch case
let opcion=7;

switch(opcion)
{
    case 1:
        console.log("seleccion 1")
        break
    case 2:
        console.log("seleccion 2")
        break
    case 3:
        console.log("seleccion 3")
        break
    default:
        console.log("Caso por Defecto")
}

