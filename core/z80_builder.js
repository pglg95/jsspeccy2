var fs = require('fs');

// file is included here:
eval(fs.readFileSync('build/z80.js')+'');

var z80Traps = [
    [0x056b, 0xc0, 'JSSpeccy.traps.tapeLoad()'],
    [0x0111, 0xc0, 'JSSpeccy.traps.tapeLoad()']
  ];
  
global.buildZ80({
    traps: z80Traps,
    applyContention: true
  });

fs = require('fs');
fs.writeFile('build/z80p.js', global.code, function (err) {
  if (err) return console.log(err);
  console.log('Done');
});