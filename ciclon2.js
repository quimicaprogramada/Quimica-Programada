const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const caixa3=document.querySelector("#caixa3")
const btn1=document.querySelector("#btn_escolher1")
const btn2=document.querySelector("#btn_escolher2")
const bvolt1=document.querySelector("#btn_voltar1")
const bvolt2=document.querySelector("#btn_voltar2")
const todosProcessos=[...document.querySelectorAll(".processo")]

const destinosCorretos = {
  p1: caixa2,
  p2: caixa3,
  p3: caixa2,
  p4: caixa3,
  p5: caixa3,
  p6: caixa2,
  p7: caixa2,
  p8: caixa3
};


todosProcessos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const processo=evt.target
        processo.classList.toggle("selecionado")
  })
})

btn1.addEventListener("click", () => {
  const processosSelecionados = [...document.querySelectorAll(".selecionado")];
  const espacoDisponivel = 4 - caixa2.children.length;

  processosSelecionados
    .filter((el) => el.parentElement === caixa1)
    .slice(0, espacoDisponivel)
    .forEach((el) => {
      const id = el.id;
      if (destinosCorretos[id] === caixa2) {
        el.classList.remove("selecionado", "erro");
      } else {
        el.classList.add("erro");
      }
      caixa2.appendChild(el);
    });

  if (processosSelecionados.length > espacoDisponivel) {
    alert("A caixa 3 só pode conter 3 produtos!");
  }
  verificarAcertoFinal();
});

btn2.addEventListener("click", () => {
  const processosSelecionados = [...document.querySelectorAll(".selecionado")];
  const espacoDisponivel = 4 - caixa3.children.length;

  processosSelecionados
    .filter((el) => el.parentElement === caixa1)
    .slice(0, espacoDisponivel)
    .forEach((el) => {
      const id = el.id;
      if (destinosCorretos[id] === caixa3) {
        el.classList.remove("selecionado", "erro");
      } else {
        el.classList.add("erro");
      }
      caixa3.appendChild(el);
    });

  if (processosSelecionados.length > espacoDisponivel) {
    alert("A caixa 4 só pode conter 3 produtos!");
  }
  verificarAcertoFinal();
});

bvolt1.addEventListener("click", () => {
  const processosSelecionados = [...document.querySelectorAll(".selecionado, .erro")];
  processosSelecionados.forEach((el) => {
    caixa1.appendChild(el);
    el.classList.remove("selecionado");
  });
});
bvolt2.addEventListener("click", () => {
  const processosSelecionados = [...document.querySelectorAll(".selecionado, .erro")];
  processosSelecionados.forEach((el) => {
    caixa1.appendChild(el);
    el.classList.remove("selecionado", "erro");
  });
});

function verificarAcertoFinal() {
  const todosIDs = Object.keys(destinosCorretos);
  const todosCorretos = todosIDs.every(id => {
    const elemento = document.getElementById(id);
    return elemento.parentElement === destinosCorretos[id] && !elemento.classList.contains("erro");
  });

  if (todosCorretos) {
    const feedback2 = document.getElementById("feedback2");
    feedback2.style.display = "block";
    feedback2.innerHTML = `
      <h3>🎉 Parabéns! Você classificou corretamente os processos industriais do ciclo do nitrogênio.</h3>
      <p>Você organizou as etapas da <strong>rota química industrial</strong> do nitrogênio:</p>
      <ul>
        <li><strong style="color: orange;">Processo Haber-Bosch</strong>: </li>
        <li> N₂ + 3H₂ → 2NH₃</li>
        <li> Uso de catalisador Fe₃O₄</li> 
        <li> Hidrogênio obtido a partir de origem fóssil (metano): CH₄ + H₂O → CO + 3H₂</li>
        <li> Alta temperatura (> 400°C)</li>
        <li> Alta pressão (cerca de 200 atm)</li>
        <li><strong style="color: orange;">Processo Bosch-Meiser</strong>:
        <li> Etapa 1 : 2NH₃ + CO₂ → NH₂COONH₄ (formação do carbamato de amônio)</li>
        <li> Etapa 2 : NH₂COONH₄ → CO(NH₂)₂ + H₂O (desidratação e formação da uréia) </li>
        <li> Temperatura em torno de 160 a 180°C e pressões entre 140 a 175 atm </li>
        <li> Produção de um dos fertilizantes mais usados na agricultura </li>
      </ul>
    `;
  }
}
