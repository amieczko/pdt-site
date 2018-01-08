
/*Pillars*/
$( document ).ready(function() {
    $("#friendship").fadeOut(1);
    $("#rectitude").fadeOut(1);
    toggle_pillar(".pillar-learning");
});


var pillar_id= [".pillar-friendship",".pillar-rectitude", ".pillar-learning"];
function toggle_pillar(pillar_name){
    var selected = pillar_name.replace('.','')+"-selected";
    //if button is not already selected

    if (!$(pillar_name).hasClass(selected)){

        //remove selection from others
        for (index = 0; index < pillar_id.length; ++index) {
            var pillar_arr = pillar_id[index].replace('.','')+"-selected";
                if ($(pillar_id[index]).hasClass(pillar_arr)){
                    $(pillar_id[index]).removeClass(pillar_arr);
        }
        //make pillar selected
        $(pillar_name).addClass(selected);

    };
    
    }
}
function toggle_text(pillar_name){

    //controls
    var delay = 500;
    //get text tag
    var tag = pillar_name.replace('pillar-','');
    switch(tag){
        case '#friendship':
        $("#learning").fadeOut(400);
        $("#rectitude").fadeOut(400);
        $("#friendship").delay(delay).fadeIn(700);
        break;
        case '#learning':
        $("#friendship").fadeOut(400);
        $("#rectitude").fadeOut(400);
        $("#learning").delay(delay).fadeIn(700);
        break;
        case '#rectitude':
        $("#learning").fadeOut(400);
        $("#friendship").fadeOut(400);
        $("#rectitude").delay(delay).fadeIn(700);
        break;

    }
}
    
    $('.pillar-friendship').on('click',function(e){
        toggle_pillar(".pillar-friendship");
        toggle_text('#pillar-friendship');
      });
    
      $('.pillar-learning').on('click',function(e){
        toggle_pillar('.pillar-learning');
        toggle_text('#pillar-learning');
      });
    
      $('.pillar-rectitude').on('click',function(e){
        toggle_pillar('.pillar-rectitude');
        toggle_text('#pillar-rectitude');
      });

/*Rush Schedule*/

$("div#rush-item").click(function() {
        
    if($(this).find(".event-details").height() == 0){

        //opening div
        $(this).find(".event-details").animate({
                height : $(this).find(".event-details")[0].scrollHeight
            },800);
        
        //event date
        $(this).find(".event-date").delay(400).animate({
                opacity: 1
            },200);
        
        //event description
        $(this).find(".event-desc").delay(600).animate({
            opacity: 1
        },200);

        //event location
        $(this).find(".event-location").delay(700).animate({
            opacity: 1
        },200);

        $(this).find("img.event-arrow-img").rotate({ endDeg:90, duration:0.4, persist:true });
            
        }
        //closing div
        else{
            $(this).find(".event-details").delay(200).animate({
                height : 0
            },800);

            //event location
            $(this).find(".event-location").animate({
                opacity: 0
            },200);
            //event description
            $(this).find(".event-desc").delay(100).animate({
                opacity: 0
            },200);

            //event date
            $(this).find(".event-date").delay(400).animate({
                opacity: 0
            },200);

            
            $(this).find("img.event-arrow-img").rotate({ endDeg:0, duration:0.4, persist:true });
        }
        
    
    
    });

    $("div#rush-item .event-cal").click(function(e) {
        e.stopPropagation();
   });