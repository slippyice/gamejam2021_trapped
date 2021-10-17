//map of all tiles
var tilemap = [
    [0,0,0],
    [0,16,16],
    [0,-16,-16],
    [0,16,0],
    [0,0,16],
    [0,32,-32,32,32,0,0,16,16],
    [3,0,0],
];

//array to render
var rendermap = [0,1,2,3,4,5,6];

var sectors = [
    [
        {
            layers: [],
            walls: [],
            entities: []
        },
    ],
    [
        
    ]
    
];

var sector_size = 16*10;

function place_tile(img,x,y) {
    tilemap[tilemap.length] = [img, player.x, player.y];
    rendermap[rendermap.length] = rendermap.length;
}

//map > layer > sector > rendermap


//create rendermap
function build_render_map() {
    for (i = 0; i < sector.length; i++) {
        
    }
}