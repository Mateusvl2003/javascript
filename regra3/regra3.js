/**
 * Cálculo de Porcentagem "REGRA de 3
 * @author Mateus Ferreira
 */

function calcular() {
    let x, y, resultado
    x = Number(frmRegra3.txtX.value.replace(',', '.'))
    y = Number(frmRegra3.txtY.value.replace(',', '.'))
    resultado = (x * y) / 100
    frmRegra3.txtResultado.value = resultado.toFixed(2)
}