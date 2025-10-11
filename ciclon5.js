// ============================
// CICLON 5 - Efeitos Nitrogenados
// ============================

// Seleção das caixas
const caixaNitro5a = document.querySelector("#caixaNitro5a");
const caixaNitro5b = document.querySelector("#caixaNitro5b");
const caixaNitro5c = document.querySelector("#caixaNitro5c");

// Botões de escolher
const btnEscolherN5a = document.querySelector("#btn_escolher_n5a");
const btnEscolherN5b = document.querySelector("#btn_escolher_n5b");

// Botões de voltar
const btnVoltarN5a = document.querySelector("#btn_voltar_n5a");
const btnVoltarN5b = document.querySelector("#btn_voltar_n5b");

// Todos os cartões nitrogenados
const todosN5 = [...document.querySelectorAll(".card-n5")];

// Relação dos destinos corretos
const destinosCorretosN5 = {
  n5b2: caixaNitro5b, // Formação de ozônio → NOx
  n5b4: caixaNitro5b, // Chuva ácida → NOx
  n5b6: caixaNitro5b, // Efeito estufa → NOx
  n5b1: caixaNitro5c, // Eutrofização → NH3 e NO3
  n5b3: caixaNitro5c, // Síndrome do bebê azul → NH3 e NO3
  n5b5: caixaNitro5c  // Diminuição de O2 dissolvido → NH3 e NO3
};

// Selecionar e desmarcar
todosN5.forEach((el) => {
  el.addEventListener("click", (evt) => {
    evt.target.classList.toggle("sel-n5");
  });
});

// Função para mover compostos
function moverNitro5(destino, limite) {
  const selecionados = [...document.querySelectorAll(".sel-n5")];
  const espaco = limite - destino.children.length;

  if (selecionados.length > espaco) {
    alert(`Esta caixa só pode conter ${limite} itens!`);
    return;
  }

  selecionados.forEach((el) => {
    const id = el.id;
    if (destinosCorretosN5[id] === destino) {
      el.classList.remove("sel-n5", "err-n5");
    } else {
      el.classList.add("err-n5");
    }
    destino.appendChild(el);
  });
}

// Funções dos botões "escolher"
btnEscolherN5a.addEventListener("click", () => moverNitro5(caixaNitro5b, 3));
btnEscolherN5b.addEventListener("click", () => moverNitro5(caixaNitro5c, 3));

// Função "voltar"
function voltarNitro5() {
  const selecionados = [...document.querySelectorAll(".sel-n5, .err-n5")];
  selecionados.forEach((el) => {
    caixaNitro5a.appendChild(el);
    el.classList.remove("sel-n5", "err-n5");
  });
}

btnVoltarN5a.addEventListener("click", voltarNitro5);
btnVoltarN5b.addEventListener("click", voltarNitro5);
