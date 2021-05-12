var fs = require('fs');

// file is included here:
eval(fs.readFileSync('jsspeccy-core.min.js')+'');

var jsspeccy = JSSpeccy({
    'autostart': true,
    'measurePerformance': true
});
jsspeccy.loadFromUrl(
            'http://jsspeccy.zxdemo.org/games/ant_attack.z80' + filename,
            {'autoload': true}
);
  
