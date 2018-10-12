/*Phase 1*/
let container;
container = document.getElementById("c1");

container.innerText = "Hola Mundo!"

container.style.backgroundColor = ("#000000");
container.style.color = ("#1cb723");
container.style.width = ("200px");
container.style.height = ("200px");

container.innerHTML = ("<input type=”text” placeholder=’Escriba su texto’></input>")

/*Phase 2*/
let containers = document.getElementsByClassName("c2")
let containers2 = document.querySelectorAll(".c2") /*This is the right way*/

containers2.forEach(element=>{element.style.backgroundColor = "#009999", element.innerHTML = "<input type='text' placeholder='Escriba su texto'>"})

/*Phase 3*/
let boton
boton = document.getElementById("btn-click")

boton.onclick = function(evt)
{
    alert("Hola Mundo");
}

let btnCopy
btnCopy = document.getElementById("btnCopy")

btnCopy.onclick = function(evt)
{
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}