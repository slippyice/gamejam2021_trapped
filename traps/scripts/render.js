var RENDER = {
    
    //main
    frame: function(rendex) { //translate, rotate, scale, tint?, other filter?
        for (i=0; i < rendex.length; i++) { //runs through rendering index
            
            var obj = rendex[i];
            
            //simple or complex
            if (obj.length == 3) {
                RENDER.simple(obj[0],obj[1],obj[2]); //renders image with simple data.
                //           (image, x,     y     )
            } else {
                RENDER.complex(obj[0], obj[1], obj[2], obj[3], obj[4], obj[5], obj[6], obj[7], obj[8]); //renders image with complex data
                //            (image,  x,      y,      width,  height, slicex, slicey, slicew, sliceh)
            }
            
        }
    },
    
    //simple
    simple: function (img, x, y) {
        ctx.drawImage(images[img],x,y); //simple image print.
    },
    
    //complex
    complex: function(img, x, y, width, height, slicex, slicey, slicewidth, sliceheight) {
        ctx.drawImage(images[img], slicex, slicey, slicewidth, sliceheight, x, y, width, height);
        //takes an image slice,
    },
    
    
    //translate
    //rotate
    //scale
    
    //text    
    //line
    //shape
    //circle
    //rectangle
    //gradient?
    
    //3d
    //brushfill
    //polygon
};