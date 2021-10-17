var player = {
    img: 0,
    x: 0,
    y: 0,
    up: false,
    down: false,
    left: false,
    right: false
};

function move(entity, tile, num) {
    if (entity.up) {
        entity.y -= num;
    }
    if (entity.down) {
        entity.y += num;
    }
    if (entity.left) {
        player.x -= num;
    }
    if (entity.right) {
        player.x += num;
    }
    
    //make 
    tilemap[tile][1] =  entity.x;
    tilemap[tile][2] = entity.y;
};