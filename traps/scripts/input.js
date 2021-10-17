//detects control input and changes control variables

var downbinds = [
    
    //arrow key movement
    {key:"38", cmd: function() {player.up = true}}, //up
    {key:"40", cmd: function() {player.down = true}}, //down
    {key:"37", cmd: function() {player.left = true}}, //left
    {key:"39", cmd: function() {player.right = true}}, //right
    
    //editor movement
    {key:"87", cmd: function() {player.y -= 16}}, //w
    {key:"83", cmd: function() {player.y += 16}}, //s
    {key:"65", cmd: function() {player.x -= 16}}, //a
    {key:"68", cmd: function() {player.x += 16}}, //d
    
    //place tile
    {key:"32", cmd: function() {place_tile(selected, player.x, player.y)}}, //space
    
    //go back to 0,0
    {key:"82", cmd: function() {player.x = 0; player.y = 0;}}, //r
];

var upbinds = [
    {key:"38", cmd: function() {player.up = false}}, //up
    {key:"40", cmd: function() {player.down = false}}, //down
    {key:"37", cmd: function() {player.left = false}}, //left
    {key:"39", cmd: function() {player.right = false}}, //right    
];

window.addEventListener("keydown", downpress, false);
function downpress(press) {
    
    for (i = 0; i < downbinds.length; i++) {
        if (press.keyCode == downbinds[i].key) {
            downbinds[i].cmd();
        }
    }
    
}

window.addEventListener("keyup", uppress, false);
function uppress(press) {
    
    for (i = 0; i < upbinds.length; i++) {
        if (press.keyCode == upbinds[i].key) {
            upbinds[i].cmd();
        }
    }
    
}