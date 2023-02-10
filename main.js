//https://teachablemachine.withgoogle.com/models/Wijq1fI0x///
Webcam.set({
    height:500,
    width:800,
    image_format:"png",
    png_quality:90
});
camera= document.getElementById("livecamera");
Webcam.attach("#livecamera");
function takepic(){
    Webcam.snap(function(data_uri){
        document.getElementById('imagecaptured').innerHTML= '<img id="imagesnapped" src="'+data_uri+'">'
    });
    //done by putting function with datauri parameter inside snap//

}
console.log("ML5 verion:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Wijq1fI0x/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded");
}
function compare() {
    img=document.getElementById("imagesnapped");
    classifier.classify(img,gotresults);
}
function gotresults(error,results){
    if (results==error) {
        console.log(error);
        
    } else {
        console.log(results);
        document.getElementById("gestures").innerHTML= "Gesture:"+results[0].label;
        if(results[0].label == "point"){
        document.getElementById("gesturesymbol").innerHTML= "Symbol:"+"&#9757;"
        }
        if(results[0].label == "Peace symbol"){
            document.getElementById("gesturesymbol").innerHTML= "Symbol:"+"&#9996;"
            }
        if(results[0].label == "Fist"){
                document.getElementById("gesturesymbol").innerHTML= "Symbol:"+"&#9994;"
                }
                speak();
    }


}
function speak(){
   
  var synth= window.speechSynthesis;
    d1="The symbol is"+results[0].label;
   var x=new SpeechSynthesisUtterance(d1) ;
    synth.speak(x);
    
}