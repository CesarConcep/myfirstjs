let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testNumber = 10;
console.log(testNumber);

let testString = "Cadena "+testNumber+" fran calvo";
console.log(testString);

let testString2 = `Cadena ${testNumber} fran calvo`;
console.log(testString);

let testString3 = "Cadena ".concat(testNumber)+" fran calvo";
console.log(testString);

let testNumberObject = new Number(10);
console.log(testNumberObject);

//Operaciones

let operador_a = 12;
let operador_b = 6;
let sum = operador_a + operador_b;
let potencia = operador_a ** operador_b;
let resto = operador_a % operador_b;
console.log(sum);
console.log(potencia);
console.log(resto);

//Incremento decremento

let inc = operador_a++;
let dec = operador_b--;
console.log(inc);//No se incrementa
console.log(dec);//No se decrementa

//Operaciones de asignacion

let x = 10;
let y = 12;
console.log(y+=6);
console.log(y-=12);

//Array
var array = [];
var array2 = new Array(3);
var array3 = new Array(3,5);
var array4 = new Array(3,5,"Sevilla",array3);
console.log(array);
console.log(array2);
console.log(array3);
console.log(array4);

console.log(array4[3][0]);
console.log(array4[3]);

array4.push("Arriba España");//Añade al final
console.log(array4);

array4.unshift(1);//Añade al principio
console.log(array4);

/*for(var i=0;i<array4.length; i++){
    console.log("Posicion: "+i+" contenido: "+array4[i]);
}*/

/*for(var i=array4.length;i>=0; i--){
    console.log("Posicion: "+i+" contenido: "+array4[i]);
}*/
var i = array4.length;
for(;i>=0;i--){
    console.log("aadasdasd "+array4[i]);
}

array4.forEach(function(element){
    console.log("iididi "+element);
});

//fecha
let today = new Date();
let october = new Date(2020,9,28);
console.log(today);
console.log(october);
console.log(october.getDate());