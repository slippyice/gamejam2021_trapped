//primary "game loop" that runs, calls other functions in the correct order every "cycle"

//DEBUG MAP
var map = [
    [2,-64,-64,256,64,0,0,64,16],
    [2,-32,-16,128,32,0,0,64,16],
    [0,0,-16],
    [1,0,0,16,32,0,0,5,32],
    [1,16,16],
    //{x:0, y:0, img:"water.png"}
];

var collisions = [1,2];

//set cycle interval
window.addEventListener('load', function() { 
    window.setInterval(cycle(), 16);
}, false);

//cycle
function cycle() {
    
    //register inputs

    ///////junk test code////
    let entities = [[1,24*player_input_data[0],24*player_input_data[1]]];//an array containing the player sprite
    player_input();//clears player input data
    let mapped = map.concat(entities);//combines the map and entities array
    //////junk test code end/////

    //
    
    //render frame
    RENDER.frame(mapped);
    
    //render gui
}













//cycle
//render
//resources