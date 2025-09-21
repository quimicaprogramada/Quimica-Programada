const etapasCorretas = [
  "Presença de N₂ e O₂",
  "Energia fotoquímica (descargas elétricas na troposfera)",
  "Formação de NO e NO₂",
  "Presença de radicais livres (OH)",
  "Formação de HNO₃ e HNO₂",
  "Presença de chuva",
  "NO₃⁻ e NO₂⁻ fertilizam o solo"
];

const embaralhado = [...etapasCorretas].sort(() => Math.random() - 0.5);
const container = document.getElementById("cardContainer");

embaralhado.forEach((etapa, index) => {
  const li = document.createElement("li");
  li.className = "card";
  li.draggable = true;
  li.textContent = etapa;
  li.dataset.index = index;
  container.appendChild(li);
});

let dragged;

container.addEventListener("dragstart", e => {
  dragged = e.target;
});

container.addEventListener("dragover", e => {
  e.preventDefault();
});

container.addEventListener("drop", e => {
  if (e.target.classList.contains("card")) {
    const temp = dragged.textContent;
    dragged.textContent = e.target.textContent;
    e.target.textContent = temp;
    verificarOrdem();
  }
});

function verificarOrdem() {
  const cards = Array.from(container.children);
  const ordemAtual = cards.map(card => card.textContent);
  const correto = ordemAtual.every((etapa, i) => etapa === etapasCorretas[i]);

  if (correto) {
    cards.forEach(card => card.classList.add("correct"));
    const feedback = document.getElementById("feedback");
    feedback.style.display = "block";
    feedback.innerHTML = `
      <h3>Parabéns! Você ordenou corretamente.</h3>
      <p>Esse processo representa a rota atmosférica de fixação do nitrogênio, onde o N₂ e O₂ reagem sob ação de energia fotoquímica dos raios, formando óxidos de nitrogênio (NO, NO₂). Esses óxidos interagem com radicais OH e água, formando ácidos como HNO₃ e HNO₂. Com a chuva, esses compostos atingem o solo como nitrato (NO₃⁻) e nitrito (NO₂⁻), fertilizando e contribuindo para o ciclo biogeoquímico do nitrogênio.</p>
      <p> A sequência das reações químicas que ocorre é a seguinte:</p>

      <ul>
      <li> N<sub>2</sub> + O<sub>2</sub> + λ → 2NO  - descarga elétrica agindo sobre a reatividade do N<sub>2</sub></li>
      <li> 2NO + O<sub>2</sub> → 2NO<sub>2</sub> - oxidação do óxido nítrico </li>
      <li> NO + OH → HNO<sub>2</sub> - formação de ácido nitroso por reação com radicais hidroxilas </li>
      <li> NO<sub>2</sub> + OH → HNO<sub>3</sub> - formação de ácido nítrico por reação com radiciais hidroxilas </li>
      <li> HNO<sub>2</sub> + H<sub>2</sub>O → H<sub>3</sub>O<sup>+</sup> + NO<sub>2</sub><sup>-</sup> - íon nitrito chegam ao solo carregado através da chuva  </li>
      <li> HNO<sub>3</sub> + H<sub>2</sub>O → H<sub>3</sub>O<sup>+</sup> + NO<sub>3</sub><sup>-</sup> - íon nitrato chegam ao solo carregado através da chuva </li>
      </ul>
    `;
  }
}