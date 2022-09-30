// en css se hace así:
//h1 {color: red}
// .parrafito {...}
// #pid {...}

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.getElementsByClassName("parrafito");
const pid=document.getElementById("pid");
const input= document.querySelector("input");

console.log(input.value); //sirve para mostrar lo que los usuarios escriben en la consola

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerHTML = "Patito <br> Feo"; //CONVIERTE A CÓDIGO HTML
h1.innerText= "Patito <br> Feo"; //COVIENTE A CÓDIGO TEXTO

//forma de modificar los atributos html en js
console.log(h1.getAttribute("class")); 
h1.setAttribute("class", "rojo");

//para modificar clases en especifico
h1.classList.add("rojo");
h1.classList.remove("verde");
//h1.classList.toggle("Verde") para poner y quitar una clase
//h1.classList.contains("verde") es una condicional que devuelve true o false dependiendo de la condicional que ?

input.value = "456"

//forma de agregar una imagen que no se encuentra contenida en el HTML

const img = document.createElement("img");
img.setAttribute("src, "https://images5.alphacoders.com/118/1182655.jpg");
console.log(img)

pid.innerHTML = ""//para borrar el parrafo
pid.append(img); //agregan el elemento luego del contenido del parrafo

const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2"); //# selector de id
const btn = document.querySelector("#btnCalcular"); 
const pResult= document.querySelector("#result");
const form = document.querySelector("#form");

btn.addEventListener("click"; btnOnClick);

function btnOnClick (){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText="Resultado: " + sumaInputs;
}

//en caso de formularios
form.addEventListener("submit"; sumarInputValues); 

function sumarInputValues (event){
    event.preventDefault(); //para que no se recargue directamente la pagina porque lee el último boton como tipo Submit
    const sumaInputs = input1.value + input2.value;
    pResult.innerText="Resultado: " + sumaInputs;
}


//se le puede agregar al button type="button"
form.addEventListener("clcik"; sumarInputValues); 

function sumarInputValues (event){
    event.preventDefault(); //para que no se recargue directamente la pagina
    const sumaInputs = input1.value + input2.value;
    pResult.innerText="Resultado: " + sumaInputs;
}