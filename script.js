$(document).ready(function(){
    
    $('#par1').mouseenter(function(){
        
        $('#par5').hide(3000, function(){
            $('#par2').hide(3000, function(){
                $('#par3').hide(3000);
            })
        });
    });
    
    $('#par1').mouseleave(function(){
        
        $('#par5').show();
        $('#par2').show(3000);
        $('#par3').show(3000);
    });

});