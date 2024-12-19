
$(document).ready(function() {    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const respostaFormulario = $('#name-task').val()
        const novoItem = $(`<ul></ul>`)
            
        $(`<li>${respostaFormulario}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('form')
        $('#name-task').val('')

        $('li').on('click', function() {
            $(this).toggleClass('riscado');
        });
    });
});
