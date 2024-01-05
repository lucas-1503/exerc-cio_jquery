const form = document.getElementById('formulario');

let linhas = '';

$(form).on('submit', function(e){
    e.preventDefault();

    const nomeTarefa = document.getElementById('tarefa');

    let linha = '<ul>';
    linha += `<li> ${nomeTarefa.value}</li>`
    linha += '</ul>';

    linhas += linha;

    const lista = document.querySelector('ul');
    lista.innerHTML = linhas;
})

$('ul').on('click', 'li', function(){
    $(this).css('text-decoration', 'line-through')
})