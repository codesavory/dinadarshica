$(document).ready(function(){
    $('#flwrs').mouseenter(function()
    {
        $(this).fadeTo('fast',1);    
    });
    $("#flwrs").mouseleave(function(){
       $(this).fadeTo('fast',0.75); 
    });
    $('#flwing').mouseenter(function()
    {
        $(this).fadeTo('fast',1);    
    });
    $("#flwing").mouseleave(function(){
       $(this).fadeTo('fast',0.75); 
    });
});