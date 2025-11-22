function calcularParte2() {
    const Qmed = parseFloat(document.getElementById("qmed").value);
    const CDQOe = parseFloat(document.getElementById("cdqoe").value);
    const TDH = parseFloat(document.getElementById("tdh").value);

    if (isNaN(Qmed) || isNaN(CDQOe) || isNaN(TDH)) {
        document.getElementById("resultado2").innerHTML =
            "Por favor, insira valores válidos.";
        return;
    }

    // Volume V = (TDH * Qméd) / 24
    const V = (TDH * Qmed) / 24;

    // CHV = Qmed / V
    const CHV = Qmed / V;

    // COV = Qmed * CDQOe / V, lembrando que CDQOe está em mg/L
    // Qmed (m³/d) → m³/d
    // CDQOe (mg/L) = kg/m³ * 1000 (para converter para mg/L)
    const COV = Qmed * (CDQOe / 1000) / V;

    // TDH máximo = V / (1,2 * 1,5 * Qméd)
    const TDHmax = V / (1.2 * 1.5 * Qmed);

    document.getElementById("resultado2").innerHTML =
        `Volume V = ${V.toFixed(3)} m³ <br>
         CHV = ${CHV.toFixed(3)} m³/m³·d <br>
         COV = ${COV.toFixed(3)} kgDQO/m³·d <br>
         TDHmáx = ${TDHmax.toFixed(3)} h`;
}
