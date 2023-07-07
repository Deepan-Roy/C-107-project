function StartRec(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nFX2ztmUI/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    
}

gotResults(error,results);{
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}