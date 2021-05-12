JSSpeccy.Virtual = function(){
    var self = {};

    self.getCurrentTimestamp=function(){
        performance.now()
    }

    self.requestAnimationFrame = (
		/*window.requestAnimationFrame || window.msRequestAnimationFrame ||
		window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
		window.oRequestAnimationFrame ||*/
		function(callback) {
			setTimeout(function() {
				callback(self.getCurrentTimestamp());
			}, 3000);
		}
	);

	return self;
}
