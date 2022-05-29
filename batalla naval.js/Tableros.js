//Se declaran dos vectores para los tableros
//Se declara el tamaño en 0, porque el usuario decide el tamaño
class Tableros{
    //Constructor
    constructor()
    { 
        this.vector = [];
        this.vector2 = [];
        this.vec2 = [];
        this.tam = 0;
    }

    //Primer metodo pide el tamaño y lo retorna
    //Se ocupa la funcion random para las posiciones
    posicion(limite)
    {
        return Math.floor((Math.random() * ((limite-1) - 0+1)) + 0);
    }
    //Metodo disparos para solicitar el tiro
    //Si dispara al tablero 2 (computadora) 
    //Si existe barco retorna que lo hundiste
    //De lo contrario si tiras al mismo numero retorna otra vez
    //Si tiras a un lugar sin barco, tiraste al mar
    disparos(lug)
    {
        if(this.vector2[lug] == "| B |")
        {
            this.vector2[lug] = "| D |";
            return 1;//TIRASTE AL BARCO
        }
        else if(this.vector2[lug]=="|D|")
        {
            return 2;//REPETISTE EL LUGAR
        }
        else
        {
            this.vector2[lug]="|D|";
            return 3;//TIRASTE AL MAR
        }
    }

    //Metodo disparos de la computadora
    //En el if dispara al tablero del usuario
    //Si existe barco, lo hunde
    //De lo contrario tira al mismo lugar si repite la posicion
    //Si da un tiro y no hay barco y no repite tira al mar
    disparoCompu(lug)
    {
        if(this.vector[lug])
        {
            this.vector[lug]="|D|";
            return 1;
        }
        else if(this.vector[lug]=="|D|")
        {
            return 2;
        }
        else
        {
            this.vector[lug]="|D|";
            return 3;
        }
    }  
    //Muestra tiros del usuario 
    mostrarRondas()
    {
        console.clear();
        alert ("\t Se termino el turno");
        for(let i=0;i<this.tam;i++){
            alert (i+"| "+this.vector[i]+"\t"+i+".-"+this.vec2[i]); 
        }
    }

    //Metodo para solicitar el tiro (posicion)
    //Ingresa el barco al vector del usuario
    barcos(lugar)
    {
        this.vector[lugar]="|B|";
    }
    
    //Metodo para solicitar el tiro (posicion)
    //Ingresa el barco al vector del computador
    barcosCompu(lugar)
    {
        this.vector2[lugar]="|B|";
    }

    //Metodo auxiliar para solicitar el tiro 
    //Ingresa el tiro al vector del computador
    //Indica al usuario donde tiro sin observar los barcos del computador.
    tiroAux(lu)
    {
        this.vec2[lu]="|D|";
    }
}
