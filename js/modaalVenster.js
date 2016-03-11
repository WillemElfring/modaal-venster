var VenObj = (function() {
var $Venster = $('<div class="modaal-venster"/>');
var $Inhoud = $('<div class="modaal-inhoud"/>');
var $Knop1 = $('<span class="sluit-knop">&#10005;</span>')


$Venster.append($Inhoud);

return{
    centreren: function() {
        //centreren
       
       
    },
    openen: function(instellingen){
        //openen
        $Inhoud.append(instellingen.$inhoud, $Knop1);
        $Inhoud.css('width', instellingen.breedte+'px').on('click', function(e){
            e.stopPropagation();
        });
        $Venster.appendTo('body').on('click', VenObj.sluiten);
        $Knop1.on('click', VenObj.sluiten);
    },
    sluiten: function() {
        //sluiten
    $Inhoud.empty().off('click', VenObj.sluiten);;
    $Venster.detach();
    }
}
              
}());