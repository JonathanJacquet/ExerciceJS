//Variables

var rotateSlides = 0;
var imageContainers = document.getElementsByClassName("imageContainer");
var sliderContainer = document.getElementById("sliderContainer");
//Functions

//delete image containers
function hiddenContent() {
  for (var i = 0; i < imageContainers.length; i++) {
    imageContainers[i].style.display = "none";
  }
}




function createAlert() {
  setInterval(function(){
    imageContainers[rotateSlides].style.display = "none";
    if(rotateSlides == imageContainers.length -1) {
      rotateSlides = 0;
    }
    else {
      rotateSlides++;
    }
    imageContainers[rotateSlides].style.display = "block";
  }, 4000);
}


//Code logic

hiddenContent();
imageContainers[rotateSlides].style.display = "block";
createAlert();




// Afficher 3 images  [OK]
// cacher toutes les images [OK]
// Afficher la 1 image ( quel index j'utilise) [OK]
// répeter une alerte toutes les 3s [OK]
// remplcer l'alert par l'affichage de l'image modifier l'index
//modifier l'index
// masquer toutes les images
// afficher la nouvelle image
