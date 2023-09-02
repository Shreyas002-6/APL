var events = require('events');
var eventEmitter = new events.EventEmitter();
var greet = function () {
  console.log('Oh hello!');
}
eventEmitter.on('hello', greet);
eventEmitter.emit('hello');
