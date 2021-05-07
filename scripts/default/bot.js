function loading(){
    $('.loading').show();
    $('#uploadFileModel').modal('hide');

    setTimeout(function(){
        $('.loading').hide();
    },2000)
    setTimeout(function(){
        $('.inner-wrapper').show();
    }, 2250)
}

$('.uploadModel-btn').on('click',function(){
    var parent = $(this).parent('.format-btn');
    $('.inner-wrapper').hide();

    if(parent.hasClass('active')) {
        parent.removeClass('active');
        
    } else {
        parent.addClass('active').siblings().removeClass('active');
        $('#uploadFileModel').modal('show');
    }
});