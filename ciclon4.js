// Seleção das caixas
const caixaFert1 = document.querySelector("#caixaFert1");
const caixaFert2 = document.querySelector("#caixaFert2");
const caixaFert3 = document.querySelector("#caixaFert3");
const caixaFert4 = document.querySelector("#caixaFert4");

// Botões de escolher
const btnFert1 = document.querySelector("#btn_escolher_bio1");
const btnFert2 = document.querySelector("#btn_escolher_bio2");
const btnFert3 = document.querySelector("#btn_escolher_bio3");

// Botões de voltar
const bvoltFert1 = document.querySelector("#btn_voltar_bio1");
const bvoltFert2 = document.querySelector("#btn_voltar_bio2");
const bvoltFert3 = document.querySelector("#btn_voltar_bio3");

// Todos os blocos de fertilizantes
const todosFertilizantes = [...document.querySelectorAll(".fertilizante")];

// Relação dos destinos corretos (resposta do jogo)
const destinosCorretos = {
  b2: caixaFert2, // Potencial explosivo → Nitrato de amônio
  b6: caixaFert2, // 33% de N → Nitrato de amônio
  b3: caixaFert3, // 46% de N → Ureia
  b5: caixaFert3, // Mais usado no mundo → Ureia
  b1: caixaFert4, // 21% de N → Sulfato de amônio
  b4: caixaFert4  // Fornece enxofre → Sulfato de amônio
};

// Selecionar e desmarcar
todosFertilizantes.forEach((el) => {
  el.addEventListener("click", (evt) => {
    evt.target.classList.toggle("selecionado2");
  });
});

// Função para mover fertilizantes
function moverFertilizantes(destinoCaixa, limite) {
  const selecionados = [...document.querySelectorAll(".selecionado2")];
  const espacoDisponivel = limite - destinoCaixa.children.length;

  if (selecionados.length > espacoDisponivel) {
    alert(`Esta caixa só pode conter ${limite} itens!`);
    return;
  }

  selecionados.forEach((el) => {
    const id = el.id;
    if (destinosCorretos[id] === destinoCaixa) {
      el.classList.remove("selecionado2", "erro2");
    } else {
      el.classList.add("erro2");
    }
    destinoCaixa.appendChild(el);
  });
}

// Funções dos botões "escolher"
btnFert1.addEventListener("click", () => moverFertilizantes(caixaFert2, 2)); // Nitrato de Amônio
btnFert2.addEventListener("click", () => moverFertilizantes(caixaFert3, 2)); // Ureia
btnFert3.addEventListener("click", () => moverFertilizantes(caixaFert4, 2)); // Sulfato de Amônio

// Funções dos botões "voltar"
function voltarFertilizantes() {
  const selecionados = [...document.querySelectorAll(".selecionado2, .erro2")];
  selecionados.forEach((el) => {
    caixaFert1.appendChild(el);
    el.classList.remove("selecionado2", "erro2");
  });
}

bvoltFert1.addEventListener("click", voltarFertilizantes);
bvoltFert2.addEventListener("click", voltarFertilizantes);
bvoltFert3.addEventListener("click", voltarFertilizantes);
