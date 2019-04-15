function prueba1(
    )
    {
        alert("archivo separado");
    }

    function operacionesmatematicas(){

        var aleatorio;
        aleatorio=Math.random();
        var valorpi=Math.PI;

        var seno90=Math.sin((90 * valorpi)/180);

        var perro=new Object();

        alert("aleatorio="+aleatorio+"valor de pi="+valorpi+""+" seno de 90 ="+ seno90+ " object perro="+ perro);


    }


/*radianes 

360->2pi radianes

90->


180-> pi rad
90->

*/ 
    

function persona()
{

    /*Variables privadas y locales que su alcance es solo dentro de la funcion persona */

    var nom="Sergio";
    var app="Merino";
    var apm="Cortez";
var edad=21;
/*para hacer propiedades se debe poner this */
/*esto seria como encapsulamiento */
this.Nombre=nom;
this.ApellidoP=app;
this.ApellidoM=apm;
this.Edad=edad;

/*alert("nueva instancia de la clase persona");*/

/*los metodos son similares a las prpiedades con la diferencia 
de que  un metodo ejecuta una accion y por lo tanto debe  ir declarado con una función  */




}
this.limpiardatos=function(numero1){
    this.Nombre="";
    this.ApellidoP="";
    this.ApellidoM="";
    this.Edad=numero1 + this.edad;
}


/*clase pila */


function pila5b(){

    var almacen=new Array();
    var localidad=0;//control de la posicion
    var tope;//cima de la pila

this.Push=function(nodo){

    almacen[localidad]=nodo;
    tope=almacen[localidad];
    localidad++;
   
    alert("ya se apilo un elemento");
}

this.Pop=function(){
    var salida;
    if(localidad>0)
    {
        salida=almacen[localidad-1];
        almacen[localidad]=null;
        localidad--;
        if(localidad>0)
        {
            
            tope=almacen[localidad-1];
    

        }
        else{
            tope=-10000;
        }

        alert("ya se desapilo un elemento");
        
    }
    else{
        alert("la pila esta vacia");
        salida=-10000;
    }
    return salida;

}

this.Obtencima=function(){
    return tope;
}

this.MostrarPila=function(){
    var conta=0;

    document.write("<h3> inicia pila </h3> <br>");
    for(conta=localidad-1;conta>=0;conta--){
        document.write(almacen[conta]+"<br>");
    }

    document.write("<h3>++++++++++++++++++++ </h3> <br>");
}

}