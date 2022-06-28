$(function(){
   
    $('button').click(function(){
       $('#div01').animate({left: '600px'}, 3000, function(){
           //$('#div01').hide(1000);
       }); 
        
        
        $('#div02').animate({left : '600px'
                            , width : '200px'
                             , height : '200px'
                             , opacity : 0.2
                            
                            }, 5000);
        
        
    $('#div03').slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
       
    });
    
});