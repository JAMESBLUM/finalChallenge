$(document).ready(function(){
    $('#all').addClass('here');

    $('.btn-principal').click(function(){
        /* Traemos el valor del category */
        var catProduct = $(this).attr('category');
        //console.log(catProduct);

        $('.btn-principal').removeClass('here');
        $(this).addClass('here');

        //Ocultandos productos
        $('.card-project').hide();
        //Mostrando productos
        $('.card-project[category="'+catProduct+'"]').show();
    });
    $('.btn-principal[category="All"]').click(function(){
        $('.card-project').show();
    })
});