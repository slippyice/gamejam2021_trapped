//canvas config
var canvas_id = "f2canvas"; //id of canvas element
var tile_dimensions = 16; //square dimensions of tiles
var grid_width = 320; //horizontal resolution
var grid_height = 160; //vertical resolution
var translate_origin = true; //translates 0,0 to the center of the canvas
            
//apply canvas config
var canvas = document.getElementById(canvas_id); //get canvas element
var ctx = canvas.getContext("2d"); //get canvas context
canvas.width = grid_width; //set horizontal resolution
canvas.height = grid_height; //set vertical resolution
if (translate_origin) {
    ctx.translate(canvas.width / 2,canvas.height / 2); //translates 0,0 from the top left corner of the canvas to the center
}

//disable antialiasing
ctx.ImageSmoothingEnabled    = false;
ctx.oImageSmoothingEnabled      = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled     = false;
ctx.imageSmoothingEnabled       = false;