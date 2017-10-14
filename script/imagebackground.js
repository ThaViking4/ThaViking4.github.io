//number of images to cycle through
var imageNumber = 16;

var imageDisplay = document.querySelector(".rotateImage");

var currentImage = Math.floor((Math.random() * imageNumber) + 1);
imageDisplay.setAttribute("src","images/image"+currentImage+".png");

setInterval(function(){
    
    imageDisplay.setAttribute("src","images/image"+currentImage+".png");
    if(currentImage === imageNumber){
        currentImage = 1;
    }else{
        currentImage += 1;
    }
},Math.floor((Math.random() * 60000) + 40000));