//primary "game loop" that runs, calls other functions in the correct order every "cycle"

//set cycle interval
window.addEventListener('load', function() { 
    setInterval(function(){ cycle(); }, 16);
}, false);

//cycle
function cycle() {
    
    //player movement
    move(player, 6, 1);
    
    //testing enlarging tiles
    if (tilemap[5][3] < 128) {
        tilemap[5][3]++;
        tilemap[5][4]++;
    }
    
    //render frame
    ctx.fillRect(-160, -80, 320, 160); //temporary clear canvas, remove later for optomization
    ctx.translate(-player.x, -player.y); //screen scrolling
    RENDER.frame(tilemap, rendermap); //render the tiles
    ctx.translate(player.x, player.y); //screen scrolling correction
}
