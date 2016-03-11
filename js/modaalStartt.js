$(document).ready(function() {
    //inhoud modaalvenster
    var Sc2 = $('#Sc2').detach();
    var Wow = $('#WoW').detach();
    var Csgo = $('#Csgo').detach();
    var Lol = $('#Lol').detach();
    
    //events
    $('#Sc2Thumb').on('click', function()  {
        VenObj.openen({$inhoud: Sc2, breedte: 700});     
        
    });
     $('#WowThumb').on('click', function()  {
        VenObj.openen({$inhoud: Wow, breedte: 700});     
        
    });
     $('#CsgoThumb').on('click', function()  {
        VenObj.openen({$inhoud: Csgo, breedte: 700});     
        
    });
     $('#LoLThumb').on('click', function()  {
        VenObj.openen({$inhoud: Lol, breedte: 700});     
        
    });
    
});