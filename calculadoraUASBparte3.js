function calcularParte3() {
    const Qmed = parseFloat(document.getElementById("qmed").value);
    const TDH = parseFloat(document.getElementById("tdh").value);
    const v = parseFloat(document.getElementById("vel").value);
    const Ad = parseFloat(document.getElementById("ad").value);

    if (isNaN(Qmed) || isNaN(TDH) || isNaN(v) || isNaN(Ad)) {
        document.getElementById("resultado3").innerHTML =
            "Por favor, insira valores válidos.";
        return;
    }

    // Volume do reator
    const V = (TDH * Qmed) / 24;

    // Altura do reator
    const H = v * TDH;

    // Área da seção
    const A = V / H;

    // Diâmetro
    const d = Math.sqrt((4 * A) / Math.PI);

    // Número de distribuidores
    const Nd = A / Ad;

    document.getElementById("resultado3").innerHTML =
        `Volume V = ${V.toFixed(3)} m³ <br>
         Altura H = ${H.toFixed(3)} m <br>
         Área A = ${A.toFixed(3)} m² <br>
         Diâmetro d = ${d.toFixed(3)} m <br>
         Número de distribuidores Nd = ${Nd.toFixed(1)}`;
}