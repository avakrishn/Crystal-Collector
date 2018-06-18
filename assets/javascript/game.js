
var ranNum, crystal, ranCrystalNum, totalDisplay, ranNumDisplay;

var total = 0; 
var wins = 0;
var loses = 0;

var result;


// function showInstructions() {
//     $('.instruct').hover(
//         function (){
//             $('.instReveal').show().fadeIn("slow");
//         },
//         function (){
//             $('.instReveal').hide().fadeOut("slow"); 
//     });

//     $('.instReveal').hover(function(){
//         $(this).show();
//     });

    
// }

// function showInstructions() {
//     $('.instruct').hover(
//         function (){
//             $('.instReveal').show().fadeIn("slow");
//         },
//         function (){
//             $('.instReveal').hide().fadeOut("slow"); 
//     }
// );

//     $('.instReveal').hover(function(){
//         $(this).show();
//     });

    
// }

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





//   X random number to match score when game starts (19 - 120)

// X hidden values of crystals (1 - 12)

// X when click on crystal, update the player's score counter

// X The player wins if their total score matches the random number from the beginning of the game

// XThe player loses if their score goes above the random number

// X The game restarts whenever the player wins or loses.(restart function)
    // X When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. The user's score (and score counter) will reset to zero.