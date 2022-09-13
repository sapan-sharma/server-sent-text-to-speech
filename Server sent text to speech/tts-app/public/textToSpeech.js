// let speech = new SpeechSynthesisUtterance();
speech.lang = "en-GB";
voices = [];
voices = window.speechSynthesis.getVoices();
speech.voice = voices[0];
speech.rate = 1;
speech.volume = 10;
speech.pitch = 1;

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  var text = 'Homie! Yo!';
  document.getElementById('WelMsg').innerHTML = text;
  // speech.text = text
  // window.speechSynthesis.speak(speech);
});
// var source = new EventSource("http://localhost:5000/events");
// var source = new EventSource("https://8dc7-49-206-14-207.in.ngrok.io/events");
var source = new EventSource("https://2e65-49-206-13-145.in.ngrok.io/events");
source.addEventListener('flightStateUpdate', function(e) {	
  document.getElementById("ServerMessage").innerHTML = JSON.parse(e.data).state;
  speech.text = JSON.parse(e.data).state;
  window.speechSynthesis.speak(speech);
  }, false);
source.addEventListener('flightRemoval', function(e) {	
  	// switchImages();
  	document.querySelector("img").src = "./evil-laugh.gif"
  }, false);
function switchImages(){
	var randNum = Math.floor(Math.random() * 6);
	if(randNum==0){document.querySelector("img").src = "./evil-laugh.gif";}
	else if(randNum==1)document.querySelector("img").src = "./jethameme.jpg";
	else if(randNum==2)document.querySelector("img").src = "./meme1.jpg";
	else if(randNum==3)document.querySelector("img").src = "./true-story-meme.jpg";
	else if(randNum==4)document.querySelector("img").src = "./simply.webp";
	else if(randNum==5)document.querySelector("img").src = "./steve-austin-face.jpg";
}
