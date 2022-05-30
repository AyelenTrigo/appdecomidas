//BOTONES
let random = document.getElementById("random");
let heladera = document.getElementById("heladera");
let heladera2 = document.getElementById("heladera2");
let otroPlato = document.getElementById("otroPlato");

//PANTALLAS
let paginaComidas = document.getElementById("paginaComidas");
let paginaHeladera = document.getElementById("paginaHeladera");
let inicio = document.getElementById("inicio");
let paginaInicio = document.getElementById("inicio");

//otros
let titulo = document.getElementById("titulo");
let listaOpciones = document.getElementById("opcionales");
let ingredientes = document.getElementById("ingredientes");
let producto1 = document.getElementById("producto1");
let producto2 = document.getElementById("producto2");
let plato = document.getElementById("plato");

random.addEventListener("click", () => {
  platoRandom();
  paginaComidas.style.display = "block";
  paginaHeladera.style.display = "none";
  inicio.style.display = "none";
});

otroPlato.addEventListener("click", () => {
  platoRandom();
  paginaComidas.style.display = "block";
  paginaHeladera.style.display = "none";
  inicio.style.display = "none";
});

heladera.addEventListener("click", () => {
  paginaHeladera.style.display = "block";
  paginaComidas.style.display = "none";
  inicio.style.display = "none";
});

heladera2.addEventListener("click", () => {
  paginaHeladera.style.display = "block";
  paginaComidas.style.display = "none";
  inicio.style.display = "none";
});

const platoRandom = () => {
  resetOpciones();

  let randomP = Math.floor(Math.random() * principal.length);

  let randomA = Math.floor(Math.random() * (acompañamiento.length - 5) + 5);

  if (principal[randomP].Nombre != "Pastas") {
    plato.innerHTML = `${principal[randomP].Nombre} con ${acompañamiento[randomA].Nombre}`;

    console.log(
      [randomP],principal[randomP].Nombre,"con",[randomA],acompañamiento[randomA].Nombre);

  } else {
    randomA = Math.floor(Math.random() * 5);
    //pongo *5 porque son 5 elementos
    plato.innerHTML = `${principal[randomP].Nombre} con ${acompañamiento[randomA].Nombre}`;

    console.log([randomP],principal[randomP].Nombre,"con",[randomA],acompañamiento[randomA].Nombre);
  }
  
  let opcionesPrincipal = principal[randomP].tipo;
  let opcionesAcompañamiento = acompañamiento[randomA].ing;

  imprimirOpciones(opcionesPrincipal,opcionesAcompañamiento);
}

function imprimirOpciones(opcionesPrincipal,opcionesAcompañamiento){

  for (let i = 0; i < opcionesPrincipal.length; i++) {
    let opcionP = document.createElement("li");
    let txt = document.createTextNode(opcionesPrincipal[i]);
    opcionP.appendChild(txt);
    listaOpciones.appendChild(opcionP);
  }
  for (let i = 0; i < opcionesAcompañamiento.length; i++) {
    let opcionA = document.createElement("li");
    let txt = document.createTextNode(opcionesAcompañamiento[i]);
    opcionA.appendChild(txt);
    ingredientes.appendChild(opcionA);
  }
}

function resetOpciones() {
  if (listaOpciones.hasChildNodes()) {
    while (listaOpciones.childNodes.length >= 1) {
      listaOpciones.removeChild(listaOpciones.firstChild);
    }
  }
  if (ingredientes.hasChildNodes()) {
    while (ingredientes.childNodes.length >= 1) {
      ingredientes.removeChild(ingredientes.firstChild);
    }
  }
}
