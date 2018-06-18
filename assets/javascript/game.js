
var ranNum, crystal, ranCrystalNum, totalDisplay, ranNumDisplay;

var total = 0; 




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



});

$(document).on('click', 'button', function(){

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
   
});





// random number to match score when game starts (19 - 120)

//hidden values of crystals (1 - 12)

//when click on crystal, update the player's score counter

// The player wins if their total score matches the random number from the beginning of the game

//The player loses if their score goes above the random number

//The game restarts whenever the player wins or loses.(restart function)
    //When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. The user's score (and score counter) will reset to zero.