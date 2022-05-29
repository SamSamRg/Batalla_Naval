
//Declaramos variables a utilizar

let tabla=new Tableros(); 
var vectorAux=[], vectorAuxCompu=[];
var band = false, b=false,Victoria=false;
var t=0, cantBarcos = 0, i=0, posiBarcos=0, ta=0, tiros=0,ataque=0, ataqueCompu=0, contador1=0, contador2=0, condi=0, opc=0;
 
    alert (" ****  BATALLA NAVAL  *** ");
    opc = prompt ("Por favor presione 1 para comenzar a jugar");
    if (opc==1){
    do{//repetir hasta que el tamaño sea mayor a 5  
        ta = prompt ("¿Cuantas casillas quieres en tu tablero?");
        if(ta>=5){  
            b=true; }
        else{
            alert ("El numero minimo es 5");
            alert ("Ingresa un numero mayor"); 
            b=false;}
    }while(b!=true);    

    //Con el uso del while solicitamos los barcos
    //Dentro de nuestro juego son 4 barcos
    //Posicionamos los barcos 
    while(cantBarcos<4){
        do{
            posiBarcos=prompt("Ingrese la posicion de su barco "+cantBarcos);
            condi=posiBarcos;
            if(condi >=0){
                if(condi<=(ta-1)){
                    if(posiBarcos!=vectorAux[(posiBarcos-1)]){
                        band=true;
                        alert("Barco posicionado correctamente"); 
                        tabla.barcos(posiBarcos);
                        vectorAux[(posiBarcos-1)]=posiBarcos;
                    }else{
                        band=false;
                        alert("Ya esta ocupado, vuelve a posicionar");
                    }
                }else{
                    alert("Posicion fuera del rango, intenta de nuevo ");
                band=false;
                }
            }else{
                alert("Posicion fuera del rango, intenta de nuevo");
                band=false;
            }
        }while(band!=true);
        cantBarcos++; 
    }
    
    //Metodo para crear el tablero del computador
    cantBarcos = 0;
    while(cantBarcos<4){
        do{
            posiBarcos=tabla.posicion(ta);
            if(posiBarcos!=vectorAuxCompu[(posiBarcos-1)]){
                band=true;
                tabla.barcosCompu(posiBarcos);
                vectorAuxCompu[(posiBarcos-1)]=posiBarcos;
            }else{
                band=false;
            }
        }while(band!=true);
        cantBarcos++; 
    }

    //Una vez creados los tableros y posicionados los barcos
    //Se comienza el juego
    //Se turnaran los tiros hasta que uno se quede sin barcos y gane el otro 
    //una vez que hallas tirado un barco el contador1 aumentara en 1
    alert("COMENCEMOS");
    Victoria=false;
    do{
       //Turno del usuario
        do{
            tiros = prompt("Ingrese un numero entre el 0 y "+(ta-1));
            ataque=tabla.disparos(tiros);
           
            if(ataque==1){
                contador1++;
                alert("¡Le has hundido un barco!");
                if(contador1<4){
                    alert("Tira de nuevo");
                }
            }else if(ataque==2){
                alert("¡Ya has tirado aqui!");
                alert("Intenta de nuevo");
            }else{
                alert("¡Has dado en el mar!");
            }
            //Guardar proyectiles en un metodo para despues mostralos
            //Si el usuario alcanzo a derribar los 4 barcos se dara la vitoria a este
            tabla.tiroAux(tiros);
            if(contador1==4){
                ataque=2;
                Victoria=true;
                alert("¡GANASTE!!!!");
            }
        }while(ataque!=3);
        ataque=0;
        if(Victoria==false){//Si el usuario aun no gana es turno del computador
            alert("Turno del Computador");
            do{
                tiros = tabla.posicion(ta);
                ataqueCompu=tabla.disparoCompu(tiros); 
                if(ataqueCompu==1){
                    contador2++;
                    alert(" Computador hundio tu barco! ");
                    if(contador2<4){
                        alert("Computador vuelve a tirar");
                    }
                }else if(ataqueCompu==2){
                    alert("Computador ya habia tirado ahi");
                    alert("Computador intentara de nuevo");
                }else{
                    alert("Computador tiro al mar");
                }
                if(contador2==4){
                    ataqueCompu=3;
                    Victoria=true;
                    alert("TE GANO EL COMPUTADOR!!!!");
                }
            }while(ataqueCompu!=3);
        }
        ataqueCompu=0;

        //Metodo que muestras los tiros del computador 
        //Las rondas actuales
        tabla.mostrarRondas();
    }while(Victoria!=true);
}