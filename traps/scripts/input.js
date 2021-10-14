//detects control input and changes control variables

var binds = [
    {key:"38", cmd: function() {move(0,0,1)}},
    {key:"40", cmd: function() {move(0,0,-1)}},
    {key:"37", cmd: function() {move(0,-1,0)}},
    {key:"39", cmd: function() {move(0,1,0)}},
    {key:"32", cmd: function() {move(1,0,0)}},
    {key:"16", cmd: function() {move(-1,0,0)}},
    
    {key:"48", cmd: function() {builder.tile = 0}},
    {key:"49", cmd: function() {builder.tile = 1}},
    {key:"50", cmd: function() {builder.tile = 2}},
    {key:"51", cmd: function() {builder.tile = 3}},
    {key:"52", cmd: function() {builder.tile = 4}},
    
];



window.addEventListener("keydown", downpress, false);
function downpress(press) {
    
    for (i = 0; i < binds.length; i++) {
        if (press.keyCode == binds[i].key) {
            binds[i].cmd();
        }
    }
    
}