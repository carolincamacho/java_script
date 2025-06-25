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