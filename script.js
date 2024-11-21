// ELEMENTOS DO TECLADO
const linhasTeclas = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ç"],
  ["z", "x", "c", "v", "b", "n", "m"],
  ["Espace"]
];
// REFERÊNCIA AO ELEMENTO TECLADO
const teclado = document.querySelector(".teclado");
// FUNÇÃO PARA CRIAR O TECLADO
linhasTeclas.forEach((linha) =>{
  const divLinha = document.createElement("div");
  divLinha.classList.add("linha");

  linha.forEach((tecla) =>{
    const divTecla = document.createElement("div");
    divTecla.classList.add("tecla");
    divTecla.textContent = tecla;

    if (tecla.toLowerCase() === "espace"){
      divTecla.classList.add("space");
    }

    divLinha.appendChild(divTecla);
  });

  teclado.appendChild(divLinha);
});
// ADICIONA O LINK PARA O GITHUB
const link = document.createElement("a");
link.href = "https://github.com/Lucasmassaroto1";
link.target = "_blank";
link.textContent = "@Lucasmassaroto1";
teclado.appendChild(link);
// CRIA A ANIMAÇÃO
document.addEventListener("keydown", (event) =>{
  const key = event.key.toUpperCase(); // CAPTURA TECLA PRESSIONADA
  const teclas = document.querySelectorAll(".tecla");

  teclas.forEach((tecla) =>{
    if (tecla.classList.contains("space") && key === " "){
      tecla.classList.add("ativa");// ADICIONA ANIMAÇÃO
    } else if (tecla.textContent.toUpperCase() === key){
      tecla.classList.add("ativa");// ADICIONA ANIMAÇÃO
    }
  });
});

document.addEventListener("keyup", (event) =>{
  const key = event.key.toUpperCase(); // CAPTURA TECLA PRESSIONADA
  const teclas = document.querySelectorAll(".tecla");

  teclas.forEach((tecla) =>{
    if (tecla.classList.contains("space") && key === " "){
      tecla.classList.remove("ativa"); // REMOVE ANIMAÇÃO
    } else if (tecla.textContent.toUpperCase() === key){
      tecla.classList.remove("ativa"); // REMOVE ANIMAÇÃO
    }
  });
});
