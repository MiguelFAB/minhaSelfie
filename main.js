var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textBox = document.getElementById("textBox");

function start(){
    textBox.innerHTML = "";
    recognition.start();
}
function speak(){
    var synth = window.speechSynthesis;
    speakData = "Tirando sua selfie em cinco segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function (){
        takeSelfie();
        save();

    },5000);
};
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    textBox.innerHTML = content;
    console.log(content);
    if(content == 'tire minha selfie'){
        console.log('tirando selfie--');
        speak();
    }
};

camera = document.getElementById("camera");
webcam.set({
    width: 360,
    height: 250,
    image_format:"jpeg",
    jpeg_quality: 90,    
});
function takeSelfie(){
    webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="selfieImage" src="' + data_uri + '"/>';

    });
}
function save(){
 link = document.getElementById("link");
 image = document.getElementById("selfieImage").src ;
 link.href = image;
 link.click();
}