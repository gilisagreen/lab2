window.onload = function(){
    shuffle();
   $("w").addEventListener('click', F(this));

}
var count = 0;

var F = function(e){
       
    var class_array = document.body.getElementsByClassName('v');
    card1 = class_array[0];
    card2 = class_array[1]
    if (card2) {
            card1.classList.remove('v');
            card2.classList.remove('v');
        };

    if(card1&&!card2&&card1!=e&&card1.innerHTML==e.innerHTML){
                // if they match we sign them as "paired"
                card1.className = 'w p';
                e.className = 'w p';
                var audio = new Audio('http://www.freesound.org/data/previews/131/131660_2398403-lq.mp3');
                    audio.play();
                
            }
        else {e.classList.add('v');}// otherwise we set the currently turned card to visible

            // see if we finished the whole pack
    
    if(document.body.getElementsByClassName('p').length == 16){
              
                var win = new Audio('http://audiomicro-dev.s3.amazonaws.com/preview/532096/e3d80dbecad1674');
                win.play();
                  alert("You Win!");
            startover = document.body.getElementsByClassName('w');
        for (var i = 0; i < startover.length; i++) {
            startover[i].className = "w";
        };
        count = 0;
            }
    count++;
     if (count==24){

        var lose = new Audio('http://2.s3.envato.com/files/42887508/preview.mp3');
        lose.play();

        alert("Sorry! Try Again.");
        //turn everything back over
        startover = document.body.getElementsByClassName('w');
        for (var i = 0; i < startover.length; i++) {
            startover[i].className = "w";
        };
        count = 0;
        shuffle();
    }

    
    }

function shuffle(){
        var numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        var puzzle = document.body.getElementsByClassName('w');
        for (var i=puzzle.length; i>0; i){
            var j = Math.floor(Math.random() * i);
            var x = numArray[--i];
            var test = puzzle[i].innerHTML;
            
            puzzle[i].innerHTML = puzzle[numArray[j]].innerHTML;
            puzzle[numArray[j]].innerHTML = test;
            numArray[j] = x;
    }
}
