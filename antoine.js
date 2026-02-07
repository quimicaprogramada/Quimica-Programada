const frm = document.querySelector("form") 
const resp = document.querySelector("pre")
const inNumero1=document.querySelector("#inNumero1")
const inNumero2=document.querySelector("#inNumero2")
const inNumero3=document.querySelector("#inNumero3")
const inA =document.querySelector("#inA")
const inB=document.querySelector("#inB")
const inC=document.querySelector("#inC")


frm.addEventListener("submit", (e) => { 
    e.preventDefault() 
    const numero1 = Number(inNumero1.value) 
    const numero2 = Number(inNumero2.value) 
    const numero3 = Number(inNumero3.value) 
    const A = Number(inA.value)
    const B = Number(inB.value)
    const C = Number(inC.value)

    let resposta = "Temperatura (°C)\tPressão de saturação (mmHg)\n" 

    for (let i = numero1; i <= numero2; i=i+numero3) {
        let expoente = A - B / (i + C)
        let pressao = (10 ** expoente).toFixed(4)
        
        resposta = resposta + i + "\t\t" + " ---> "+ "\t\t" + (pressao) + "\n"

    }

    resp.innerText = resposta
})