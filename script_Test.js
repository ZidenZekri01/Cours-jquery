$(function(){
   
    $("#div02").hide();
    $("#div03").hide();
    $('button').click(function(){
       $('#div01').animate({left: '600px'}, 3000).fadeOut(3000, function(){
           $('#div02').fadeIn(3000).animate({left: '60px'}, 3000).fadeOut(3000, function(){
               $('#div03').fadeIn(3000).animate({left: '600px'}, 3000).slideUp(3000, function(){
                   $('p').text("Barvo!");
               });
           });
       }); 
    });
    
});
