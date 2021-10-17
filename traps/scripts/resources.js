//resource loader, loads all images, sounds, models, and maps

//images
var images = [];
images[0] = new Image(); images[0].src = "./assets/images/dev.bmp";
images[1] = new Image(); images[1].src = "./assets/images/debug_daniel.bmp";
images[2] = new Image(); images[2].src = "./assets/images/water.bmp";
images[3] = new Image(); images[3].src = "./assets/images/X.png";
images[4] = new Image(); images[4].src = "./assets/images/dev_brick.bmp";
images[5] = new Image(); images[5].src = "./assets/images/ghost_sub.png";
images[6] = new Image(); images[6].src = "./assets/images/water_night.bmp";
images[7] = new Image(); images[7].src = "./assets/images/bob_test.png";
images[8] = new Image(); images[8].src = "./assets/images/dave_test.png";
images[9] = new Image(); images[9].src = "./assets/images/jimmy_test.png";


//create editor
for (i = 0; i < images.length; i++) {
    document.getElementById("editor").innerHTML += "<img src='" + images[i].src + "' onclick='selectimg(" + i + ")'>";
}

var selected = 0;
function selectimg(imgnum) {
    document.getElementById("selected").src = images[imgnum].src;
    selected = imgnum;
}
//sounds

//models

//maps
