function ModificaporDom()
{
    /*primero se obtiene la referencia al div del html atraves del id */
var undiv=document.getElementById('interno2');
alert(undiv.nodeName);

/*para alterar el contenido del div primero se debe crear un nodo de texto y luego asociar ese nodo de texto como un hijo del div */

var nuevonodo=document.createTextNode("pinshe profe mamon");
undiv.appendChild(nuevonodo);
}

/*getElementbyId.obtiene referencia por elemento id*/