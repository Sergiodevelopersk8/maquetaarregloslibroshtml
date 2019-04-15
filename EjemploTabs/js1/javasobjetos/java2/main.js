/*prueba1();
operacionesmatematicas();*/
/*var alguien=new persona();
alert(alguien.Nombre+" " + alguien.ApellidoP+" "+alguien.ApellidoM+" "+" edad "+alguien.Edad);

alguien.limpiardatos(3);
alert(alguien.Nombre+" " + alguien.ApellidoP+" "+alguien.ApellidoM+" "+" edad "+alguien.Edad);*/


var pila1=new pila5b();

pila1.Push(123);
pila1.Push("hola");
pila1.Push(true);
pila1.Push(873);


pila1.MostrarPila();
pila1.Pop();
pila1.Pop();
pila1.MostrarPila();

alert("la cima es"+pila1.Obtencima());

