var x=2;
console.log(x)
// comentarios en java script una línea
/* comentario de parrafos
    variads lineas y se cierra
*/

/* para definir variables en js hay 3 maneras
    var     antigua manera ECMA SCRIPT 5
    let     moderna manera ECMA SCRIPT 6
    const   proteger la información
*/

var b=2         //defino la variable
b=4             // reasigno el valor
console.log(b)  // la imprimo

const c=8;          //defino la variable
//c=10             // reasigno el valor y sale error
console.log(c)     // la imprimo

let d=8;          //defino la variable
d=12             // reasigno el valor
console.log(d)  // la imprimo

//OPERADORES
console.log(2+4)
console.log("2"+4)
console.log("b"+4)
console.log("b"-4)
console.log("2"-4)

console.log(typeof(8+8))
console.log(typeof(8+8.3))

//potencia
console.log(2**3)
console.log(Math.pow(2,3))

console.log(`texto con variblae ${d}`)

console.log(2=='2') // true pues combierte
console.log(2==2)   // es true
console.log(2==='2') // validacion exactamente igual inclueyndo tipos

var usuario='andres'
var usuario="andres"

console.log(usuario.length)

//boolean
var login=true
console.log(typeof(login))

console.log(2!==2) // false
