function calcularParte4() {

    const Qmed = parseFloat(document.getElementById("qmed").value);
    const CDQOe = parseFloat(document.getElementById("cdqo").value);
    const CDBOe = parseFloat(document.getElementById("cdbo").value);
    const TDH = parseFloat(document.getElementById("tdh").value);

    if (isNaN(Qmed) || isNaN(CDQOe) || isNaN(CDBOe) || isNaN(TDH)) {
        document.getElementById("resultado4").innerHTML = 
            "Por favor, insira valores válidos.";
        return;
    }

    // Eficiências
    const EDQO = 100 * (1 - 0.68 * Math.pow(TDH, -0.35));
    const EDBO = 100 * (1 - 0.70 * Math.pow(TDH, -0.50));

    // Concentrações na saída
    const CDQOs = EDQO * CDQOe / 100;
    const CDBOs = EDBO * CDBOe / 100;

    // Sólidos Suspensos Totais
    const CSST = 102 * Math.pow(TDH, -0.24);
    const CSSTdia = CSST*Qmed*0.001;

    // Conversão em metano
    const DQO_CH4 = Qmed * (CDQOe - CDQOs) - 0.17 * Qmed * CDQOe;

    document.getElementById("resultado4").innerHTML =
        `Eficiência de remoção de DQO = ${EDQO.toFixed(2)}% <br>
         Eficiência de remoção de DBO = ${EDBO.toFixed(2)}% <br><br>

         C<sub>DQO,s</sub> = ${CDQOs.toFixed(1)} mg/L <br>
         C<sub>DBO,s</sub> = ${CDBOs.toFixed(1)} mg/L <br><br>

         C<sub>SST</sub> = ${CSST.toFixed(1)} mg/L <br>
         C<sub>DiáriaSST</sub> = ${CSSTdia.toFixed(1)} kgSST/d <br><br>

         DQO convertida em CH₄ = ${DQO_CH4.toFixed(2)} kgCH₄/d`;
}
