JSSpeccy.VirtualCanva = function(opts){
    var self = {};
    
    self.setWidth=function(width){
        console.log("New width "+width)
    }

    self.setHeight=function(height){
        console.log("New height "+height)
    }

    self.createImageData=function(width,height){
        return Array(width*height*4).fill(0)
    }

    self.getImageData=function(x, y, width, height){
        return Array(width*height*4).fill(0);
    }

    self.putImageData=function(imageData, x, y){
        return console.log(imageData.toString());
    }


    
   
}