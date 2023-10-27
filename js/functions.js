// alert("FUNTIOCN ACTIVO");
// ############ tipo de variables
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var days = 10;
var name = "Angel Urrego";
// let para variables de bloque o locales
let count = 1;

// ############ tipo de variables
// alert
//alert(name);
// console.log
console.log(name);
// body - pantalla
document.write(name + "####Angel Urrego");
document.getElementById("box_one").innerHTML = "<h1>Angel Urrego</h1>";
document.getElementById("box_two").innerText = "<h1>Angel Urrego</h1>";
//librerias
//Swal.fire(
//    'The Internet?',
//    'That thing is still around?',
//    'question'
//  )
    

// Swal.fire({
//     icon: 'error',
//     showConfirmButton: false,
//     title: name,
//     text: name,
//     footer: "footer: " + name,
//     background: 'green',
//     position: 'top-start'

// });

// ############ tipo de datos
// numericos

var number_one = 20;
var number_two = 5.5;
//texto
var class_type = "Electiva Tecnica 1";
// booleanos
var boolean = true; //false
// arrays - veectores
var array_num = [1,2,3,45,3.4,1.2];
var array_tex = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
var array_mix = [1,"a",2,"c"];
var array_mul = [
    {name:"Wilder", last_name:"Duarte", age:"31"},
    {name:"Antonella", last_name:"Martinez", age:"32"},
    {name:"Angel", last_name:"Duarte", age:"3"},
    {name:"Urrego", last_name:"Duarte", age:"1"}
]

// ############ operadores basicos
// suma
var suma = number_one + number_two;
console.log("Suma = " + suma);
// resta
var resta = number_one - number_two;
console.log("Resta = " + resta);
// multiplicacion
var multi = number_one * number_two;
console.log("Multiplicacion = " + multi);
// division
var divi = number_one / number_two;
console.log("Division = " + divi.toFixed(2));
// modulo
var modulo = number_one % number_two;
console.log("Modulo = " + modulo);



