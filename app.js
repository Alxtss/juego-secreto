/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indique un numero de 1 al 10';*/

let secretNumber = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function setElementText(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

function verificarIntento(){
    //alert('allright');
    //let userNumber = document.getElementById('valorUsuario').value;
    let userNumber = parseInt(document.getElementById('valorUsuario').value);//convirtiento a int
    console.log(secretNumber);
    /*console.log(typeof(userNumber));
    console.log(secretNumber);
    console.log(typeof(secretNumber));
    console.log(userNumber);
    console.log(userNumber == secretNumber);*/
    //console.log(userNumber == secretNumber);// === es para validacion explicita de datos

    if(userNumber === secretNumber){
        setElementText('p', `Buena prro :v... Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        //there it was used an 'Operador Ternario'
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(userNumber > secretNumber){
            setElementText('p','el numero secreto es menor');
        } else {
            setElementText('p','el numero secreto es mayor');
        }
        intentos++;
        limpiarTexto();
    }
    return;
}

function limpiarTexto(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
   /* let secretNumber = Math.floor(Math.random()*10)+1;
    return secretNumber;*/
    //instead of that it could be like this:    
    //return Math.floor(Math.random()*10)+1;

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        setElementText('p','Todos los numeros posibles ya fueron sorteados');
    } else {
    //si el numero generado ya esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)==true){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    setElementText('h1','Numero Secreto');
    setElementText('p',`Indique un numero de 1 al ${numeroMaximo}`);
    intentos = 1;
    secretNumber = generarNumeroSecreto();
}

function restartGame(){  
    limpiarTexto();  
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
