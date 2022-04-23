x = 0;
y = 0;
draw_circle = "";
draw_rectangle = "";
var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();
function setup() {
    canvas = createCanvas(800, 600);
}
function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("status").innerHTML="The speech have been recognized as "+content;
    if(content=="circle"){
x=Math.floor(Math.random()*800);
y=Math.floor(Math.random()*600);
document.getElementById("status").innerHTML="Drawing Circle";
draw_circle="set"
    }
    if(content=="rectangle"){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Drawing Rectangle";
        draw_rectangle="set";
}
}
function draw(){
if(draw_circle=="set"){
circle(x,y,40);
document.getElementById("status").innerHTML="Circle is drawn";
draw_circle="";
}
if(draw_rectangle=="set"){
    rect(x,y,100,120);
    document.getElementById("status").innerHTML="Rectangle is drawn";
    draw_rectangle="";
    }
}