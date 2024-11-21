
$(document).ready(function() {
    $('<div></div>').appendTo('form')
    $('form').on('submit', function(e) {
        e.preventDefault();
        const respostaFormulario = $('#name-task').val()
        const novoItem = $(`<ul></ul>`)
        $(`<li>${respostaFormulario}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('div')
        $('#name-task').val('')

    });
    $('div').click(function(){
        $('li').css('text-decoration', 'line-through');
    })
})