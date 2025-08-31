const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const caixa3=document.querySelector("#caixa3")
const caixa4=document.querySelector("#caixa4")
const btn1=document.querySelector("#btn_escolher1")
const btn2=document.querySelector("#btn_escolher2")
const btn3=document.querySelector("#btn_escolher3")
const bvolt1=document.querySelector("#btn_voltar1")
const bvolt2=document.querySelector("#btn_voltar2")
const bvolt3=document.querySelector("#btn_voltar3")
const todosProdutos=[...document.querySelectorAll(".produto")]

const destinosCorretos = {
  p1: caixa2,
  p6: caixa2,
  p9: caixa2,
  p2: caixa3,
  p5: caixa3,
  p8: caixa3,
  p3: caixa4,
  p4: caixa4,
  p7: caixa4
};


todosProdutos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const produto=evt.target
        produto.classList.toggle("selecionado")
  })
})

btn1.addEventListener("click", () => {
  const produtosSelecionados = [...document.querySelectorAll(".selecionado")];
  const espacoDisponivel = 3 - caixa2.children.length;

  produtosSelecionados
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

  if (produtosSelecionados.length > espacoDisponivel) {
    alert("A caixa 2 só pode conter 3 produtos!");
  }
});

btn2.addEventListener("click", () => {
  const produtosSelecionados = [...document.querySelectorAll(".selecionado")];
  const espacoDisponivel = 3 - caixa3.children.length;

  produtosSelecionados
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

  if (produtosSelecionados.length > espacoDisponivel) {
    alert("A caixa 3 só pode conter 3 produtos!");
  }
});

btn3.addEventListener("click", () => {
  const produtosSelecionados = [...document.querySelectorAll(".selecionado")];
  const espacoDisponivel = 3 - caixa4.children.length;

  produtosSelecionados
    .filter((el) => el.parentElement === caixa1)
    .slice(0, espacoDisponivel)
    .forEach((el) => {
      const id = el.id;
      if (destinosCorretos[id] === caixa4) {
        el.classList.remove("selecionado", "erro");
      } else {
        el.classList.add("erro");
      }
      caixa4.appendChild(el);
    });

  if (produtosSelecionados.length > espacoDisponivel) {
    alert("A caixa 4 só pode conter 3 produtos!");
  }
});

bvolt1.addEventListener("click", () => {
  const produtosSelecionados = [...document.querySelectorAll(".selecionado, .erro")];
  produtosSelecionados.forEach((el) => {
    caixa1.appendChild(el);
    el.classList.remove("selecionado");
  });
});
bvolt2.addEventListener("click", () => {
  const produtosSelecionados = [...document.querySelectorAll(".selecionado, .erro")];
  produtosSelecionados.forEach((el) => {
    caixa1.appendChild(el);
    el.classList.remove("selecionado", "erro");
  });
});
bvolt3.addEventListener("click", () => {
  const produtosSelecionados = [...document.querySelectorAll(".selecionado, .erro")];
  produtosSelecionados.forEach((el) => {
    caixa1.appendChild(el);
    el.classList.remove("selecionado", "erro");
  });
});






