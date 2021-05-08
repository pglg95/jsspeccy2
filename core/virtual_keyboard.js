JSSpeccy.VirtualKeyboard = function(opts){
    var self = {};
    
    document.onkeydown = opts.onkeydown;
	document.onkeyup = opts.onkeyup;
	document.onkeypress = opts.onkeypress;
   
}