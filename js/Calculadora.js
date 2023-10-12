//contiene la operacion o el resultado parcial
let parcial= "";

//elemento donde se coloca la opercion que estas haciendo
let operRealizada = document.getElementById("operacionRealizada")
//elemento donde se coloca el resultado
let txtResultado = document.getElementById("txtResultado");

//operador selccionado
let operadorSelccionado = "";

//numero ingresado
let numero = "";

//para determinar si lo ultimo presionada es un numero o una operacion
let ultimoDigitoPresionado = ""

function operador(num){
    numero = numero + num;
    parcial = parcial + num;
    operRealizada.innerHTML = parcial;

    //control a la division por 0
    if(numero=="0" && operadorSelccionado=="/"){
        limpiar();
        txtResultado.innerHTML = "Indefinido";
        return;
    }
    //guardo el tipo de tecla presionada por ultima vez
    if(ultimoDigitoPresionado=="operacion"){
        ultimoDigitoPresionado = "numero" 
    }
}

//Detecto cuando se presiona una operacion
function operacion(oper){
    //guardo la operacion que eligio
    operadorSelccionado = oper; 
    //actualizo el tipo de letra presionado
    ultimoDigitoPresionado = "operacion";
    //aramando la formula matematica
    parcial = parcial + oper;
    numero = 0;
    operRealizada.innerHTML = parcial;   
}

function calculo(){
    //con eval evaluo la formula matematica
    parcial = eval(parcial);
    txtResultado.innerHTML = parcial;
    parcial = parcial.toString();
    numero = "";
    operRealizada.innerHTML = parcial;  
}

function limpiar(){
    operadorSelccionado = "";
    parcial = "";
    txtResultado.innerHTML = "";
    numero = "";
    operRealizada.innerHTML = 0;    
}


