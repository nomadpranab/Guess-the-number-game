var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var nothing = function () {
  console.log('I hear nothing!');
}
//Assign the event handler to an event:
//eventEmitter.addListener('scream', myEventHandler);
eventEmitter.on('scream', nothing);

//Fire the 'scream' event:
eventEmitter.emit('scream');
//eventEmitter.emit('scream');