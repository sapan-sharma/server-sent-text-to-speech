const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);
webcam.start()
   .then(result =>{
      console.log("webcam started");
   })
   .catch(err => {
       console.log(err);
   });
let speech = new SpeechSynthesisUtterance();
speech.lang = "en-GB";
let voices = [];
voices = window.speechSynthesis.getVoices();
speech.voice = voices[0];
speech.rate = 1;
speech.volume = 10;
speech.pitch = 1;
setTimeout(function printName(){
	var randNum = Math.floor(Math.random() * 3);
	if(randNum==0)text = 'Hello Sapan';
	else if(randNum==1)text = 'Hello there!';
	else if(randNum==2)text= 'Hello Stranger';
	document.getElementById('UserName').innerHTML =text;
	speech.text = text
    // window.speechSynthesis.speak(speech);
}, 13000);
function stopWebcam(){
	webcam.stop();
}