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
    $("#header").click(function(){
        $(this).css('background-color','#9B59B6');    
    });
    $("#usrattributes").click(function(){
        $(this).animate({left:"+=25px"},500);    
    });
    $("#usrattributes").accordion();
});