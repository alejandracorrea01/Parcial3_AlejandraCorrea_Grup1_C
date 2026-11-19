function calcularFacturaEnergia(estrato, consumo) {

  const TARIFA_KWH = 900;
  const CONSUMO_SUBSISTENCIA = 173;
  const CARGO_FIJO = 6000;

  const SUBSIDIOS = {
    1: 0.50, // 50%
    2: 0.40, // 40%
    3: 0.15  // 15%
  };

  const CONTRIBUCIONES = {
    5: 0.50, // 50%
    6: 0.60  // 60%
  };

 
  if (!Number.isInteger(estrato) || estrato < 1 || estrato > 6) {
    console.error("Error: El estrato debe ser un número entero entre 1 y 6.");
    return null;
  }

  if (typeof consumo !== "number" || isNaN(consumo) || consumo < 0) {
    console.error("Error: El consumo debe ser un número mayor o igual a 0.");
    return null;
  }

  const consumoBasico = Math.min(consumo, CONSUMO_SUBSISTENCIA);
  const consumoExceso = consumo - consumoBasico;

  const valorBasico = consumoBasico * TARIFA_KWH;
  const valorExceso = consumoExceso * TARIFA_KWH;
  const costoConsumo = valorBasico + valorExceso;

 
  let subsidio = 0;
  let contribucion = 0;

  if (estrato >= 1 && estrato <= 3) {
    
    subsidio = valorBasico * SUBSIDIOS[estrato];
  } else if (estrato === 5 || estrato === 6) {
   
    contribucion = costoConsumo * CONTRIBUCIONES[estrato];
  }
  
  const totalPagar = costoConsumo - subsidio + contribucion + CARGO_FIJO;

  

  console.log("--- Resumen de Factura ---");
  console.table(resumenFactura);

  return totalPagar;
}

