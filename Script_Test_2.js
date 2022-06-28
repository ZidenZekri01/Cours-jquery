$(function(){
    $('#div01').hide();
    $('#div02').hide();
    $('#div03').hide();
    $('#bt01').click(function(){
        $('#div01').fadeIn(3000).animate({left : '600px'}, 3000).fadeToggle(3000, function(){
            $('#div02').fadeToggle(3000).animate({left : '600px'}, 3000).fadeToggle(3000, function(){
                $('#div03').fadeToggle(3000).animate({left : '600px'}, 3000);
            });
        });

    });
    
});