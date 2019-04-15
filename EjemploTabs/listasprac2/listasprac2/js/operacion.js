
var btnagreg=document.getElementById("bagregar");
//paraellunescompa por sersk8


var Almacenlib =[];
var incremento=0;
//el definitivo
function UNOO()
{
     id=document.getElementById("txtid").value;
     autor=document.getElementById("txtautor").value;
     titulo=document.getElementById("txttitulo").value;
     edicion=document.getElementById("txtedicion").value;
     anio=document.getElementById("txtanio").value;
   
 

    

    
  
}

function libro(id1,autor1,titulo1,edicion1,anio1)
{
    this.id=id1;
    this.autor=autor1;
    this.titulo=titulo1;
    this.edicion=edicion1;
    this.anio=anio1;
}

function agregar()
{
    UNOO();
    nuevoLibro = new libro(id,autor,titulo,edicion,anio);
    Almacenlib.push(nuevoLibro);
    
  
    document.getElementById("listaslibros").innerHTML+='<option>'+nuevoLibro.id+" "+nuevoLibro.autor+" "+nuevoLibro.titulo+" "+nuevoLibro.edicion+" "+nuevoLibro.anio;
   // document.getElementById("listaslibros").innerHTML += '<option>' + id+ autor+titulo+ edicion+anio;
   
    incremento++;
  /** actualizar(); */
    console.log(Almacenlib);
    
}
function buscar()
{
   
 
    
}

function myOnload(){
cargarlibros();
}

function cargarlibros() {
  
   // agregar();
    // Ordena el Array Alfabeticamente, es muy facil ;)):
    //agregar.sort();
   
    addOptions("listaslibros", Almacenlib);
   }


   function actull1(){
      document.getElementById("listabusca") .innerHTML="";
      for(imprimir=0;imprimir<=Almacenlib.length-1;imprimir++){

        document.getElementById("listabusca").innerHTML += '<option>' + Almacenlib[imprimir].id+Almacenlib[imprimir].autor+Almacenlib[imprimir].titulo+Almacenlib[imprimir].edicion+Almacenlib[imprimir].anio;
   

      }
   }

   function skateordie(){
    document.getElementById("listabusca") .innerHTML="";
    for(imprimir=0;imprimir<=Almacenlib.length-1;imprimir++){

      document.getElementById("listabusca2").innerHTML += '<option>' + Almacenlib[imprimir].id+Almacenlib[imprimir].autor+Almacenlib[imprimir].titulo+Almacenlib[imprimir].edicion+Almacenlib[imprimir].anio;
 

    }
 }

 function perroloco(){
    document.getElementById("listabusca") .innerHTML="";
    for(imprimir=0;imprimir<=Almacenlib.length-1;imprimir++){

      document.getElementById("listabusca3").innerHTML += '<option>' + Almacenlib[imprimir].id+Almacenlib[imprimir].autor+Almacenlib[imprimir].titulo+Almacenlib[imprimir].edicion+Almacenlib[imprimir].anio;
 

    }
 }


function modificar(){
    
   
var encuentra=document.getElementById("buscaa").value;
var id2=document.getElementById("txtid").value;
 var autor2=document.getElementById("txtautor").value;
 var titulo2=document.getElementById("txttitulo").value;
  var   edicion2=document.getElementById("txtedicion").value;
   var  anio2=document.getElementById("txtanio").value;
for(var bus=0;bus<Almacenlib.length;bus++){
    if(Almacenlib[bus].id===encuentra){
      
        Almacenlib[bus].id=id2;
        Almacenlib[bus].autor=autor2;
        Almacenlib[bus].titulo=titulo2;
        Almacenlib[bus].edicion=edicion2;
        Almacenlib[bus].anio=anio2;
        actull1();
     

    }
}
//document.getElementById("listaslibros").innerHTML+='<option>'+nuevoLibro.id+nuevoLibro.autor+nuevoLibro.titulo+nuevoLibro.edicion+nuevoLibro.anio;
   
}

function libroexiste(){
   // document.getElementById("listabusca3").innerHTML='';
    
//var encuentra2=document.getElementById("buscaa").value;
for(var bus=0;bus<Almacenlib.length;bus++){
    
    //document.getElementById("listabusca3").innerHTML+=;
        
    /*document.getElementById("listabusca3").innerHTML +='<option>'+Almacenlib[bus].id+Almacenlib[bus].autor;*/
   
    document.getElementById("listabusca3").innerHTML += '<option>' + Almacenlib[bus].id+Almacenlib[bus].autor+Almacenlib[bus].titulo+Almacenlib[bus].edicion+Almacenlib[bus].anio;
    perroloco();
 
    
}

}



function eliminardelist(){
    var htmllista=document.getElementById("listaslibros");

    if(htmllista.selectedIndex >-1){
var index=htmllista.selectedIndex;
Almacenlib.splice(index,1);
       // document.getElementById("listaslibros").innerHTML+='<option>'+listaslibros.id+listaslibros.libro;
       
       var sel = document.getElementById("listaslibros");
       sel.remove(sel.selectedIndex,Almacenlib);
    }
    
   
}




function eliminardelist2(){
    var htmllista=document.getElementById("listaslibros");

    /*if(htmllista===id){/**
var index=htmllista.selectedIndex; */
/*listaslibros.splice(index,1);
        document.getElementById("listaslibros").innerHTML+='<option>'+listaslibros.id+listaslibros.libro;
   
}*/
    var sel = document.getElementById("listaslibros");
    num = sel.selectedIndex;    
    sel.remove(sel.selectedIndex,Almacenlib);
 
    Almacenlib[nuevoLibro].remove(num);   
    


  
    
   
}
/*function loclalizar(){
    var localibro=Almacenlib.filter(function (el){
var localibro2=document.getElementById("buscaa").value;
return (el.titulo===localibro2);
    });

    var imprimir=localibro[0];
    for(var poner in imprimir)
    {
        document.getElementById("listabusca2").innerHTML +='<option>'+imprimir[poner];
   
    }

}*/

function buscarmetodo2 (){
  
        
        var localibro2=document.getElementById("buscaa").value;
        for(var bus=0;bus<incremento+1;bus++){
           
        if(Almacenlib[bus].id==localibro2){
           
           
                document.getElementById("listabusca2").innerHTML +='<option>'+Almacenlib[bus].titulo+Almacenlib[bus].autor;
                skateordie();
        }
    }
        
}

function eliminarporbusqueda(){
    var eliminabusq=document.getElementById("buscaa").value;
    for(var bus=0;bus<Almacenlib.length-1;bus++){
        if(eliminabusq===Almacenlib[bus].titulo){
            Almacenlib.splice(bus,1);
            var sel = document.getElementById("listaslibros");
       sel.remove(Almacenlib);

        }
    }

}
btnagreg.addEventListener('click',agregar);





