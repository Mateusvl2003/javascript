/**
 * Função JQuery para voltar ao topo
 * @author Mateus Ferreira
 */

$(document).ready(function () {
    // .click(function(){}); -> quando clicar no objeto identificado pelo id #top
    $('#top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow')
    })
})