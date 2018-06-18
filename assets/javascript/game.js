
var ranNum, crystal, ranCrystalNum, totalDisplay, ranNumDisplay;

var total = 0; 
var wins = 0;
var loses = 0;

var result;


function restart(){
    //new random number
    ranNum = Math.floor(Math.random() * 102) + 19; 
    ranNumDisplay.text(ranNum);

    // remove data-num attribute from button object
    $( "button" ).removeData( "num" );

    total = 0; 
    totalDisplay.text(total);

}

function compareNum(){
    if(total == ranNum){
        //you win
        $('.resultWin').show();
        wins ++;
        $('.wins').text(wins);
        restart();

    }
    else if(total > ranNum){
        //you lose
        $('.resultLose').show();
        loses ++;
        $('.loses').text(loses);
        restart();
    }
}


// initilaizes the game when window is ready with the random number to be matched and the random button numbers
$(window).ready(function() {
    ranNumDisplay = $('.ranScore');
    totalDisplay = $('.total'); 
    
    // random number between 19-120
    ranNum = Math.floor(Math.random() * 102) + 19; 
    ranNumDisplay.text(ranNum);

    // sets the user's total 
    totalDisplay = $('.total'); 
    totalDisplay.text(total);

    $('.instruct').on('click', function(){
        $('.instReveal').toggle();
    });

});

$(document).on('click', 'button', function(){
    clicked = $(this);
    $('.resultWin').hide();
    $('.resultLose').hide();
    if($(this).data("num") === undefined){
        ranCrystalNum = Math.floor(Math.random() * 12) + 1; 
        $(this).data("num", ranCrystalNum);
        total += ranCrystalNum;
        totalDisplay.text(total);
    }
    else{
        total += $(this).data("num");
        totalDisplay.text(total);
    }

    compareNum();
   
});

