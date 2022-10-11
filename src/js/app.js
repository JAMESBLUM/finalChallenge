$(document).ready(function(){
    //alert('The information is for illustrative purposes. Visit my official portfolio at: https://portfolioedd.netlify.app/')
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

    // Mensaje informativo
    const message = confirm('The information is for illustrative purposes. Would you like to visit my official page?')
    if(message == true){
        window.location = 'https://portfolioedd.netlify.app/';
    }else{return false;}
});