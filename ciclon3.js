const caixaBio1 = document.querySelector("#caixaBio1");
const caixaBio2 = document.querySelector("#caixaBio2");
const caixaBio3 = document.querySelector("#caixaBio3");
const caixaBio4 = document.querySelector("#caixaBio4");
const caixaBio5 = document.querySelector("#caixaBio5");
const btnBio1=document.querySelector("#btn_escolher_bio1")
const btnBio2=document.querySelector("#btn_escolher_bio2")
const btnBio3=document.querySelector("#btn_escolher_bio3")
const btnBio4=document.querySelector("#btn_escolher_bio4")
const bvoltBio1=document.querySelector("#btn_voltar_bio1")
const bvoltBio2=document.querySelector("#btn_voltar_bio2")
const bvoltBio3=document.querySelector("#btn_voltar_bio3")
const bvoltBio4=document.querySelector("#btn_voltar_bio4")
const todosBioprocessos=[...document.querySelectorAll(".bioprocesso")]

const destinosCorretos2 = {
  b1: caixaBio5,
  b2: caixaBio3,
  b3: caixaBio2,
  b4: caixaBio4,
  b5: caixaBio3,
  b6: caixaBio2
};


todosBioprocessos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const bioprocesso=evt.target
        bioprocesso.classList.toggle("selecionado2")
  })
})

btnBio1.addEventListener("click", () => {
  const bioprocessosSelecionados = [...document.querySelectorAll(".selecionado2")];
  const espacoDisponivel = 2 - caixaBio2.children.length;

  bioprocessosSelecionados
    .filter((el) => el.parentElement === caixaBio1)
    .slice(0, espacoDisponivel)
    .forEach((el) => {
      const id = el.id;
      if (destinosCorretos2[id] === caixaBio2) {
        el.classList.remove("selecionado2", "erro2");
      } else {
        el.classList.add("erro2");
      }
      caixaBio2.appendChild(el);
    });

  if (bioprocessosSelecionados.length > espacoDisponivel) {
    alert("A caixa 2 só pode conter 2 itens!");
  }
});

btnBio2.addEventListener("click", () => {
  const bioprocessosSelecionados = [...document.querySelectorAll(".selecionado2")];
  const espacoDisponivel = 2 - caixaBio3.children.length;

  bioprocessosSelecionados
    .filter((el) => el.parentElement === caixaBio1)
    .slice(0, espacoDisponivel)
    .forEach((el) => {
      const id = el.id;
      if (destinosCorretos2[id] === caixaBio3) {
        el.classList.remove("selecionado2", "erro2");
      } else {
        el.classList.add("erro2");
      }
      caixaBio3.appendChild(el);
    });

  if (bioprocessosSelecionados.length > espacoDisponivel) {
    alert("A caixa 3 só pode conter 2 itens!");
  }
});

btnBio3.addEventListener("click", () => {
  const bioprocessosSelecionados = [...document.querySelectorAll(".selecionado2")];
  const espacoDisponivel = 1 - caixaBio4.children.length;

  bioprocessosSelecionados
    .filter((el) => el.parentElement === caixaBio1)
    .slice(0, espacoDisponivel)
    .forEach((el) => {
      const id = el.id;
      if (destinosCorretos2[id] === caixaBio4) {
        el.classList.remove("selecionado2", "erro2");
      } else {
        el.classList.add("erro2");
      }
      caixaBio4.appendChild(el);
    });

  if (bioprocessosSelecionados.length > espacoDisponivel) {
    alert("A caixa 4 só pode conter 1 item!");
  }
});
btnBio4.addEventListener("click", () => {
  const bioprocessosSelecionados = [...document.querySelectorAll(".selecionado2")];
  const espacoDisponivel = 1 - caixaBio5.children.length;

  bioprocessosSelecionados
    .filter((el) => el.parentElement === caixaBio1)
    .slice(0, espacoDisponivel)
    .forEach((el) => {
      const id = el.id;
      if (destinosCorretos2[id] === caixaBio5) {
        el.classList.remove("selecionado2", "erro2");
      } else {
        el.classList.add("erro2");
      }
      caixaBio5.appendChild(el);
    });

  if (bioprocessosSelecionados.length > espacoDisponivel) {
    alert("A caixa 5 só pode conter 1 item!");
  }
});
bvoltBio1.addEventListener("click", () => {
  const bioprocessosSelecionados = [...document.querySelectorAll(".selecionado2, .erro2")];
  bioprocessosSelecionados.forEach((el) => {
    caixaBio1.appendChild(el);
    el.classList.remove("selecionado2");
  });
});
bvoltBio2.addEventListener("click", () => {
  const bioprocessosSelecionados = [...document.querySelectorAll(".selecionado2, .erro2")];
  bioprocessosSelecionados.forEach((el) => {
    caixaBio1.appendChild(el);
    el.classList.remove("selecionado2", "erro2");
  });
});
bvoltBio3.addEventListener("click", () => {
  const bioprocessosSelecionados = [...document.querySelectorAll(".selecionado2, .erro2")];
  bioprocessosSelecionados.forEach((el) => {
    caixaBio1.appendChild(el);
    el.classList.remove("selecionado2", "erro2");
  });
});
bvoltBio4.addEventListener("click", () => {
  const bioprocessosSelecionados = [...document.querySelectorAll(".selecionado2, .erro2")];
  bioprocessosSelecionados.forEach((el) => {
    caixaBio1.appendChild(el);
    el.classList.remove("selecionado2", "erro2");
  });
});




