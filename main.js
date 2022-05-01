function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    background("white");
}

function clear_canvas(){
    background("white");
}
 function preload(){
     classifier=ml5.imageClassifier('DoodleNet');
 }
  function draw(){
      strokeWeight(10);
      stroke(0);
      if (mouseIsPressed){
          line(pmouseX,pmouseY,mouseX,mouseY);
      }
  }
   function classifyCanvas(){
       classifier.classify(canvas,gotresult);
   }
    function gotresult(error,results){
        if (error){
            console.log(error);
        }
        console.log(results);
        document.getElementById("lable").innerHTML='Lable: '+results[0].label;
        document.getElementById("confidence").innerHTML='confidence: '+Math.round(results[0].confidence*100)+'%';
        utterthis=new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterthis);
    }