var midi = require("../build/default/midi.node");

var output = new midi.output();
console.log(output.getPortCount());
console.log(output.getPortName(0));
output.openPort(0);
output.sendMessage(0);
output.sendMessage(100);
output.closePort();
