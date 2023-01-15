// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var arrayNuevo = [];
  for(var propiedad in objeto) {
    arrayNuevo.push([propiedad,objeto[propiedad]])
  }
  return arrayNuevo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
//     " H:1  O:1 L:1  A:3  A  A"
// key   0  1  2  3  4  5 
  var nuevoObjeto = {}
  for(var i = 0; i<string.length; i++) {
    if(nuevoObjeto.hasOwnProperty(string[i])) {
      nuevoObjeto[string[i]] = nuevoObjeto[string[i]] + 1;
    } else {
      nuevoObjeto[string[i]] = 1;
    }
  }
  return nuevoObjeto;
}
 

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var a = [];
  var b = [];
  for (i = 0; i < s.length; i++) {
   if (s[i] === s[i].toUpperCase()){
     a.push(s[i])
  } else {
     b.push(s[i])
  } 
}
return a.join("") + b.join("");
}





function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

// .split = ["H,e,n,r,y"] === .reverse = ["y,r,n,e,H"] === .join = [yrneH]
// fraseFinal.join(" ") === ["ehT yrneH egnellahC si !esolc"]

var fraseInvertida = str.split(" ");
var fraseFinal = fraseInvertida.map(function (elemento){
 return elemento.split("").reverse().join("");
});
return fraseFinal.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

// NUMERO = "444"
var numeroCapicua = numero.toString().split("").reverse().join("");
 if(numero.toString() !== numeroCapicua) {
  return  "No es capicua";
} else {
  return  "Es capicua";
} 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // ["a" , "b" , "c" , "d" , "e"]
  nuevaCadena = '';
  for(i = 0 ; i < cadena.length ; i++){
    if (cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      nuevaCadena += cadena [i] ;
    }
  }
  return nuevaCadena;
  }


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  arr.sort((a, b)=> {
    if(a.length === b.length){
      return 0;
    } 
     if(a.length < b.length){
       return -1;
     }
    return 1
  });
 
 return(arr);

 

} 


function buscoInterseccion(arreglo1 , arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrayInterseccion = [];
  for( var i = 0 ; i<arreglo1.length; i++ ) {
  for (var j = 0;   j<arreglo2.length; j++) {
    if (arreglo1[i] === arreglo2[j]) {
     arrayInterseccion.push(arreglo1[i]) 
    } 
    }
  }
return arrayInterseccion;
} 


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

