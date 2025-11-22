function calcular() {
    const Qmed = parseFloat(document.getElementById("qmed").value);
    const CDQOe = parseFloat(document.getElementById("cdqoe").value);
    const CDBOe = parseFloat(document.getElementById("cdboe").value);

    if (isNaN(Qmed) || isNaN(CDQOe) || isNaN(CDBOe) ||
        Qmed <= 0 || CDQOe <= 0 || CDBOe <= 0) {
        document.getElementById("resultado").textContent =
            "Insira valores válidos e maiores que zero.";
        return;
    }

    const Qmax = 1.2 * 1.5 * Qmed;
    const CdiariaDQO = Qmed * CDQOe * 0.001;
    const CdiariaDBO = Qmed * CDBOe * 0.001;

    document.getElementById("resultado").innerHTML =
        "Qmáx = " + Qmax.toFixed(2) + " m³/d<br>" +
        "Carga diária de DQO = " + CdiariaDQO.toFixed(2) + " kgDQO/d<br>" +
        "Carga diária de DBO = " + CdiariaDBO.toFixed(2) + " kgDBO/d";
}
