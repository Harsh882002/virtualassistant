let btn = document.querySelector("#btn")
let content = document.querySelector("#content")


//give output
function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch =1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}

//for when i hae to give greetings
function wishMe(){
    let day = new Date();
    let hour = day.getHours();
    
    if(hour >= 0 && hour<0){
        speak("Good Morning sir");
    }
    else if(hour >= 12 && hour<18 ){
        speak("Good Afternoon sir")
    }else{
        speak("Good Evening sir");
    }
}

//to give greetings 
window.addEventListener('load', () =>{
    // wishMe();
})

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition();
recognition.onresult = (event) =>{
    console.log(event)
}

btn.addEventListener("click",() =>{
    // speak("Hello How can i help you")
    recognition.start();
})