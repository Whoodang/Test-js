
/*---------ADD AN EVENT ON THE BUTTON-----*/

document.getElementById("toSpeak").addEventListener("click",()=>{
    speak(document.getElementById("text").value)
});

/*---------WE USE THE JAVASCRIPT STANDARD RESOURCE TO READ THE TEXT AREA--------*/

function speak(text){
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}









