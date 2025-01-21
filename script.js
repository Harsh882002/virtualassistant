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

//to recognize speech or text
let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition();
recognition.onresult = (event) =>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript;
    

    //passing takeCommand function to take command 
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",() =>{
    // speak("Hello How can i help you")
    recognition.start();
})

//function to take command
function takeCommand(message){
    if(message.includes("hey") || message.includes("hello")){
        speak("hukum my lord")
    }
    else if(message.includes("who are you")){
        speak("i am juniour harsh created by my lord harsh sir ")
    }else if(message.includes("open youtube")){
        speak("opening youtube my lord....")
        window.open("https://www.youtube.com/","_blank")
    }
}