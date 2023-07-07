
$(function () {
    $('.carousel').carousel({
        interval: 2000
    });
    //Con esto podemos hacer uso de los eventos/ listeners
    $('#contactoModal').on('show.bs.modal', function(e){
        console.log("El modal se esta mostrando")
        $('#contactoBtn').removeClass('btn-outline-success');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disable', true);
    });

    $('#contactoModal').on('shown.bs.modal', function(e){
        console.log("El modal se mostro")
    });

    $('#contactoModal').on('hide.bs.modal', function(e){
        console.log("El modal se esta ocultando")
        $('#contactoBtn').removeClass('btn-primary');
        $('#contactoBtn').addClass('btn-outline-success');
        $('#contactoBtn').prop('disable', false);
    });

    $('#contactoModal').on('hidden.bs.modal', function(e){
        console.log("El modal se oculto")
    });
})