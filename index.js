
var today = new Date().getHours();

if (today >= 7 && today <= 19) {
   document.querySelector(".image-background").style.backgroundImage = "url('./assets/images/real_balkon_day.jpg')";
} else {
    document.querySelector(".image-background").style.backgroundImage = "url('./assets/images/real_balkon_night.jpg')";
}


var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});



// random drink js below

var randDrink = document.querySelector("#rand-card");

randDrink.addEventListener("click", revealDrink);

// var cardBack = randDrink.querySelector("#rand_card_back_img");


function revealDrink(){

    randCardClasses = document.querySelector(".rotating-card").classList
    if (randCardClasses[randCardClasses.length-1] === 'is-flipped'){

        var cardBack = randDrink.querySelector(".card__face--back");
        
        var randomNumber1 = Math.floor(Math.random()*6) + 1;
        var randomNumber2 = Math.floor(Math.random()*3) + 1;


        if(randomNumber1 < 6){
            if(randomNumber2 === 1){
                // cardBack.setAttribute("src", './assets/images/doublecherry.jpg');
                // cardBack.classList.toggle("ccbb-revealed");
                cardBack.style.backgroundImage = "url('./assets/images/doublecherry.jpg')";
            }
            else if(randomNumber2===2){
                // cardBack.classList.toggle("ocb-revealed");
                cardBack.style.backgroundImage = "url('./assets/images/onecherry.jpg')";
                // cardBack.setAttribute("src", './assets/images/onecherry.jpg');
            }
            else{
                // cardBack.classList.toggle("ws-revealed");
                cardBack.style.backgroundImage = "url('./assets/images/whiskey_smash.jpg')";
                // cardBack.setAttribute("src", './assets/images/whiskey_smash.jpg');
            }
        }else{
            // cardBack.classList.toggle("secret-revealed");
            cardBack.style.backgroundImage = "url('./assets/images/random.jpg')";
            // cardBack.setAttribute("src", './assets/images/random.jpg');
        }
    }





}




