var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {//3
   console.log('Batsman hits the ball');
   eventEmitter.emit('Ball in air');
}

eventEmitter.on('Match', connectHandler);//1-2

eventEmitter.on('Ball in air', function() {//4
   console.log('Fielder catches it');
});

eventEmitter.emit('Match');//1st

console.log("Batsman is out!");//last
