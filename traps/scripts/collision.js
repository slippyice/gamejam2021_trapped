//handles all collision detection

var COLLISION = {
    
    squares: function (x1, y1, x2, y2, size) {
        if (x1 < x2 + size && x1 + size > x2 && y1 < y2 + size && y1 + size > y2) {
            return true;
        } else {
            return false;
        }
    },
    
    rectangles: function(x1, y1, width1, height1, x2, y2, width2, height2) {
        
    },
    
};