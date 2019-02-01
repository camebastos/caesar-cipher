//window.cipher = {
  // ...
//};
function cypher (txt, desloc) {
let arrayTxt = txt.split(''); //devolve [ 'a', 'b', 'c' ]
let arrayTxtDesloc = [];
//let arrayTxtDesloc = arrayTxt.fromCharCode(i);


for (let i = 0; i < txt.length; i++) {
  //arrayTxt = txt.charCodeAt(i);

  //desloc = txt.charCodeAt(i);
  //arrayTxt += String.fronCharCode(desloc);

  //console.log(arrayTxt[i]); //devolve indices do array
  //console.log(arrayTxt[i].charCodeAt(0)); //devolve indice e valor ASC
  arrayTxtDesloc.push(((arrayTxt[i].charCodeAt(0) - 65 + desloc) %26) +65); //só funciona para maiuscula

  arrayTxtDesloc.push(((arrayTxt[i].charCodeAt(0) - 97 + desloc) %26) +97); //só funciona para minuscula

  let criptografia = String.fromCharCode(arrayTxtDesloc[i]);

  console.log(criptografia);
  document.write(criptografia);


  //console.log(arrayTxtDesloc);
}

return criptografia;

}

console.log(cypher('abc', 1))




//


//transformar str em array ok
//chamar codigo asc do array OK
//retornar ASC de todos os indices do array (andar e retornar o valor asc de cada indice do array) ok
//fazer funcionar para minuscula ok
//retornar o cod numerico asc gerado pelo charCodeAt em letra com string.fromChar

//explicar para o programa se a letra é maiuscula ou minuscula
//criar variavel com o retorno em asc para usar na conta do deslocamento
//deslocar cada letra do array pelo parametro num
//criar um novo array com já alterado pelo parametro
