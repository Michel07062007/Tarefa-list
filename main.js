

$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const respostaFormulario = $('#name-task').val()
        const novoItem = $(`<p></p>`)
        $(`<li">${respostaFormulario}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#name-task').val('')
    })
})