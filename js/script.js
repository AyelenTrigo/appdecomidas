//BOTONES
let random = document.getElementById("random");
let heladera = document.getElementById("heladera");
let volver = document.getElementById("volver");
let otroRandom = document.getElementById("otroRandom");
let otroPlato = document.getElementById("otroPlato");
let verComidas = document.getElementById("verComidas");
let ayuda = document.getElementById("ayuda");
let cerrarAyuda = document.getElementById("cerrarAyuda");

//PANTALLAS
let paginaComidas = document.getElementById("paginaComidas");
let paginaHeladera = document.getElementById("paginaHeladera");
let inicio = document.getElementById("inicio");
let paginaInicio = document.getElementById("inicio");
let muestraAyuda = document.getElementById("muestraAyuda");

//otros
let titulo = document.getElementById("titulo");
let listaOpciones = document.getElementById("opcionales");
let ingredientes = document.getElementById("ingredientes");
let producto1 = document.getElementById("producto1");
let producto2 = document.getElementById("producto2");
let plato = document.getElementById("plato");
let validacion = document.getElementById("validacion");
let verRecetaP = document.getElementById("verRecetaP");
let ups = document.getElementById("ups");
let opcionesPrincipal=[]
let opcionesAcompañamiento=[]

random.addEventListener("click", () => {
  opcionesPrincipal=[]
  opcionesAcompañamiento=[]
  resetOpciones()
  platoRandom();
  otroRandom.style.display = "block";
  otroPlato.style.display = "none";
  paginaComidas.style.display = "block";
  paginaHeladera.style.display = "none";
  inicio.style.display = "none";
});

otroRandom.addEventListener("click", () => {
  resetOpciones();
  platoRandom();
  paginaComidas.style.display = "block";
  paginaHeladera.style.display = "none";
  inicio.style.display = "none";
});

heladera.addEventListener("click", () => {
  paginaHeladera.style.display = "block";
  paginaComidas.style.display = "none";
  inicio.style.display = "none";
  ups.style.display = "none";
});

volver.addEventListener("click", () => {
  paginaHeladera.style.display = "none";
  paginaComidas.style.display = "none";
  inicio.style.display = "flex";
  muestraAyuda.style.display = "none"
});

const platoRandom = () => {
  resetOpciones();
  opcionesPrincipal=[]
  opcionesAcompañamiento=[]
  let randomP = Math.floor(Math.random() * principal.length);
  let randomA = Math.floor(Math.random() * (acompañamiento.length - 5) + 5);

  if (principal[randomP].Nombre != "Pastas") {
    plato.innerHTML = `${principal[randomP].Nombre} con ${acompañamiento[randomA].Nombre}`;
    //verRecetaP.innerHTML = `${principal[randomP].Receta}`
    // console.log ( [randomP], principal[randomP].Nombre, "con", [randomA], acompañamiento[randomA].Nombre );
  } else {
    randomA = Math.floor(Math.random() * 5);
    //pongo *5 porque son 5 elementos
    plato.innerHTML = `${principal[randomP].Nombre} con ${acompañamiento[randomA].Nombre}`;
    //verRecetaP.innerHTML = `${principal[randomP].Receta}`
    // console.log ( [randomP], principal[randomP].Nombre, "con", [randomA], acompañamiento[randomA].Nombre );
  }

  opcionesPrincipal = principal[randomP].Ing;
  opcionesAcompañamiento = acompañamiento[randomA].ing;

  imprimirPrincipal(opcionesPrincipal)
  imprimirAcompañamiento(opcionesAcompañamiento)
};

let mainDish;
let sideDish;
let arrayMain = [];
let arraySide = [];
let randomMain;
let randomSide;
//let recetaMain = [];
//let recetaSide = [];

function elegirIngredientes() {
  opcionesPrincipal=[];
  opcionesAcompañamiento=[];
  principal.forEach((objeto) => {
    for (let i = 0; i < objeto.Ing.length; i++) {
      let element = objeto.Ing[i];
      element = element.toLowerCase()
      producto1.value = producto1.value.toLowerCase()
      producto2.value = producto2.value.toLowerCase()
      if (element.includes(producto1.value)|| element.includes (producto2.value)) {
        mainDish = objeto.Nombre;
        arrayMain.push(mainDish);
        opcionesPrincipal.push(objeto.Ing)
        recetaMain.push(objeto.Receta)
      }else{
        ups.style.display = "block";
      }
    }
  });
  // principal.forEach((objeto) => {
  //   let nuevoarray = objeto.Ing.filter(element => element == producto1.value|| element == producto2.value)
  //   console.log(nuevoarray)
  // })

  //console.log(arrayMain)
  acompañamiento.forEach((objeto) => {
    for (let i = 0; i < objeto.ing.length; i++) {
      let element = objeto.ing[i];
      element = element.toLowerCase()
      producto1.value = producto1.value.toLowerCase()
      producto2.value = producto2.value.toLowerCase()
      if (element.includes(producto1.value)|| element.includes (producto2.value)) {
        sideDish = objeto.Nombre;
        arraySide.push(sideDish);
        opcionesAcompañamiento.push(objeto.ing)
        //recetaSide.push(objeto.Receta)
      }
    }
  });
    //console.log(arraySide)
  randomMain = Math.floor(Math.random() * arrayMain.length);
  randomSide = Math.floor(Math.random() * arraySide.length);
  //console.log(arrayMain[randomMain], "con", arraySide[randomSide]);
  plato.innerHTML = `${arrayMain[randomMain]} con ${arraySide[randomSide]}`;
  //verRecetaP.innerHTML = `${recetaMain[randomMain]}`

  opcionesPrincipal=opcionesPrincipal[randomMain]
  opcionesAcompañamiento=opcionesAcompañamiento[randomSide]

  imprimirPrincipal(opcionesPrincipal)
  imprimirAcompañamiento(opcionesAcompañamiento);
}
function imprimirPrincipal(){
  for (let i = 0; i < opcionesPrincipal.length; i++) {
    let opcionP = document.createElement("li");
    let txt = document.createTextNode(opcionesPrincipal[i]);
    opcionP.appendChild(txt);
    listaOpciones.appendChild(opcionP);
  }
}
function imprimirAcompañamiento() {
    for (let i = 0; i < opcionesAcompañamiento.length; i++) {
      let opcionA = document.createElement("li");
      let txt = document.createTextNode(opcionesAcompañamiento[i]);
      opcionA.appendChild(txt);
      ingredientes.appendChild(opcionA);
    }
}

verComidas.addEventListener("click", (e) => {
  e.preventDefault();
  resetOpciones();
  opcionesPrincipal=[];
  opcionesAcompañamiento=[];
  arrayMain = [];
  arraySide = [];
  if (producto1.value == "" || producto2.value == "") {
    validacion.style.display = "block";
  } else {
    elegirIngredientes();
    validacion.style.display = "none";
    otroPlato.style.display = "block";
    otroRandom.style.display = "none";
    paginaComidas.style.display = "block";
    paginaHeladera.style.display = "none";
    inicio.style.display = "none";
  }
});

otroPlato.addEventListener("click", (e) => {
  e.preventDefault();
  resetOpciones();
  arrayMain = [];
  arraySide = [];
  //recetaMain = []
  //recetaSide =[];
  opcionesPrincipal=[];
  opcionesAcompañamiento=[];
  elegirIngredientes();
});

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
ayuda.addEventListener("click", () =>{
    muestraAyuda.style.display = "block"
})
cerrarAyuda.addEventListener("click", () =>{
  muestraAyuda.style.display = "none"
})