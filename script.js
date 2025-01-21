let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

//give output
function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "en-GB";
  window.speechSynthesis.speak(text_speak);
}

//for when i hae to give greetings
function wishMe() {
  let day = new Date();
  let hour = day.getHours();

  if (hour >= 0 && hour < 0) {
    speak("Good Morning sir");
  } else if (hour >= 12 && hour < 18) {
    speak("Good Afternoon sir");
  } else {
    speak("Good Evening sir");
  }
}

//to give greetings
window.addEventListener("load", () => {
  // wishMe();
});

//to recognize speech or text
let speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;

  //passing takeCommand function to take command
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  // speak("Hello How can i help you")
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});

//function to take command
function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";
  if (message.includes("hey") || message.includes("hello")) {
    speak("hukum my lord");
  } else if (message.includes("who are you")) {
    speak("i am juniour harsh created by my lord harsh sir ");
  } else if (message.includes("open youtube")) {
    speak("opening youtube my lord....");
    window.open("https://www.youtube.com/", "_blank");
  } else if (message.includes("open instagram")) {
    speak("opening instagram my lord....");
    window.open("https://www.instagram.com/", "_blank");
  } else if (message.includes("open google")) {
    speak("opening google my lord....");
    window.open("https://www.google.co.in/", "_blank");
  } else if (message.includes("open email")) {
    speak("opening email my lord....");
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
  } else if (message.includes("open chat gpt")) {
    speak("opening chatgpt my lord....");
    window.open("https://chatgpt.com/", "_blank");
  } else if (message.includes("open my portfolio")) {
    speak("opening your portfolio my lord wow your portfolio is osm....");
    window.open("https://harshpatle.netlify.app/", "_blank");
  }
  //apps
  else if (message.includes("open calculator")) {
    speak("opening calculator my lord....");
    window.open("calculator://", "_blank");
  } else if (message.includes("open whatsapp")) {
    speak("opening whatsapp my lord....");
    window.open("whatsapp://", "_blank");
  }
  //for time
  else if (
    message.includes("what is time now") ||
    message.includes("tell me time")
  ) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(time);
  } else if (
    message.includes("what is date today") ||
    message.includes("tell me date today")
  ) {
    let date = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
    });
    speak(date);
  } else {
    let finalText =
      "this is what i found on internet regarding" +
        message.replace("hey", "") || message.replace("hello", "");
    speak(finalText);
    window.open(
      `https://www.google.com/search?q=${
        message.replace("hey", "") || message.replace("hello", "")
      }`,
      "_blank"
    );
  }
}
