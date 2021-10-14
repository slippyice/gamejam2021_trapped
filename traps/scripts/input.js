//detects control input and changes control variables

var binds = [
    {key:"38", cmd: function() {player_input(1, 1)}},//up arrow
    {key:"40", cmd: function() {player_input(1, -1)}},//down arrow
    {key:"37", cmd: function() {player_input(0, -1)}},//left arrow
    {key:"39", cmd: function() {player_input(0, 1)}},//right arrow
    {key:"32", cmd: function() {move(1,0,0)}},
    {key:"16", cmd: function() {move(-1,0,0)}},
    
    {key:"48", cmd: function() {builder.tile = 0}},
    {key:"49", cmd: function() {builder.tile = 1}},
    {key:"50", cmd: function() {builder.tile = 2}},
    {key:"51", cmd: function() {builder.tile = 3}},
    {key:"52", cmd: function() {builder.tile = 4}},
    
    {key:"90", cmd: function() {player_input(3, 1)}},//z
    {key:"88", cmd: function() {player_input(4, 1)}},//x
];

var player_input_data = [
    0,//dir x
    0,//dir y
    0,//dir z
    0,//main (key z)
    0,//secondary (key x)
];

//'input' corresponds to an index in player_input_data
function player_input(input, value) {
    if ((input==="")&&(value==="")) {
        for (i = 0; i < player_input_data.length; i++) {
            player_input_data[i] = 0;
        }
        return;
    }
    player_input_data[input] = value;
}

window.addEventListener("keydown", downpress, false);
function downpress(press) {
    
    for (i = 0; i < binds.length; i++) {
        if (press.keyCode == binds[i].key) {
            binds[i].cmd();
        }
    }
    
}