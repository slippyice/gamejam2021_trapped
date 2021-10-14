//primary "game loop" that runs, calls other functions in the correct order every "cycle"

//DEBUG MAP
var map = [
    [0,0,-16],
    [1,0,0,16,32,0,0,5,32]
    [1,16,16],
    {x:0, y:0, img:"water.png"}
];

var collisions = [1,2];

//set cycle interval
window.addEventListener('load', function() { 
    window.setInterval(cycle(), 16);
}, false);

//cycle
function cycle() {
    
    //register inputs
    
    //
    
    //render frame
    RENDER.frame(map);
    
    //render gui
}













//cycle
//render
//resources