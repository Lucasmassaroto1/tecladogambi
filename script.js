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

// ATIVA ANIMAÇÕES AO CLICAR NO TECLADO VIRTUAL
document.querySelectorAll(".tecla").forEach((tecla) => {
  tecla.addEventListener("touchstart", () => {
    tecla.classList.add("ativa"); // ADICIONA ANIMAÇÃO
  });

  tecla.addEventListener("touchend", () => {
    tecla.classList.remove("ativa"); // REMOVE ANIMAÇÃO
  });
});
