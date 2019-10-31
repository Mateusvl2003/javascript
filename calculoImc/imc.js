/**
 * Cálculo Imc
 * @author Mateus Ferreira
 */

 // Variáveis globais
 let Peso, Altura, Imc
 

 function calcular(){
     Peso = Number(frmImc.txtPeso.value.replace(",","."))
     Altura = Number(frmImc.txtAltura.value.replace(",","."))
     Imc = Peso / (Altura * Altura)
     frmImc.txtImc.value = Imc.toFixed(2)
 }