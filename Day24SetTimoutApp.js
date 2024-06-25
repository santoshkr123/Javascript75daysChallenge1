function speak(letter) {
    var audio = document.getElementById('audio');
    if(letter == 'a') audio.src="Apple.mp3";

    else if(letter == 'b') audio.src= "Ball.mp3";

    else if(letter == 'c' ) audio.src = "Cat.mp3";

    else if(letter == 'd') audio.src = "Dog.mp3";

    else alert("Not found");

    speaker.style.color="black";
    
    audio.play();

    setTimeout(function(){
        speaker.style.color="#ddd"
    },1000);

}