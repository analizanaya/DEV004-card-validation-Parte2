function isValid(numeroIngresado) {

  const deStringaArray = numeroIngresado.split(''); //".split" - Cambiar un string a array.
  const numeroReversa = deStringaArray.reverse(); //".reverse" - Array al revés.
  const reverse = numeroReversa.join(''); // ".join" - Cambiar un array a string.

  let resultado = 0;
  let elem = null;
  let alpha = null;

  for (let i = 1; i < reverse.length; i += 2) {
    elem = parseInt(reverse.charAt(i)) * 2; //number

    if (elem > 9) {
      alpha = elem.toString();
      elem = Number(alpha.charAt(0)) + Number(alpha.charAt(1)); //number 
    }
    resultado = resultado + elem;
  }

  for (let i = 0; i < reverse.length; i += 2) {
    resultado = resultado + parseInt(reverse.charAt(i));
  }
  if ((resultado % 10) === 0) {
    return true
  }
  else {
    return false
  }
}


function maskify(ocultarNumero) {
  if(ocultarNumero.length < 4){
    return ocultarNumero
  }
  else{
    let last4 = '';
    for(let i=ocultarNumero.length - 4; i < ocultarNumero.length; i++){
      last4 = last4 + ocultarNumero[i];
    }
    let mask = '';
    for( let j=0; j<ocultarNumero.length - 4; j++){
      mask = mask + '#';
    }
    return mask + last4
  }
}

const validator = {isValid: isValid, maskify};
  
export default validator;

