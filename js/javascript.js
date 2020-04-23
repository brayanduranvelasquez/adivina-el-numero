// Variables
var mostrar_numero = document.getElementById('mostrar_numero');
var input = document.getElementById('input');
var mostrar_intentos = document.getElementById('mostrar_intentos');
var mostrar_numero = document.getElementById('mostrar_numero');
var resultado = document.getElementById('resultado');
var expresion_numero = /[0-9]+/;
var expresion_espacio = /[ ]+/;

var intentos = 5;
var numero_generado = Math.round(50 * Math.random(1));
if(numero_generado == 0){
    numero_generado++;
}

// Botones para agregar eventos

var btn_comenzar = document.getElementById('btn_comenzar');
var btn_inicio = document.getElementById('btn_inicio');
var btn_reintentar = document.getElementById('btn_reintentar');
var btn_procesar = document.getElementById('btn_procesar');

// Eventos

btn_comenzar.addEventListener('click', () =>{
    div_display('none', 'block', 'none');
    btn_inicio.style.display = 'block';
})

btn_inicio.addEventListener('click', () =>{
    reiniciar_valores();
    div_display('block', 'none', 'none');
    btn_inicio.style.display = 'none';
})

btn_reintentar.addEventListener('click', () =>{
    reiniciar_valores();
    div_display('none', 'block', 'none');
})

btn_procesar.addEventListener('click', () =>{

    if(!expresion_numero.test(input.value) || expresion_espacio.test(input.value)){
        // Si no es un numero, o contiene un espacio. Sacudira el input y lo limpiará
        sacudir_input();

    } else {
        // Se crea una variable con lo que se coloque en el input
        let numero_ingresado = input.value;

        if(numero_ingresado < 1 || numero_ingresado > 50 || isNaN(numero_ingresado)){
            sacudir_input();

        } else {
            // Si cumple con la condicional, se restara 1 a los intentos y se limpiara el contenido del input
            input.value = '';
            let = intentos = intentos - 1;

            if(intentos > 0){
                if(numero_ingresado > numero_generado){
                    mostrar_intentos.innerHTML = `
                    <p class="animacion_movida color_rojo">
                        ¡El ${numero_ingresado} es mayor al número generado! <br>Te quedan ${intentos} intentos
                    </p>`;
                } 
                else{
                    mostrar_intentos.innerHTML = `
                    <p class="animacion_movida color_rojo">
                        ¡El ${numero_ingresado} es menor al número generado! <br>Te quedan ${intentos} intentos
                    </p>`;
                }
            } // if
        
            else if(intentos == 0){
                resultado.innerHTML = '<span class="color_rojo">!Haz perdido!</span>';
                mostrar_numero.innerHTML = `El número correcto era el ${numero_generado}`;
                div_display('none','none','block');
            } // else if
        
            if(numero_ingresado == numero_generado){
                resultado.innerHTML = '<span class="color_verde">!Haz ganado!</span>';
                mostrar_numero.innerHTML = `El número es el ${numero_generado}`;
                div_display('none','none','block');
            }

        } // else -> Si es un numero entre el 1 al 50

    } // else -> Si es un numero y no contiene espacios

}) // evento click de btn_procesar

// Funciones

function div_display(dis_principal, dis_adivina, dis_fin){
    document.getElementById('principal').style.display = dis_principal;
    document.getElementById('adivina').style.display = dis_adivina; 
    document.getElementById('fin').style.display = dis_fin;
}

function reiniciar_valores(){
    intentos = 5;
    numero_generado = Math.round(50 * Math.random(1));
    if(numero_generado == 0){
        numero_generado++;
    }
    
    mostrar_intentos.innerHTML = `!Vamos nuevamente! <br> Tienes ${intentos} intentos`;
}

function sacudir_input(){
    input.classList.add('animacion_sacudida');

    setTimeout(() =>{
        input.classList.remove('animacion_sacudida');
    }, 500);
}
