Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
 });

 camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src"'+data_uri+'"/>"';
    });
}

 console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6JPtvyFAY/model.json',modelLoaded);

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }   else { 
        console.log(results);
        document.getElementById("result Gesture_name").innerHTML = result[0].label;
        document.getElementById("result Gesture_name2").innerHTML = result[1].label;
        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak();
        if (result[0].label == "Amazing") 
        {
            document.getElementById("update emoji").innerHTML = "&#128076";
        }
        if (result[0].label == "Vicory") 
        {
            document.getElementById("update emoji").innerHTML = "&#9996";
        }
        if (result[0].label == "Best") 
        {
            document.getElementById("update emoji").innerHTML = "&#128077";
        }
        if (result[1].label == "Amazing") 
        {
            document.getElementById("update emoji").innerHTML = "&#128076";
        }
        if (result[1].label == "Victory") 
        {
            document.getElementById("update emoji").innerHTML = "&#9996";
        }
        if (result[1].label == "Best") 
        {
            document.getElementById("update emoji").innerHTML = "&#128077";
        }

    }
}