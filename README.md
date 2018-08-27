# Crystal Collector

## Table of Contents 
1. [About Crystal Collector](#about)
2. [Technologies Used](#tech)
3. [App Functionality](#function)
4. [App Display](#display)

## <a name="about"></a> About Crystal Collector
* Crystal Collector is an interactive game that uses jQuery to dynamically update the HTML page. 

## <a name="tech"></a> Technologies Used
* HTML5, CSS3, Bootstrap 4, jQuery

## <a name="function"></a> App Functionality
* On the page there are four crystals displayed as buttons. 

* The player is shown a random number at the start of each game that the player must match by clicking on the crystals.
    * The random number between 19 and 120 is generated and stored as variable ranNum:
        * `ranNum = Math.floor(Math.random() * 102) + 19;`

* The value of each crystal is hidden from the player until the player clicks on the crystal.

* When the player clicks on a crystal, it will add a specific amount of points, aka the crystal's value, to the player's total score.
    * The random Crystal value between 1 and 12 is generated and stored as variable ranCrystalNum:
        * `ranCrystalNum = Math.floor(Math.random() * 12) + 1;`
    * During the current round of the game the crystal's value remains constant. 

    * The `.on()` event method along with the `click` event handler was attached to each crystal and when triggered, the function generates the crystal's random value.

* The player wins if their total score matches the random number from the beginning of the game.

* The player loses if their total score goes above the random number they are trying to match.

* The game restarts whenever the player wins or loses.

* When the game begins again, the player sees a new random number. Also, all the crystals will have four new random hidden values and the player's total score resets to zero.

* The app also shows the number of rounds the player wins and loses. 

## <a name="display"></a> App Display

**When the game starts the player sees the four crystals, the random number they must match, and their total score is set to zero.**

![Game Start](https://raw.githubusercontent.com/avakrishn/Crystal-Collector/master/assets/images/game-start.png)


**As the game progresses, the player will click on crystals which will increase their total score in hopes of matching their total score to the random number.**

![Game Progress](https://raw.githubusercontent.com/avakrishn/Crystal-Collector/master/assets/images/game-progress.png)

**The player wins if their total score matches the random number from the beginning of the game. When the player wins the game will restart with a new random number and new hidden random crystal values will be generated.**

![Game Win](https://raw.githubusercontent.com/avakrishn/Crystal-Collector/master/assets/images/game-win.png)

**The player loses if their total score goes above the random number they are trying to match. When the player loses the game will restart with a new random number and new hidden random crystal values will be generated.**

![Game Loss](https://raw.githubusercontent.com/avakrishn/Crystal-Collector/master/assets/images/game-lose.png)

### **Future Code Development:**
* Source code will be developed over time to handle new features in the future.

### **Issues:**
* If you find an issue while using the app or have a request, <a href="https://github.com/avakrishn/Crystal-Collector/issues" target="_blank">log the issue or request here</a>. These issues will be addressed in a future code update.